import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';

import { useTheme } from '../../config/ThemeManager';
import { OpaqueView, Text, PrimaryText, SecondaryText, PrimaryHighlightText, Button, TertiaryText } from '../Themed';
import { nativeElemsStyles, styles } from './OfferDetailCard.style';

import { Offer } from '../../models';
import { share } from '../../utils/share'; 
import ListingItemBottomBar from '../ListingItemBottomBar/ListingItemBottomBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, Image, StyleProp, ViewStyle } from 'react-native';
import OfferDetailActionButtonsBar from './OfferDetailActionButtonsBar/OfferDetailActionButtonsBar';
import ListMenuItem from '../ListMenuItem/ListMenuItem';
import { FontAwesome5 } from '@expo/vector-icons';

type OfferDetailCardProps = {
  offer: Offer;
  showBusinessName?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const mainHeaderShareButton = () => (
  <FontAwesome5 name='share' color='#eeeeee' size={20} style={{ alignItems: 'flex-end' }} />
);

export default function OfferDetailCard(props: OfferDetailCardProps) {
  const { theme } = useTheme();
  const nav = useNavigation();
  const { offer, showBusinessName } = props;
  const offerIsExclusive = (Number(offer._id) % 2) === 0;
  const dimensionsWidth = Dimensions.get('window').width - 30;
  const imgHeight = Math.round((dimensionsWidth / 960) * 640);
  const imgWidth = dimensionsWidth;

  const offerClick = () => {
    nav.navigate('Offers', { screen: 'OfferScreen', params: { id: offer._id, offerName: offer.name } });
  };

  const startShare = () => {
    // const url = `https://www.mynyte.co.uk/feed/${listingType}/${id}/${listingName}`;
    const url = 'https://www.facebook.com';
    const title = `Something MyNyte`;
    const message = `MyNyte | A framework for building native apps using ppaskdpask: ${url}`;
    const subject = 'Subject';
    const dialogTitle = `Share this offer`;
    share(url, title, subject, message, dialogTitle).then(result => {
      if (!result || result?.error) {
        const errorMsg = (result) ? result?.error.message : 'There was an error';
        alert(errorMsg);
      }
      else {
        console.log('good', result);
      }
    });
  };

  return (
    <Card containerStyle={[nativeElemsStyles(theme).container, props.containerStyle]}>
      <OpaqueView>
        <Image
          resizeMode='cover'
          source={{ uri: `https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${offer.currentCoverPhotoName}` }}
          style={{ maxWidth: '100%', width: imgWidth, height: imgHeight }} />
        <OpaqueView style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', flexDirection: 'row', flex: 1, }}>
          <OpaqueView style={{ backgroundColor: 'rgba(30, 30, 30, 0.5)', flex: 1, borderRadius: 30, alignSelf: 'flex-end', paddingTop: 10, paddingBottom: 10, margin: 10, paddingLeft: 15, paddingRight: 15 }}>
            <SecondaryText>Offer now on! What are you waiting for?</SecondaryText>
          </OpaqueView>
        </OpaqueView>
      </OpaqueView>

      <OfferDetailActionButtonsBar offer={offer} />

      <OpaqueView style={styles(theme).pageMenuHeaderContainer}>
        <OpaqueView style={{ flexDirection: 'column', alignItems: 'flex-start', maxWidth: '80%' }}>
          <SecondaryText style={{ marginBottom: 5 }}>{offer.name}</SecondaryText>
          <PrimaryHighlightText>At: {offer.businessName}</PrimaryHighlightText>
        </OpaqueView>
        <Button type='clear'
          icon={mainHeaderShareButton()}
          onPress={startShare}
          titleStyle={{ color: '#fff' }}
          buttonStyle={{ borderRadius: 24 }}></Button>
      </OpaqueView>

      <OpaqueView style={styles(theme).offerBody}>
        <TertiaryText style={styles(theme).title}>{offer.description}</TertiaryText>
        {offer.offerFoodStyle &&
          <SecondaryText style={styles(theme).title}>Category: {offer.offerFoodStyle}</SecondaryText>
        }
      </OpaqueView>

      <ListMenuItem item={{ title: `See all ${offer.businessName} offers`, icon: 'pound-sign', clickable: true }} />
      <ListMenuItem item={{ title: `See ${offer.businessName}'s page`, icon: 'address-book', clickable: true }} />
    </Card>
  );
}
