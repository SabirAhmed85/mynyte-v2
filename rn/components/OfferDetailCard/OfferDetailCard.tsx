import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';

import { useTheme } from '../../config/ThemeManager';
import { SecondaryText, PrimaryHighlightText, Button, TertiaryText } from '../Themed';
import { nativeElemsStyles, styles } from './OfferDetailCard.style';

import { Offer } from '../../models';
import { share } from '../../utils/share';
import { Dimensions, Image, StyleProp, ViewStyle } from 'react-native';
import OfferDetailActionButtonsBar from './OfferDetailActionButtonsBar/OfferDetailActionButtonsBar';
import ListMenuItem from '../ListMenuItem/ListMenuItem';
import { FontAwesome5 } from '@expo/vector-icons';
import OfferDetailActionButtonsBarDummy from './OfferDetailActionButtonsBar/OfferDetailActionButtonsBarDummy';
import { FadeInPanel } from '../../components/FadeInPanel/FadeInPanel';

type OfferDetailCardProps = {
  offer: Offer;
  loaded: boolean;
  showBusinessName?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const MainHeaderShareButton = () => (
  <FontAwesome5 name='share' color='#eeeeee' size={20} style={{ alignItems: 'flex-end' }} />
);

const MainListingImage = (props: { imageName: string, imgWidth: number, imgHeight: number }) => (
  <Image
    resizeMode='cover'
    source={{ uri: props.imageName }}
    style={{ maxWidth: '100%', width: props.imgWidth, height: props.imgHeight }} />
);

export default function OfferDetailCard(props: OfferDetailCardProps) {
  const { theme } = useTheme();
  const nav = useNavigation();
  const { offer, showBusinessName, loaded } = props;
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
        // console.log('good', result);
      }
    });
  };

  return (
    <Card containerStyle={[nativeElemsStyles(theme).container, props.containerStyle]}>
      <DefaultView style={{ height: imgHeight, width: imgWidth, minHeight: imgHeight }}>
        {!loaded &&
          <MainListingImage
            imageName={`https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/default.jpg`}
            imgWidth={imgWidth}
            imgHeight={imgHeight} />
        }
        {!!loaded &&
          <FadeInPanel duration={300}>
            <MainListingImage
              imageName={`https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${offer.currentCoverPhotoName}`}
              imgWidth={imgWidth}
              imgHeight={imgHeight} />
            <DefaultView style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', flexDirection: 'row', flex: 1, }}>
              <DefaultView style={{ backgroundColor: 'rgba(30, 30, 30, 0.5)', flex: 1, borderRadius: 30, alignSelf: 'flex-end', paddingTop: 10, paddingBottom: 10, margin: 10, paddingLeft: 15, paddingRight: 15 }}>
                <SecondaryText>Offer now on! What are you waiting for?</SecondaryText>
              </DefaultView>
            </DefaultView>
          </FadeInPanel>
        }

      </DefaultView>

      {!loaded &&
        <OfferDetailActionButtonsBarDummy />
      }
      {!!loaded &&
        <DefaultView>
          <OfferDetailActionButtonsBar offer={offer} />

          <DefaultView style={styles(theme).pageMenuHeaderContainer}>
            <DefaultView style={{ flexDirection: 'column', alignItems: 'flex-start', maxWidth: '80%' }}>
              <SecondaryText style={{ marginBottom: 5 }}>{offer.name}</SecondaryText>
              <PrimaryHighlightText>At: {offer.businessName}</PrimaryHighlightText>
            </DefaultView>
            <Button type='clear'
              icon={MainHeaderShareButton()}
              onPress={startShare}
              titleStyle={{ color: '#fff' }}
              buttonStyle={{ borderRadius: 24 }}></Button>
          </DefaultView>

          <DefaultView style={styles(theme).offerBody}>
            <TertiaryText style={styles(theme).title}>{offer.description}</TertiaryText>
            {offer.offerFoodStyle &&
              <SecondaryText style={styles(theme).title}>Category: {offer.offerFoodStyle}</SecondaryText>
            }
          </DefaultView>

          <ListMenuItem item={{ title: `See all ${offer.businessName} offers`, icon: 'pound-sign', clickable: true }} />
          <ListMenuItem item={{ title: `See ${offer.businessName}'s page`, icon: 'address-book', clickable: true }} />
        </DefaultView>
      }
    </Card>
  );
}
