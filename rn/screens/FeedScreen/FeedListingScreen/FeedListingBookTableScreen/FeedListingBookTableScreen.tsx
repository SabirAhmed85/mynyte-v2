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
import { putOffersIntoCategories } from '../../../../helpers/OffersHelpers';

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
    <View style={{ flex: 1, padding: 0 }}>
      {!loaded &&
        <ScreenLoadingComponent />
      }
      {!!loaded &&
        <FadeInPanel duration={150}>
          {offerCategories.map((category: OfferCategory, key: number) => (
            <FlatList key={key}
              contentInset={{ top: 15, right: 15, bottom: 15, left: 15 }}
              ListHeaderComponent={
                <React.Fragment>
                  <View style={{ width: '100%', paddingLeft: 15, paddingTop: 7, paddingBottom: 8, backgroundColor: theme.headerNotificationBg }}>
                    <Text>
                      Showing upcoming offers in Bedford
                      </Text>
                  </View>
                  {offerCategories.length > 1 &&
                    <DefaultView style={{ marginTop: 8, marginLeft: 15, marginRight: 15, flexDirection: 'row', borderBottomColor: theme.listItemBorderColor, borderBottomWidth: 1, marginBottom: 10 }}>
                      {offerCategories.map((category: OfferCategory, key: number) => (
                        <ActionButton key={key}
                          containerStyle={{ borderBottomColor: theme.primaryActiveBackground }}
                          icon={offerCategoryButtonConfig[category.name]}
                          iconSize='large'
                          color={theme.tertiaryText}
                          active={visibleOfferCategoryName === category.name}
                          activeColor={theme.primaryActiveColorHighlight}
                          disabledColor={theme.disabledText}
                          title={category.name.replace(' Deals', '')}
                          withIndicator={true}
                          indicatorColor={theme.primaryActiveColor}
                          onPress={() => {
                            if (visibleOfferCategoryName !== category.name) {
                              setVisibleOfferCategoryName(category.name);
                            };
                          }} />
                      ))}
                    </DefaultView>
                  }
                </React.Fragment>
              }
              style={{ display: (visibleOfferCategoryName === category.name) ? 'flex' : 'none' }}
              data={category.offers}
              keyExtractor={(item) => `${item._id}${item.name}`}
              renderItem={(data) =>
                <OfferCard key={data.index} containerStyle={{ marginRight: 15 }} offer={data.item} clickScreenTab='Feed' clickScreenName='FeedListingOfferScreen' clickParams={{ id: listingId, listingType: listingType, listingName: listingName, offerId: data.item._id, offerName: data.item.name}} />
              } />
          ))}
        </FadeInPanel>
      }
    </View>
  );
}
