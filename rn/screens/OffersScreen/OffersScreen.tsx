import * as React from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import { useTheme } from '../../config/ThemeManager';
import styles from './OffersScreen.style';

import { Offer, OfferCategory } from '../../models';

import OfferCard from '../../components/OfferCard/OfferCard';
import { Text, OpaqueView, ScrollView, View, Button } from '../../components/Themed';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import { ScreenLoadingComponent } from '../../components/ScreenLoadingComponent/ScreenLoadingComponent';
import { ActionButton } from '../../components/ActionButton/ActionButton';

const reducer = (offerCategories: OfferCategory[], action: React.ReducerAction<React.Reducer<any, any>>) => {
  switch (action.type) {
    case 'replace':
      const categories = offerCategories.map(category => {
        return category.name === action.item.name ? { ...category, expanded: action.item.expanded } : category
      });
      return [...categories];
    default:
      return action.item
  }
};

function getOffers() {
  return fetch('https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=getOffers&format=getOffersByTownId&timeScale=present&_townId=1&_profileId=2')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      alert(error);
      console.error(error);
    });
}

export default function OffersScreen() {
  const { theme } = useTheme();
  const [offerCategories, dispatchOfferCategories] = React.useReducer(reducer, [{ name: 'Loading...' }, { name: 'Loading...' }, { name: 'Loading' }] as OfferCategory[]);
  const [visibleOfferCategory, setVisibleOfferCategory] = React.useState('');
  const [loaded, setLoaded] = React.useState(false);
  const offerCategoryButtonConfig: { [key: string]: string } = {
    'Restaurant Deals': 'utensils',
    'Takeaway Deals': 'box',
    'Drinks Deals': 'cocktail'
  };

  React.useEffect(() => {
    getOffers().then((offers: Offer[]) => {
      const categories: OfferCategory[] = [];

      offers.forEach((offer: Offer) => {
        const existingCategory = categories.filter(category => category.name === offer.offerSubCategoryName)[0];

        if (existingCategory) {
          existingCategory.offers.push(offer);
        }
        else {
          categories.push({ name: offer.offerSubCategoryName, offers: [offer] });
        }
      });

      dispatchOfferCategories({ type: 'add', item: categories });
      setVisibleOfferCategory(categories[0].name);
      setLoaded(true);
    });
  }, []);

  return (
    <ScrollView style={{ flex: 1, padding: 0 }}>
      {!loaded ?
        (<ScreenLoadingComponent />) :
        (
          <React.Fragment>
            <View style={{ width: '100%', paddingLeft: 15, paddingTop: 7, paddingBottom: 8, backgroundColor: theme.headerNotificationBg }}>
              <Text>
                Showing upcoming offers in Bedford
              </Text>
            </View>
            <OpaqueView style={{ paddingTop: 8, paddingLeft: 15, paddingRight: 15, paddingBottom: 15 }}>
              <OpaqueView style={{ flexDirection: 'row', borderBottomColor: theme.listItemBorderColor, borderBottomWidth: 1, marginBottom: 10 }}>
                {offerCategories.map((category: OfferCategory, key: number) => (
                  <ActionButton key={key}
                    containerStyle={{ borderBottomColor: theme.primaryActiveBackground, borderBottomWidth: visibleOfferCategory === category.name ? 2 : 0 }}
                    icon={offerCategoryButtonConfig[category.name]}
                    iconSize='large'
                    color={theme.tertiaryText}
                    active={visibleOfferCategory === category.name}
                    activeColor={theme.primaryActiveColorHighlight}
                    disabledColor={theme.disabledText}
                    title={category.name.replace(' Deals', '')}
                    onPress={() => {
                      if (visibleOfferCategory !== category.name) {
                        setVisibleOfferCategory(category.name);
                      }
                    }} />
                ))}
              </OpaqueView>
              <React.Fragment>
                {offerCategories.map((category: OfferCategory, categoryKey: number) => (
                  <OpaqueView key={categoryKey} style={{ display: (visibleOfferCategory === category.name) ? 'flex' : 'none' }}>
                    {category.offers.map((offer: Offer, key: number) => (
                      <OfferCard key={key} offer={offer} />
                    ))}
                  </OpaqueView>
                ))}
              </React.Fragment>
            </OpaqueView>
          </React.Fragment>
        )}
    </ScrollView>
  );
}
