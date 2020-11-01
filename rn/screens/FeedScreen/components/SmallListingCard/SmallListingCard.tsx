import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { Card } from 'react-native-elements';

import { useTheme } from '../../../../config/ThemeManager';
import { Button, PrimaryActiveText, PrimaryButton, SecondaryText, Text } from '../../../../components/Themed';
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
              <Card.Title style={{
                fontWeight: 'normal',
                fontFamily: 'titillium',
                borderBottomColor: listing.totalOffers > 0 ? theme.primaryActiveColor : '#4c4a4a',
                borderBottomWidth: 2, padding: 10, textAlign: 'left',
                marginBottom: 10,
              }}>

                <SecondaryText>{listing.name}</SecondaryText>
              </Card.Title>
              <Text style={{ padding: 0, fontSize: 13, paddingLeft: 10, marginBottom: 1, }}>Taking bookings until 10pm</Text>
              <Text style={{ padding: 0, fontSize: 13, paddingLeft: 10, marginBottom: 1, }}>4 Offers</Text>
              <PrimaryActiveText bold style={{ padding: 0, fontSize: 13, paddingLeft: 10, paddingRight: 10, marginBottom: 2, }}>1 MyNyte Exclusive</PrimaryActiveText>
            </React.Fragment>
          </TouchableOpacity>
          <PrimaryButton onPress={openBrowser} containerStyle={{ padding: 10 }} titleStyle={{ marginLeft: 15, fontSize: 15 }} icon={<FontAwesome5 name='utensils' color={theme.lightText} size={18} />} title='Book Table' />
        </Card>
      }
    </React.Fragment>
  );
}
