import * as React from 'react';
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { BackButton } from "../../components/BackButton/BackButton";
import { useTheme } from "../../config/ThemeManager";
import { CardScreenTransition, HeaderStylingOptions } from "../../constants/CommonSettings";
import { FeedParamList } from "../../types";
import { HeaderLeftButton, HeaderRightButton, HeaderTitle } from "../../screens/FeedScreen/components/HeaderElements/HeaderElements";
import FeedListingOffersScreen from "../../screens/FeedScreen/FeedListingScreen/FeedListingOffersScreen/FeedListingOffersScreen";
import FeedListingOfferScreen from "../../screens/FeedScreen/FeedListingScreen/FeedListingOffersScreen/FeedListingOfferScreen/FeedListingOfferScreen";
import FeedListingScreen from "../../screens/FeedScreen/FeedListingScreen/FeedListingScreen";
import FeedScreenContainer from "../../screens/FeedScreen/FeedScreen.container";
import FeedListingBookEventScreen from '../../screens/FeedScreen/FeedListingScreen/FeedListingBookEventScreen/FeedListingBookEventScreen';
import FeedListingMenuScreen from '../../screens/FeedScreen/FeedListingScreen/FeedListingMenuScreen/FeedListingMenuScreen';
import FeedListingBookTableScreen from '../../screens/FeedScreen/FeedListingScreen/FeedListingBookTableScreen/FeedListingBookTableScreen';

const FeedStack = createStackNavigator<FeedParamList>();

export function FeedNavigator() {
  const headerStyling = HeaderStylingOptions;
  const { theme } = useTheme();

  return (
    <FeedStack.Navigator screenOptions={{
      ...headerStyling(),
      gestureEnabled: true,
      ...CardScreenTransition
    } as StackNavigationOptions}>
      <FeedStack.Screen
        name='FeedScreen'
        component={FeedScreenContainer}
        options={(route) => ({
          headerTitle: () => (
            <HeaderTitle route={route.route} navigation={route.navigation} theme={theme} />
          ),
          headerTitleStyle: { width: '100%' },
          headerLeft: () => (<HeaderLeftButton route={route.route} navigation={route.navigation} />),
          headerRight: () => (<HeaderRightButton route={route.route} navigation={route.navigation} />)
        })}
      />
      <FeedStack.Screen
        name='FeedListingScreen'
        component={FeedListingScreen}
        options={(route) => ({
          headerTitle: route.route.params.listingName?.replace(/~and~/g, ' & ').replace(/-/g, ' '),
          headerLeft: () => (
            <BackButton navigation={route.navigation} screenName='FeedScreen' />
          ),
        })}
      />
      <FeedStack.Screen
        name='FeedListingOffersScreen'
        component={FeedListingOffersScreen}
        options={(route) => ({
          headerTitle: `Offers at ${route.route.params.listingName.replace(/~and~/g, ' & ').replace(/-/g, ' ')}`,
          headerLeft: () => (
            <BackButton navigation={route.navigation} screenName='FeedListingScreen' params={route.route.params} />
          ),
        })}
      />
      <FeedStack.Screen
        name='FeedListingOfferScreen'
        component={FeedListingOfferScreen}
        options={(route) => ({
          headerTitle: route.route.params.offerName.replace(/~and~/g, ' & ').replace(/-/g, ' '),
          headerLeft: () => (
            <BackButton navigation={route.navigation} screenName='FeedListingScreen' params={route.route.params} />
          ),
        })}
      />
      <FeedStack.Screen
        name='FeedListingBookTableScreen'
        component={FeedListingBookTableScreen}
        options={(route) => ({
          headerTitle: `Book a table at ${route.route.params.listingName.replace(/~and~/g, ' & ').replace(/-/g, ' ')}`,
          headerLeft: () => (
            <BackButton navigation={route.navigation} screenName='FeedListingScreen' params={route.route.params} />
          ),
        })}
      />
      <FeedStack.Screen
        name='FeedListingBookEventScreen'
        component={FeedListingBookEventScreen}
        options={(route) => ({
          headerTitle: route.route.params.listingName.replace(/~and~/g, ' & ').replace(/-/g, ' '),
          headerLeft: () => (
            <BackButton navigation={route.navigation} screenName='FeedListingScreen' params={route.route.params} />
          ),
        })}
      />
      <FeedStack.Screen
        name='FeedListingMenuScreen'
        component={FeedListingMenuScreen}
        options={(route) => ({
          headerTitle: `Menu for ${route.route.params.listingName.replace(/~and~/g, ' & ').replace(/-/g, ' ')}`,
          headerLeft: () => (
            <BackButton navigation={route.navigation} screenName='FeedListingScreen' params={route.route.params} />
          ),
        })}
      />
    </FeedStack.Navigator>
  );
}