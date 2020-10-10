import * as React from 'react';

import { ScrollView, View } from '../../../components/Themed';
import styles from './OfferScreen.style';

import { Offer } from '../../../models';
import OfferCard from '../../../components/OfferCard/OfferCard';
import { ScreenLoadingComponent } from '../../../components/ScreenLoadingComponent/ScreenLoadingComponent';

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
  const offerId = props.route.params.id;
  console.log(props.route.params.id, offerId);
  const [offer, setOffer] = React.useState({} as Offer);
  const [loaded, setLoaded] = React.useState(false);
  
  // console.log('nav', props);

  React.useEffect(() => {
    getOffer(offerId).then((offer: Offer) => {
      setOffer(offer);
      setLoaded(true);
    });
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      {!loaded ?
        (<ScreenLoadingComponent />) :
        (<OfferCard containerStyle={{ width: '100%', marginLeft: 0 }} offer={offer} />)
      }
    </ScrollView>
  );
}
