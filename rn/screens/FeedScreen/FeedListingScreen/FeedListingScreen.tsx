import * as React from 'react';
import { Dimensions, Image } from 'react-native';
import { NavigationState, RouteProp, useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from '../../../config/ThemeManager';
import { SecondaryText, OpaqueView, InnerView, PrimaryHighlightText, ScrollView, Text, Button } from '../../../components/Themed';
import styles from './FeedListingScreen.style';

import { ListingContext } from '../../../config/ListingProvider';
import { share } from '../../../utils/share'; 
import { Listing } from '../../../models';
import { FeedParamList } from '../../../types';

import ListingPageMenu from './components/ListingPageMenu/ListingPageMenu';
import ListingPageActionButtonsBar from './components/ListingPageActionButtonsBar/ListingPageActionButtonsBar';
import { ScreenLoadingComponent } from '../../../components/ScreenLoadingComponent/ScreenLoadingComponent';

function getFeedListing(id: number, listingType: string) {
  return fetch(`https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Profile.php?action=getListings&_listingId=${id}&listingType=${listingType}&_profileId=2`)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson[0];
    })
    .catch(error => {
      alert(error);
      console.error(error);
    });
}

type FeedListingScreenProps = {
  route: RouteProp<FeedParamList, 'FeedListingScreen'>;
  navigation: NavigationState;
};

const mainHeaderShareButton = () => (
  <FontAwesome5 name='share' color='#eeeeee' size={20} style={{ alignItems: 'flex-end' }} />
);

export default function FeedListingScreen(props: FeedListingScreenProps) {
  const { selectedListing } = React.useContext(ListingContext);
  const { id, listingType, listingName } = props.route.params;
  const { theme } = useTheme();
  const nav = useNavigation();
  let mountedRef = React.useRef(true);

  const [listing, setListing] = React.useState({} as Listing);
  const [screenWidth, setScreenWidth] = React.useState(Dimensions.get('window').width);
  const [loaded, setLoaded] = React.useState(false);
  const dimensionsWidth = Dimensions.get('window').width;
  const imgHeight = Math.round((dimensionsWidth / 960) * 640);
  const imgWidth = dimensionsWidth;
  
  React.useEffect(() => {
    Dimensions.addEventListener('change', (dimensions) => {
      if (!mountedRef.current) return null;
      setScreenWidth(dimensions.window.width);
    });

    getFeedListing(id, listingType).then((listing: Listing) => {
      if (!mountedRef.current) return null;
      setListing(listing);
      setLoaded(true);
    });

    return () => {
      mountedRef.current = false;
    };
  }, []);

  const startShare = () => {
    // const url = `https://www.mynyte.co.uk/feed/${listingType}/${id}/${listingName}`;
    const url = 'https://www.facebook.com';
    const title = `Something MyNyte`;
    const message = `MyNyte | A framework for building native apps using ppaskdpask: ${url}`;
    const subject = 'Subject';
    const dialogTitle = `Share ${listingName}'s page`;
    share(url, title, subject, message, dialogTitle).then(result => {
      if (!result || result?.error) {
        const errorMsg = (result) ? result?.error.message : 'There was an error';
        alert(errorMsg);
      }
      else {
        // console.log('good', result);
      }
    });
  };

  return (
    <ScrollView style={styles(theme).container}>
      {!loaded &&
        <ScreenLoadingComponent />}
      {!!loaded &&
        <InnerView>
          <Image
            resizeMode='cover'
            source={{ uri: `https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${listing.currentCoverPhotoName}` }}
            style={{ width: imgWidth, height: imgHeight }} />
          <ListingPageActionButtonsBar listing={listing} />
          <OpaqueView style={[styles(theme).pageMenuHeaderContainer, styles(theme).contentContainer]}>
            <OpaqueView style={{ flexDirection: 'column', alignItems: 'flex-start', maxWidth: '80%' }}>
              <SecondaryText>{listing.name}</SecondaryText>
              <PrimaryHighlightText>{listing.listingType1} in {listing.town}</PrimaryHighlightText>
            </OpaqueView>
            <Button type='clear'
              icon={mainHeaderShareButton()}
              onPress={startShare}
              titleStyle={{ color: '#fff' }}
              buttonStyle={{ borderRadius: 24 }}></Button>
          </OpaqueView>
          <ListingPageMenu listing={listing} />
          <OpaqueView style={{ backgroundColor: theme.primaryActiveBackground, padding: 15 }}>
            <SecondaryText>Info / About</SecondaryText>
          </OpaqueView>
          <OpaqueView style={styles(theme).contentContainer}>
            <SecondaryText>Something about Listing ... blah blah blah</SecondaryText>
            <Text>Something else about Listing ... blah blah blah</Text>
          </OpaqueView>
        </InnerView>
      }
    </ScrollView>
  );
}
