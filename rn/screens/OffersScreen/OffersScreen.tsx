import * as React from 'react';
import { View as DefaultView, FlatList } from 'react-native';

import { useTheme } from '../../config/ThemeManager';
import styles from './OffersScreen.style';
import { Text, View } from '../../components/Themed';

import { Offer, OfferCategory } from '../../models';

import OfferCard from '../../components/OfferCard/OfferCard';
import { ScreenLoadingComponent } from '../../components/ScreenLoadingComponent/ScreenLoadingComponent';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { FadeInPanel } from '../../components/FadeInPanel/FadeInPanel';
import { PageInnerHeading } from '../../components/PageInnerHeading/PageInnerHeading';
import { putOffersIntoCategories } from '../../utils/offers';
import { getOffersByTown } from '../../api/offer';

const reducer = (offerCategories: OfferCategory[], action: React.ReducerAction<React.Reducer<any, any>>) => action.item;

export default function OffersScreen() {
  const { theme } = useTheme();
  const [offerCategories, dispatchOfferCategories] = React.useReducer(reducer, [{ name: 'Loading...' }, { name: 'Loading...' }, { name: 'Loading' }] as OfferCategory[]);
  const [visibleOfferCategoryName, setVisibleOfferCategoryName] = React.useState('');
  const [loaded, setLoaded] = React.useState(false);
  const offerCategoryButtonConfig: { [key: string]: string } = {
    'Restaurant Deals': 'utensils',
    'Takeaway Deals': 'box',
    'Drinks Deals': 'cocktail'
  };

  React.useEffect(() => {
    getOffersByTown().then((offers: Offer[]) => {
      const categories: OfferCategory[] = putOffersIntoCategories(offers);

      dispatchOfferCategories({ type: 'add', item: categories });
      setVisibleOfferCategoryName(categories[0].name);
      setLoaded(true);
    });
  }, []);

  return (
    <View style={styles(theme).container}>
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
                  <PageInnerHeading theme={theme} content='Showing upcoming offers in Bedford' />
                  
                  <DefaultView style={styles(theme).actionButtonsRow}>
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
                </React.Fragment>
              }
              style={{ display: (visibleOfferCategoryName === category.name) ? 'flex' : 'none' }}
              data={category.offers}
              keyExtractor={(item) => `${item._id}${item.name}`}
              renderItem={(data) =>
                <OfferCard key={data.index} containerStyle={{ marginRight: 15 }} offer={data.item} />
              } />
          ))}
        </FadeInPanel>
      }
    </View>
  )
}
