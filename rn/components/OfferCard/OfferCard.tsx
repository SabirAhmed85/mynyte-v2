import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';

import { useTheme } from '../../config/ThemeManager';
import { PrimaryActiveText, PrimaryText, PrimaryBoldText } from '../../components/Themed';
import { nativeElemsStyles, styles } from './OfferCard.style';

import { Offer } from '../../models';
import ListingItemBottomBar from '../ListingItemBottomBar/ListingItemBottomBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, StyleProp, ViewStyle } from 'react-native';
import { OfferContext } from '../../config/OfferProvider';

type OfferCardProps = {
  offer: Offer;
  showBusinessName?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  clickScreenTab: string;
  clickScreenName: string;
  clickParams?: any
};

export default function OfferCard(props: OfferCardProps) {
  const { selectOffer } = React.useContext(OfferContext);
  const { theme } = useTheme();
  const nav = useNavigation();
  const { offer, showBusinessName, clickScreenTab, clickScreenName, clickParams } = props;
  const offerIsExclusive = (Number(offer._id) % 2) === 0;

  const offerClick = () => {
    nav.navigate(clickScreenTab, {
      screen: clickScreenName,
      params: clickParams ? clickParams : { offerId: offer._id, offerName: offer.name }
    });
  };

  return (
    <Card containerStyle={[nativeElemsStyles(theme).container, props.containerStyle]}>
      <TouchableOpacity activeOpacity={0.5} onPress={offerClick}>
        <DefaultView style={styles(theme, offerIsExclusive).titleContainer}>
          <Card.Title style={styles(theme).title}>
            {offer.offerFoodStyle &&
              <PrimaryText bold>{offer.offerFoodStyle}</PrimaryText>
            }
          </Card.Title>

          <DefaultView style={styles(theme).titleRight}>
            <Image style={styles(theme).titleImage} source={{ uri: `https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${offer.currentCoverPhotoName}` }} />
          </DefaultView>

        </DefaultView>

        <DefaultView style={styles(theme).offerBody}>
          {(!!showBusinessName || !!offerIsExclusive) &&
            <DefaultView style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginBottom: 20, }}>
              {!!showBusinessName &&
                <PrimaryText style={{ fontSize: 12, alignSelf: 'flex-start', flex: 1 }}>{offer.businessName}</PrimaryText>
              }
              {!!offerIsExclusive &&
                <PrimaryActiveText bold style={styles(theme).note}>MyNyte Exclusive</PrimaryActiveText>
              }
            </DefaultView>
          }
          <PrimaryText style={styles(theme).description}>{offer.description}</PrimaryText>
        </DefaultView>

      </TouchableOpacity>
      <ListingItemBottomBar listing={offer} />
    </Card>
  );
}

OfferCard.defaultProps = {
  showBusinessName: true,
  clickScreenTab: 'Offers',
  clickScreenName: 'OfferScreen'
};
