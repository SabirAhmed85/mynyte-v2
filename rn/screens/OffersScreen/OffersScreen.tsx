import * as React from 'react';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

import { useTheme } from '../../config/ThemeManager';
import styles from './OffersScreen.style';
import { Text, OpaqueView, ScrollView, View, SafeAreaView } from '../../components/Themed';

import { Offer, OfferCategory } from '../../models';

import OfferCard from '../../components/OfferCard/OfferCard';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppLoading } from 'expo';
import { ScreenLoadingComponent } from '../../components/ScreenLoadingComponent/ScreenLoadingComponent';
import { ActionButton } from '../../components/ActionButton/ActionButton';
import { FlatList } from 'react-native';
import { FadeInPanel } from '../../components/FadeInPanel/FadeInPanel';

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
                  <OpaqueView style={{ marginTop: 8, marginLeft: 15, marginRight: 15, flexDirection: 'row', borderBottomColor: theme.listItemBorderColor, borderBottomWidth: 1, marginBottom: 10 }}>
                    {offerCategories.map((category: OfferCategory, key: number) => (
                      <ActionButton key={key}
                        containerStyle={{ borderBottomColor: theme.primaryActiveBackground }}
                        icon={offerCategoryButtonConfig[category.name]}
                        iconSize='large'
                        color={theme.tertiaryText}
                        active={visibleOfferCategory === category.name}
                        activeColor={theme.primaryActiveColorHighlight}
                        disabledColor={theme.disabledText}
                        title={category.name.replace(' Deals', '')}
                        withIndicator={true}
                        onPress={() => {
                          if (visibleOfferCategory !== category.name) {
                            setVisibleOfferCategory(category.name);
                          }
                        }} />
                    ))}
                  </OpaqueView>
                </React.Fragment>
              }
              style={{ display: (visibleOfferCategory === category.name) ? 'flex' : 'none' }}
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
