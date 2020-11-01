import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { Card } from 'react-native-elements';

import { useTheme } from '../../../../config/ThemeManager';
import { PrimaryActiveText, SecondaryText, Text } from '../../../../components/Themed';
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
  const dimensionsWidth = props.screenWidth > 770 ? 770 : props.screenWidth - 30;
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
                style={{ width: imgWidth, height: imgHeight, borderTopLeftRadius: 4, borderTopRightRadius: 4, overflow: 'hidden' }} />
              <Card.Title style={{
                fontWeight: 'normal',
                fontFamily: 'titillium',
                borderBottomColor: '#4c4a4a',
                borderBottomWidth: 2, padding: 10, textAlign: 'left',
                marginBottom: 0,
              }}>
                <SecondaryText>{listing.name}</SecondaryText>
              </Card.Title>
            </React.Fragment>
          </TouchableWithoutFeedback>
          <DefaultView style={{ paddingTop: 10, paddingBottom: 5 }}>
            <Text style={{ padding: 0, fontSize: 13, paddingLeft: 10, marginBottom: 6, }}>{listing.relListingId} friends are interested in this</Text>
            <DefaultView style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
              <Text style={{ padding: 0, fontSize: 13, paddingLeft: 10, marginBottom: 1, }}>{listing.businessName}</Text>
              <PrimaryActiveText bold style={{ padding: 0, fontSize: 13, paddingLeft: 10, paddingRight: 10, marginBottom: 2, }}>1 MyNyte Exclusive</PrimaryActiveText>
            </DefaultView>
            <ListingItemBottomBar listing={listing} />
          </DefaultView>
        </Card>
      }
    </React.Fragment>
  );
}
