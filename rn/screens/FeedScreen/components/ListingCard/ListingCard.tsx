import * as React from 'react';
import { Card } from 'react-native-elements';

import { useTheme } from '../../../../config/ThemeManager';
import { Text } from '../../../../components/Themed';
import { nativeElemsStyles, styles } from './ListingCard.style';

import { Listing } from '../../../../models';
import ListingItemBottomBar from '../../../../components/ListingItemBottomBar/ListingItemBottomBar';
import { Image } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ListingContext } from '../../../../config/ListingProvider';

export default function ListingCard(props: { listing: Listing, screenWidth: number }) {
  const { selectListing } = React.useContext(ListingContext);
  const { theme } = useTheme();
  const nav = useNavigation();
  const onPress = () => {
    const params = { listingType: listing.listingType, id: listing.relListingId, listingName: listing.name };
    selectListing(listing); 
    nav.navigate('Feed', { screen: 'FeedListingScreen', params: params });
  };

  const listing = props.listing;
  const dimensionsWidth = props.screenWidth > 800 ? 800 : props.screenWidth;
  const imgHeight = Math.round((dimensionsWidth / 960) * 640);
  const imgWidth = dimensionsWidth;

  return (
    <React.Fragment>
      {listing &&
        <Card containerStyle={nativeElemsStyles(theme).container}>
          <TouchableWithoutFeedback onPress={onPress}>
            <React.Fragment>
              <Image
                resizeMode='cover'
                source={{ uri: `https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${listing.currentCoverPhotoName}` }}
                style={{ width: imgWidth, height: imgHeight }} />
              <Text style={styles(theme).offerBody}>{listing.name}</Text>
            </React.Fragment>
          </TouchableWithoutFeedback>
          <ListingItemBottomBar listing={listing} />
        </Card>
      }
    </React.Fragment>
  );
}
