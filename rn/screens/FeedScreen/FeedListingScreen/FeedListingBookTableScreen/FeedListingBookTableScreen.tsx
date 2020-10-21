import * as React from 'react';
import { View as DefaultView } from 'react-native';

import { useTheme } from '../../../../config/ThemeManager';
import { Text, View } from '../../../../components/Themed';
import styles from './FeedListingBookTableScreen.style';

import { Offer, OfferCategory } from '../../../../models';
import { ScreenLoadingComponent } from '../../../../components/ScreenLoadingComponent/ScreenLoadingComponent';
import { FadeInPanel } from '../../../../components/FadeInPanel/FadeInPanel';
import { FlatList } from 'react-native-gesture-handler';
import { ActionButton } from '../../../../components/ActionButton/ActionButton';
import OfferCard from '../../../../components/OfferCard/OfferCard';
import { putOffersIntoCategories } from '../../../../utils/offers';
import { WebViewPage } from '../../../../components/WebView/WebView';

const reducer = (offerCategories: OfferCategory[], action: React.ReducerAction<React.Reducer<any, any>>) => action.item;

function getOffers(businessId: number) {
  return fetch(`https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=getOffers&format=getOffersByTownId&timeScale=present&_businessId=${businessId}&_profileId=2`)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      alert(error);
      console.error(error);
    });
}

export default function FeedListingBookTableScreen(props: { route: any }) {
  const { theme } = useTheme();
  const listingId = props.route.params.id;
  const { listingName, listingType } = props.route.params;
  const [offerCategories, dispatchOfferCategories] = React.useReducer(reducer, [{ name: 'Loading...' }, { name: 'Loading...' }, { name: 'Loading' }] as OfferCategory[]);
  const [visibleOfferCategoryName, setVisibleOfferCategoryName] = React.useState('');
  const [loaded, setLoaded] = React.useState(false);
  const offerCategoryButtonConfig: { [key: string]: string } = {
    'Restaurant Deals': 'utensils',
    'Takeaway Deals': 'box',
    'Drinks Deals': 'cocktail'
  };

  React.useEffect(() => {
    getOffers(listingId).then((offers: Offer[]) => {
      if (!offers) {
        return false;
      }

      const categories: OfferCategory[] = putOffersIntoCategories(offers);

      dispatchOfferCategories({ item: categories });
      setVisibleOfferCategoryName(categories[0].name);
      setLoaded(true);
    });
  }, []);

  return (
    <WebViewPage />
  );
}
