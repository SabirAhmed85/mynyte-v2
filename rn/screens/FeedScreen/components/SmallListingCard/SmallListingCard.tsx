import * as React from 'react';
import { Card } from 'react-native-elements';

import { useTheme } from '../../../../config/ThemeManager';
import { Button, PrimaryButton, Text } from '../../../../components/Themed';
import { nativeElemsStyles, styles } from './SmallListingCard.style';

import { Listing } from '../../../../models';

import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ListingContext } from '../../../../config/ListingProvider';
import { FontAwesome5 } from '@expo/vector-icons';
import { openBrowserAsync } from 'expo-web-browser';

export default function SmallListingCard(props: { listing: Listing, screenWidth: number }) {
  const { selectListing } = React.useContext(ListingContext);
  const { theme } = useTheme();
  const nav = useNavigation();
  const onPress = () => {
    const params = { listingType: listing.listingType, id: listing.relListingId, listingName: listing.name };
    selectListing(listing); 
    nav.navigate('Feed', { screen: 'FeedListingScreen', params: params });
  };

  async function openBrowser() {
    
  };

  const listing = props.listing;
  const dimensionsWidth = props.screenWidth > 800 ? 560 : props.screenWidth * 0.7;
  const imgHeight = Math.round((dimensionsWidth / 960) * 640);
  const imgWidth = dimensionsWidth;

  return (
    <React.Fragment>
      {listing &&
        <Card containerStyle={[nativeElemsStyles(theme).container, { maxWidth: dimensionsWidth }]}>
          <TouchableOpacity onPress={onPress}>
            <React.Fragment>
              <Image
                resizeMode='cover'
                source={{ uri: `https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${listing.currentCoverPhotoName}` }}
                style={{ width: imgWidth, height: imgHeight }} />
              <Text style={styles(theme).offerBody}>{listing.name}</Text>
            </React.Fragment>
          </TouchableOpacity>
          <PrimaryButton onPress={openBrowser} containerStyle={{ padding: 10 }} titleStyle={{ marginLeft: 20 }} icon={<FontAwesome5 name='utensils' color={theme.secondaryText} size={18} />} title='Book Table' />
        </Card>
      }
    </React.Fragment>
  );
}
