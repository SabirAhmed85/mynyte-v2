import * as React from 'react';
import { Dimensions, Image, View as DefaultView } from 'react-native';
import { NavigationState, RouteProp, useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from '../../../config/ThemeManager';
import { SecondaryText, InnerView, PrimaryHighlightText, ScrollView, Text, Button } from '../../../components/Themed';
import styles from './FeedListingScreen.style';

import { ListingContext } from '../../../config/ListingProvider';
import { share } from '../../../utils/share';
import { Listing } from '../../../models';
import { FeedParamList } from '../../../types';

import { FadeInPanel } from '../../../components/FadeInPanel/FadeInPanel';
import { PageSectionHeading } from '../../../components/PageSectionHeading/PageSectionHeading';
import ListingPageMenu from './components/ListingPageMenu/ListingPageMenu';
import ListingPageActionButtonsBar from './components/ListingPageActionButtonsBar/ListingPageActionButtonsBar';
import ListingPageActionButtonsBarDummy from './components/ListingPageActionButtonsBar/ListingPageActionButtonsBarDummy';
import ListingPageMenuDummy from './components/ListingPageMenu/ListingPageMenuDummy';
import { getFeedListing } from '../../../api/listing';

type FeedListingScreenProps = {
  route: RouteProp<FeedParamList, 'FeedListingScreen'>;
  navigation: NavigationState;
};

const MainListingImage = (props: { imageName: string, imgWidth: number, imgHeight: number }) => (
  <Image
    resizeMode='cover'
    source={{ uri: props.imageName }}
    style={{ width: props.imgWidth, height: props.imgHeight }} />
);

const MainHeaderShareButton = (theme: any) => (
  <FontAwesome5 name='share' color={theme.tertiaryText} size={20} style={{ alignItems: 'flex-end' }} />
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

  React.useEffect(() => {
    getFeedListing(id, listingType).then((listing: Listing) => {
      if (!mountedRef.current) return null;
      setListing(listing);
      setLoaded(true);
    });
  }, [id, listingType, listingName]);

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
      <InnerView>
        <DefaultView style={{ width: imgWidth, height: imgHeight, minHeight: imgHeight }}>
          {!loaded &&
            <MainListingImage
              imageName={`https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/default.jpg`}
              imgWidth={imgWidth}
              imgHeight={imgHeight} />
          }
          {!!loaded &&
            <FadeInPanel duration={300}>
              <MainListingImage
                imageName={`https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${listing.currentCoverPhotoName}`}
                imgWidth={imgWidth}
                imgHeight={imgHeight} />
            </FadeInPanel>
          }
        </DefaultView>

        {!loaded &&
          <ListingPageActionButtonsBarDummy />
        }
        {!!loaded &&
          <ListingPageActionButtonsBar listing={listing} />
        }
        <DefaultView style={[styles(theme).pageMenuHeaderContainer, styles(theme).contentContainer]}>
          <DefaultView style={styles(theme).pageMenuHeader}>
            <SecondaryText bold>{listing.name}</SecondaryText>
            <PrimaryHighlightText>{listing.listingType1} in {listing.town}</PrimaryHighlightText>
          </DefaultView>
          <Button type='clear'
            icon={MainHeaderShareButton(theme)}
            onPress={startShare}
            titleStyle={{ color: '#fff' }}
            buttonStyle={{ borderRadius: 24 }}></Button>
        </DefaultView>
        {!loaded &&
          <ListingPageMenuDummy />
        }
        {!!loaded &&
          <ListingPageMenu listing={listing} />
        }
        
        <PageSectionHeading theme={theme} content='Info / About' />
        {!!loaded &&
          <DefaultView style={styles(theme).contentContainer}>
            <SecondaryText>Something about Listing ... blah blah blah</SecondaryText>
            <Text>Something else about Listing ... blah blah blah</Text>
          </DefaultView>
        }
      </InnerView>

    </ScrollView>
  );
}
