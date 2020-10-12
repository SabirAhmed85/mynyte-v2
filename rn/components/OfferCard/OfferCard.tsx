import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-elements';

import { useTheme } from '../../config/ThemeManager';
import { OpaqueView, Text, PrimaryText } from '../../components/Themed';
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
};

export default function OfferCard(props: OfferCardProps) {
  const { selectOffer } = React.useContext(OfferContext);
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

          <OpaqueView style={{ flexDirection: 'row', alignItems: 'center' }}>
            {offerIsExclusive &&
              <PrimaryText style={styles(theme).note}>MyNyte Exclusive</PrimaryText>
            }

            <Image style={{ width: 45, height: 45, borderRadius: 45, borderColor: '#555', borderWidth: 1 }} source={{ uri: `https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/${offer.currentCoverPhotoName}` }} />
          </OpaqueView>

        </OpaqueView>
        <OpaqueView style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <OpaqueView style={styles(theme).offerBody}>
            <Text style={styles(theme).description}>{offer.description}</Text>

            {!!showBusinessName &&
              <Text>At: {offer.businessName}</Text>
            }
          </OpaqueView>
        </OpaqueView>

      </TouchableOpacity>
      <ListingItemBottomBar listing={offer} borderTop={false} />
    </Card>
  );
}

OfferCard.defaultProps = {
  showBusinessName: true
};
