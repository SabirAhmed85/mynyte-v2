import * as React from 'react';
import { View as DefaultView } from 'react-native';

import { useTheme } from '../../../../config/ThemeManager';
import { Text, View } from '../../../../components/Themed';
import styles from './FeedListingOffersScreen.style';

import { Offer, OfferCategory } from '../../../../models';
import { ScreenLoadingComponent } from '../../../../components/ScreenLoadingComponent/ScreenLoadingComponent';
import { FadeInPanel } from '../../../../components/FadeInPanel/FadeInPanel';
import { FlatList } from 'react-native-gesture-handler';
import { ActionButton } from '../../../../components/ActionButton/ActionButton';
import OfferCard from '../../../../components/OfferCard/OfferCard';
import { putOffersIntoCategories } from '../../../../utils/offers';
import { getOffersByBusiness } from '../../../../api/offer';

const reducer = (offerCategories: OfferCategory[], action: React.ReducerAction<React.Reducer<any, any>>) => action.item;

export default function FeedListingOffersScreen(props: { route: any }) {
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
    getOffersByBusiness(listingId).then((offers: Offer[]) => {
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
                <OfferCard key={data.index} showBusinessName={false} containerStyle={{ marginRight: 15 }} offer={data.item} clickScreenTab='Feed' clickScreenName='FeedListingOfferScreen' clickParams={{ id: listingId, listingType: listingType, listingName: listingName, offerId: data.item._id, offerName: data.item.name}} />
              } />
          ))}
        </FadeInPanel>
      }
    </View>
  );
}
