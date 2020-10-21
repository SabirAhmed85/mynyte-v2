import * as React from 'react';

import { ScrollView } from '../../../components/Themed';
import styles from './OfferScreen.style';

import { Offer } from '../../../models';
import { OfferContext } from '../../../config/OfferProvider';

import OfferDetailCard from '../../../components/OfferDetailCard/OfferDetailCard';
import { getOffer } from '../../../api/offer';

type OfferScreenProps = {
  route: any;
  navigation: any;
};

export default function OfferScreen(props: OfferScreenProps) {
  const { selectedOffer } = React.useContext(OfferContext);
  const { offerId } = props.route.params;
  const [offer, setOffer] = React.useState({} as Offer);
  const [loaded, setLoaded] = React.useState(false);
  
  const setOfferComplete = (offer: Offer) => {
    setOffer(offer);
    setLoaded(true);
  }

  React.useEffect(() => {
    getOffer(offerId).then((offer: Offer) => {
      setOfferComplete(offer);
    });
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      <OfferDetailCard offer={offer} loaded={loaded} />
    </ScrollView>
  );
}
