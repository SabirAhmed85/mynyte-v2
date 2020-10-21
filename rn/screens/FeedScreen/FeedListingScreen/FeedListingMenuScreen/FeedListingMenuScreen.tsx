import * as React from 'react';
import { Text as DefaultText, View as DefaultView, ScrollView as DefaultScrollView, Dimensions, SectionList } from 'react-native';

import { useTheme } from '../../../../config/ThemeManager';
import { InnerView, SecondaryText, TertiaryText, Text, View } from '../../../../components/Themed';
import styles from './FeedListingMenuScreen.style';

import { OfferCategory } from '../../../../models';
import { ScreenLoadingComponent } from '../../../../components/ScreenLoadingComponent/ScreenLoadingComponent';
import { FadeInPanel } from '../../../../components/FadeInPanel/FadeInPanel';
import { FlatList } from 'react-native-gesture-handler';
import { ActionButton } from '../../../../components/ActionButton/ActionButton';
import { getMenuItems } from '../../../../api/product-menu';
import { ProductMenuItem, ProductMenuItemCategory } from 'models/ProductMenuItem';
import { putMenuItemsIntoCategories } from '../../../../utils/menu-item';
import ListProductMenuItem from '../../../../components/ListProductMenuItem/ListProductMenuItem';

const reducer = (menuItemCategories: ProductMenuItemCategory[], action: React.ReducerAction<React.Reducer<any, any>>) => action.item;

export default function FeedListingMenuScreen(props: { route: any }) {
  const { theme } = useTheme();
  const listingId = props.route.params.id;
  const [menuItemCategories, dispatchMenuItemCategories] = React.useReducer(reducer, [{ name: 'Loading...' }, { name: 'Loading...' }, { name: 'Loading' }] as OfferCategory[]);
  const [visibleMenuItemCategoryName, setVisibleMenuItemCategoryName] = React.useState('');
  const [loaded, setLoaded] = React.useState(false);
  let mountedRef = React.useRef(true);

  React.useEffect(() => {
    const menuTypeId = (props.route.params.menuType === 'takeaway') ? 1 : 2;
    getMenuItems(listingId, menuTypeId).then((menuItems: ProductMenuItem[]) => {
      if (!mountedRef.current) return null;
      if (!menuItems) return false;

      const categories: ProductMenuItemCategory[] = putMenuItemsIntoCategories(menuItems);

      dispatchMenuItemCategories({ item: categories });
      setVisibleMenuItemCategoryName(categories[0].title);
      setLoaded(true);
    });

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <View style={{ flex: 1, padding: 0 }}>
      {!loaded &&
        <ScreenLoadingComponent />
      }
      {!!loaded &&
        <FadeInPanel duration={150}>
          <InnerView style={{ flexDirection: 'column', paddingBottom: 105, overflow: 'visible' }}>
            {menuItemCategories.length > 1 &&
              <DefaultScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 15, marginRight: 15, minHeight: 50, flexDirection: 'row', alignSelf: 'flex-start', borderBottomColor: theme.listItemBorderColor, borderBottomWidth: 1 }}>
                {menuItemCategories.map((category: ProductMenuItemCategory, key: number) => (
                  <ActionButton key={key}
                    fullFlex={false}
                    minHeight={45}
                    paddingY={0}
                    containerStyle={{ flexDirection: 'row', borderBottomColor: theme.primaryActiveBackground, paddingLeft: 0, paddingTop: 0, }}
                    buttonStyle={{ paddingLeft: 0, paddingRight: 20, paddingTop: 10, paddingBottom: 10, marginTop: 0 }}
                    titleStyle={{ alignSelf: 'flex-start', marginLeft: 0, marginTop: 0 }}
                    color={theme.tertiaryText}
                    active={visibleMenuItemCategoryName === category.title}
                    activeColor={theme.primaryActiveColorHighlight}
                    disabledColor={theme.disabledText}
                    title={category.title.replace(' Deals', '')}
                    withIndicator={true}
                    indicatorColor={theme.primaryActiveColor}
                    onPress={() => {
                      if (visibleMenuItemCategoryName !== category.title) {
                        setVisibleMenuItemCategoryName(category.title);
                      };
                    }} />
                ))}
              </DefaultScrollView>
            }

            <DefaultView>
              <SectionList
                sections={menuItemCategories}
                renderSectionHeader={({ section: { title } }) => 
                  <SecondaryText style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 20, paddingBottom: 25, fontSize: 16, backgroundColor: 'rgba(70, 70, 70, 0.2)' }}>{title}</SecondaryText>
                }
                style={{ paddingTop: 5 }}
                keyExtractor={(item) => `${item._id}${item.Name}`}
                renderItem={({ item }) =>
                  <ListProductMenuItem showMenu={true} item={{ Name: item.Name, Description: item.Description, Price: item.Price }} />
                } />
            </DefaultView>
          </InnerView>
        </FadeInPanel>
      }
    </View>
  );
}
