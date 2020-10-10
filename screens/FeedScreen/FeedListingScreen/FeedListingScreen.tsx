import * as React from 'react';

import { useTheme } from '../../../config/ThemeManager';
import { SecondaryText, OpaqueView, PrimaryHighlightText, ScrollView, Text, Button } from '../../../components/Themed';
import styles from './FeedListingScreen.style';

import { Listing } from '../../../models';
import { Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ListingPageMenu from './components/ListingPageMenu/ListingPageMenu';
import ListingPageActionButtonsBar from './components/ListingPageActionButtonsBar/ListingPageActionButtonsBar';
import { FontAwesome5 } from '@expo/vector-icons';
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
  route: any;
  navigation: any;
};

const mainHeaderShareButton = () => (
  <FontAwesome5 name='share' color='#eeeeee' size={20} style={{ alignItems: 'flex-end' }} />
);

export default function FeedListingScreen(props: FeedListingScreenProps) {
  const { id, listingType } = props.route.params;
  const { theme } = useTheme();
  const nav = useNavigation();
  let mountedRef = React.useRef(true);
  
  const [listing, setListing] = React.useState({} as Listing);
  const [screenWidth, setScreenWidth] = React.useState(Dimensions.get('window').width);
  const [loaded, setLoaded] = React.useState(false);
  const dimensionsWidth = Dimensions.get('window').width;
  const imgHeight = Math.round(dimensionsWidth * 9 / 16);
  const imgWidth = dimensionsWidth;
  console.log('NAAAV', nav.dangerouslyGetState());
  React.useEffect(() => {
    Dimensions.addEventListener('change', (dimensions) => {
      if (!mountedRef.current) return null;
      setScreenWidth(dimensions.window.width);
    });

    getFeedListing(id, listingType).then((listing: Listing) => {
      if (!mountedRef.current) return null;
      setListing(listing);
      nav.setParams({ listingName: listing.name });
      setLoaded(true);
    });

    return () => {
      mountedRef.current = false;
    };
  }, []);
  return (
    <ScrollView style={styles(theme).container}>
      {!loaded &&
      <ScreenLoadingComponent />}
      {!!loaded &&
        <React.Fragment>
          <Image
            resizeMode='cover'
            source={{ uri: `https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${listing.currentCoverPhotoName}` }}
            style={{ width: imgWidth, height: imgHeight }} />
          <ListingPageActionButtonsBar listing={listing} />
          <OpaqueView style={styles(theme).pageMenuHeaderContainer}>
            <OpaqueView style={{ flexDirection: 'column', alignItems: 'flex-start', maxWidth: '80%' }}>
              <SecondaryText>{listing.name}</SecondaryText>
              <PrimaryHighlightText>{listing.listingType1} in {listing.town}</PrimaryHighlightText>
            </OpaqueView>
            <Button type='clear' icon={mainHeaderShareButton()} buttonStyle={{borderRadius: 24}}></Button>
          </OpaqueView>
          <ListingPageMenu listing={listing}/>
          <OpaqueView style={{ backgroundColor: theme.primaryActiveBackground, padding: 15 }}>
            <SecondaryText>Info / About</SecondaryText>
          </OpaqueView>
          <OpaqueView style={{ padding: 15 }}>
            <SecondaryText>Something about Listing ... blah blah blah</SecondaryText>
            <Text>Something else about Listing ... blah blah blah</Text>
          </OpaqueView>
        </React.Fragment>
      }
    </ScrollView>
  );
}
