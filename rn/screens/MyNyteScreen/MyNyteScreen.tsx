import * as React from 'react';
import { View as DefaultView } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import { useTheme } from '../../config/ThemeManager';
import styles from './MyNyteScreen.style';

import { Offer, OfferCategory } from '../../models';

import OfferCard from '../../components/OfferCard/OfferCard';
import { Text, ScrollView, View } from '../../components/Themed';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const reducer = (offerCategories: OfferCategory[], action: React.ReducerAction<React.Reducer<any, any>>) => {
  switch(action.type) {
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

export default function MyNyteScreen() {
  const [offerCategories, dispatchOfferCategories] = React.useReducer(reducer, [{ name: 'Loading...' }, { name: 'Loading...' }, { name: 'Loading' }] as OfferCategory[]);
  const { theme } = useTheme();

  React.useEffect(() => {
    getOffers().then((offers: Offer[]) => {
      const categories: OfferCategory[] = [];

      offers.forEach((offer: Offer) => {
        const existingCategory = categories.filter(category => category.name === offer.offerSubCategoryName)[0];

        if (existingCategory) {
          existingCategory.offers.push(offer);
        }
        else {
          categories.push({ name: offer.offerSubCategoryName, expanded: false, offers: [offer] });
        }
      });

      dispatchOfferCategories({ type: 'add', item: categories });
    });
  }, []);

  return (
    <ScrollView style={{ flex: 1, padding: 0 }}>
      <View style={{ width: '100%', paddingLeft: 15, paddingTop: 7, paddingBottom: 8, backgroundColor: theme.headerNotificationBg }}>
        <Text>
          Showing upcoming offers in Bedford
        </Text>
      </View>
      <DefaultView style={{ paddingTop: 8, paddingLeft: 15, paddingRight: 15, paddingBottom: 15 }}>
        {
          offerCategories.map((category: OfferCategory, key: number) => (
            <Collapse key={key} onToggle={(expanded: boolean) => {
              dispatchOfferCategories({ type: 'replace', item: { name: category.name, expanded: expanded } });
            }}>
              <CollapseHeader>
                <DefaultView style={styles(theme).categoryHeader}>
                  <Text style={{ justifyContent: 'flex-start' }}>{category.name}</Text>
                  <FontAwesome5 size={15} style={{ marginTop: 4, justifyContent: 'flex-end', color: theme.shadedColor }} name={!!category.expanded ? 'chevron-up' : 'chevron-down'}></FontAwesome5>
                </DefaultView>
              </CollapseHeader>
              <CollapseBody isCollapsed={!category.expanded}>
                {
                  category.offers &&
                  category.offers.map((offer: Offer, key: number) => (
                    <OfferCard key={key} offer={offer} />
                  ))
                }
              </CollapseBody>
            </Collapse>
          ))
        }
      </DefaultView>
    </ScrollView>
  );
}
