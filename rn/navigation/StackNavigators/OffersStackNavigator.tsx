import * as React from 'react';
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { BackButton } from "../../components/BackButton/BackButton";
import { CardScreenTransition, HeaderStylingOptions } from "../../constants/CommonSettings";
import { OffersParamList } from "../../types";
import OffersScreen from '../../screens/OffersScreen/OffersScreen';
import OfferScreen from '../../screens/OffersScreen/OfferScreen/OfferScreen';

const OffersStack = createStackNavigator<OffersParamList>();

export function OffersNavigator() {
  const headerStyling = HeaderStylingOptions;
  return (
    <OffersStack.Navigator screenOptions={{
      ...headerStyling(),
      gestureEnabled: true,
      ...CardScreenTransition
    } as StackNavigationOptions}>
      <OffersStack.Screen
        name='OffersScreen'
        component={OffersScreen}
        options={(route) => ({
          headerTitle: 'Offers',
          headerLeft: () => '',
        })}
      />
      <OffersStack.Screen
        name='OfferScreen'
        component={OfferScreen}
        options={(route) => ({
          headerTitle: route.route.params.offerName,
          headerLeft: () => (
            <BackButton navigation={route.navigation} screenName='OffersScreen' />
          ),
        })}
      />
    </OffersStack.Navigator>
  );
}