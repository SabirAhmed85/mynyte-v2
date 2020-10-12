import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { BackButton } from "../../components/BackButton/BackButton";
import { useTheme } from "../../config/ThemeManager";
import { HeaderStylingOptions } from "../../constants/CommonSettings";
import { FeedParamList } from "../../types";
import { HeaderLeftButton, HeaderRightButton, HeaderTitle } from "../../screens/FeedScreen/components/HeaderElements/HeaderElements";
import FeedListingOffersScreen from "../../screens/FeedScreen/FeedListingScreen/FeedListingOffersScreen/FeedListingOffersScreen";
import FeedListingScreen from "../../screens/FeedScreen/FeedListingScreen/FeedListingScreen";
import FeedScreenContainer from "../../screens/FeedScreen/FeedScreen.container";

const FeedStack = createStackNavigator<FeedParamList>();

export function FeedNavigator() {
  const headerStyling = HeaderStylingOptions;
  const { theme } = useTheme();

  return (
    <FeedStack.Navigator screenOptions={headerStyling()}>
      <FeedStack.Screen
        name='FeedScreen'
        component={FeedScreenContainer}
        options={(route) => ({
          headerTitle: () => (
            <HeaderTitle route={route.route} navigation={route.navigation} theme={theme} />
          ),
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
          headerTitle: route.route.params.listingName.replace(/~and~/g, ' & ').replace(/-/g, ' '),
          headerLeft: () => (
            <BackButton navigation={route.navigation} screenName='FeedListingScreen' params={route.route.params} />
          ),
        })}
      />
    </FeedStack.Navigator>
  );
}