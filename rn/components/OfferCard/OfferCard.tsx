import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';

import { useTheme } from '../../config/ThemeManager';
import { OpaqueView, Text, PrimaryText } from '../../components/Themed';
import { nativeElemsStyles, styles } from './OfferCard.style';

import { Offer } from '../../models';
import ListingItemBottomBar from '../ListingItemBottomBar/ListingItemBottomBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleProp, ViewStyle } from 'react-native';

type OfferCardProps = {
  offer: Offer;
  showBusinessName?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export default function OfferCard(props: OfferCardProps) {
  const { theme } = useTheme();
  const nav = useNavigation();
  const { offer, showBusinessName } = props;
  const offerIsExclusive = (Number(offer._id) % 2) === 0;

  const offerClick = () => {
    nav.navigate('Offers', { screen: 'OfferScreen', params: { id: offer._id, offerName: offer.name } });
  };

  return (
    <Card containerStyle={[nativeElemsStyles(theme).container, props.containerStyle]}>
      <TouchableOpacity activeOpacity={0.5} onPress={offerClick}>
        <OpaqueView style={styles(theme).titleContainer}>
          
          {offer.offerFoodStyle &&
            <Card.Title style={styles(theme).title}>{offer.offerFoodStyle}</Card.Title>
          }

          {offerIsExclusive &&
            <PrimaryText style={styles(theme).note}>MyNyte Exclusive</PrimaryText>
          }

        </OpaqueView>
        <OpaqueView style={styles(theme).offerBody}>
          <Text style={styles(theme).description}>{offer.description}</Text>

          {!!showBusinessName &&
            <Text>At: {offer.businessName}</Text>
          }
        </OpaqueView>

      </TouchableOpacity>
      <ListingItemBottomBar listing={offer} borderTop={false} />
    </Card>
  );
}

OfferCard.defaultProps = {
  showBusinessName: true
};
