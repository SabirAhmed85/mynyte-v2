import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { Card } from 'react-native-elements';

import { useTheme } from '../../../../config/ThemeManager';
import { Button, PrimaryActiveText, PrimaryButton, SecondaryText, Text } from '../../../../components/Themed';
import { nativeElemsStyles, styles } from './SmallListingCard.style';

import { Listing } from '../../../../models';

import { Image } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ListingContext } from '../../../../config/ListingProvider';
import { FontAwesome5 } from '@expo/vector-icons';
import { openBrowserAsync } from 'expo-web-browser';

export default function SmallListingCard(props: { listing: Listing, screenWidth: number, type: string }) {
  const { selectListing } = React.useContext(ListingContext);
  const { theme } = useTheme();
  const nav = useNavigation();
  const { listing, screenWidth, type } = props;
  const onPress = () => {
    const params = { listingType: listing.listingType, id: listing.relListingId, listingName: listing.name };
    // selectListing(listing);
    nav.navigate('Feed', { screen: 'FeedListingScreen', params: params });
    window.setTimeout(() => { selectListing(listing.relListingId) }, 1);
  };

  async function openBrowser() {

  };

  const dimensionsWidth = (screenWidth * 0.7) > 320 ? 320 : screenWidth * 0.7;
  const imgHeight = Math.round((dimensionsWidth / 960) * 640);
  const imgWidth = dimensionsWidth;

  return (
    <React.Fragment>
      {listing &&
        <Card containerStyle={[nativeElemsStyles(theme).container, { width: dimensionsWidth }]}>
          <TouchableHighlight underlayColor={theme.background} activeOpacity={0.1} onPress={onPress}>
            <React.Fragment>
              <DefaultView>
                <Image
                  resizeMode='cover'
                  source={{ uri: `https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${listing.currentCoverPhotoName}` }}
                  style={{ width: imgWidth, height: imgHeight }} />
                <DefaultView style={{
                  borderBottomColor: ((type !== 'personalised' && listing.totalOffers > 0) || (type === 'personalised' && listing.relListingId > 80)) ? theme.primaryActiveColor : '#4c4a4a',
                  borderBottomWidth: 2,
                  padding: 10,
                  margin: 0,
                  marginBottom: 10,
                }}>
                  <Card.Title style={{
                    fontWeight: 'normal',
                    fontFamily: 'titillium', textAlign: 'left',
                    marginBottom: 0,
                  }}>
                    <SecondaryText>{listing.name}</SecondaryText>
                  </Card.Title>
                </DefaultView>
                {/*
                type !== 'personalised' &&
                  <Image
                    resizeMode='cover'
                    source={{ uri: `https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${listing.currentCoverPhotoName}` }}
                    style={{ width: 63, height: 63, borderRadius: 50, position: 'absolute', right: 8, bottom: 12, borderColor: theme.cardBackground, borderWidth: 2, }} />
                */}
                {type === 'personalised' &&
                  <DefaultView style={{ width: 63, height: 63, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 50, borderTopRightRadius: 50, position: 'absolute', flexDirection: 'column', right: 8, bottom: 12, backgroundColor: theme.cardBackground, borderColor: theme.cardBackground, borderWidth: 2, }}>
                    <FontAwesome5 name='ticket-alt' size={16} color={listing.relListingId > 80 ? theme.primaryActiveColor : theme.secondaryText} />
                    {listing.relListingId > 80 &&
                      <PrimaryActiveText style={{ fontSize: 12 }}>Cinema</PrimaryActiveText>
                    }
                    {listing.relListingId < 81 &&
                      <SecondaryText style={{ fontSize: 12 }}>Cinema</SecondaryText>
                    }
                  </DefaultView>
                }
              </DefaultView>
              {type !== 'personalised' &&
                <React.Fragment>
                  {listing.totalOffers < 1 &&
                    <Text style={{ padding: 0, fontSize: 13, paddingLeft: 10, marginBottom: 1, }}>4 Offers</Text>
                  }
                  {listing.totalOffers > 0 &&
                    <PrimaryActiveText bold style={{ padding: 0, fontSize: 13, paddingLeft: 10, paddingRight: 10, marginBottom: 2, }}>1 MyNyte Exclusive</PrimaryActiveText>
                  }
                  <Text style={{ padding: 0, fontSize: 13, paddingLeft: 10, marginBottom: 1, }}>Taking bookings until 10pm</Text>
                  <Text style={{ padding: 0, fontSize: 13, paddingLeft: 10, marginBottom: 1, }}>4 Offers</Text>
                </React.Fragment>
              }
              {type === 'personalised' &&
                <React.Fragment>
                  {listing.relListingId > 80 &&
                    <PrimaryActiveText bold style={{ padding: 0, fontSize: 12, paddingLeft: 10, marginBottom: 2, flex: 1 }}>{listing.relListingId}% Match for you & friends</PrimaryActiveText>
                  }
                  {listing.relListingId < 81 &&
                    <Text bold style={{ padding: 0, fontSize: 12, paddingLeft: 10, marginBottom: 2, flex: 1 }}>{listing.relListingId}% Match for you & friends</Text>
                  }
                  <Text style={{ padding: 0, fontSize: 12, paddingLeft: 10, marginBottom: 10, }}>Watch it with Jason, Simon or 3 others</Text>
                  <Text style={{ padding: 0, fontSize: 13, paddingLeft: 10, marginBottom: 1, }}>Action, Comedy</Text>
                </React.Fragment>
              }
            </React.Fragment>
          </TouchableHighlight>
          {type === 'personalised' &&
            <PrimaryButton onPress={openBrowser} containerStyle={{ padding: 10 }} titleStyle={{ marginLeft: 15, fontSize: 15 }} icon={<FontAwesome5 name='ticket-alt' color={theme.lightText} size={18} />} title='Book Tickets' />
          }
          {type !== 'personalised' &&
            <PrimaryButton onPress={openBrowser} containerStyle={{ padding: 10 }} titleStyle={{ marginLeft: 15, fontSize: 15 }} icon={<FontAwesome5 name='utensils' color={theme.lightText} size={18} />} title='Book Table' />
          }
        </Card>
      }
    </React.Fragment>
  );
}
