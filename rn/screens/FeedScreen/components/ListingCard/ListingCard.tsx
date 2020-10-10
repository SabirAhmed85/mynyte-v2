import * as React from 'react';
import { Card } from 'react-native-elements';

import { useTheme } from '../../../../config/ThemeManager';
import { OpaqueView, Text } from '../../../../components/Themed';
import { nativeElemsStyles, styles } from './ListingCard.style';

import { Listing } from '../../../../models';
import ListingItemBottomBar from '../../../../components/ListingItemBottomBar/ListingItemBottomBar';
import { Dimensions, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ListingCard(props: { listing: Listing, screenWidth: number }) {
  const { theme } = useTheme();
  const nav = useNavigation();
  const onPress = () => {
    console.log(listing.listingType, listing.relListingId, listing.name);
    const params = { listingType: listing.listingType, id: listing.relListingId, listingName: listing.name }; 
    nav.navigate('Feed', { screen: 'FeedListingScreen', params: params });
  };

  const listing = props.listing;
  const dimensionsWidth = props.screenWidth;
  const imgHeight = Math.round(dimensionsWidth * 9 / 16);
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
