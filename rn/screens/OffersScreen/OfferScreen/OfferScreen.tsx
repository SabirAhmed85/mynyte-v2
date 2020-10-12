import * as React from 'react';

import { ScrollView } from '../../../components/Themed';
import styles from './OfferScreen.style';

import { Offer } from '../../../models';
import { OfferContext } from '../../../config/OfferProvider';

import { ScreenLoadingComponent } from '../../../components/ScreenLoadingComponent/ScreenLoadingComponent';
import OfferDetailCard from '../../../components/OfferDetailCard/OfferDetailCard';


function getOffer(id: number) {
  return fetch(`https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=getOffers&format=getOffer&_offerId=${id}&_profileId=2`)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson[0];
    })
    .catch(error => {
      alert(error);
      console.error(error);
    });
}

type OfferScreenProps = {
  route: any;
  navigation: any;
};

export default function OfferScreen(props: OfferScreenProps) {
  const { selectedOffer } = React.useContext(OfferContext);
  const offerId = props.route.params.id;
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
      {!loaded ?
        (<ScreenLoadingComponent />) :
        (<OfferDetailCard offer={offer} />)
      }
    </ScrollView>
  );
}
