import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderStylingOptions } from "../../constants/CommonSettings";
import { MoreParamList } from "../../types";
import MoreScreen from '../../screens/MoreScreen/MoreScreen';

const MoreStack = createStackNavigator<MoreParamList>();

export function MoreNavigator() {
  const headerStyling = HeaderStylingOptions;
  return (
    <MoreStack.Navigator screenOptions={headerStyling()}>
      <MoreStack.Screen
        name='MoreScreen'
        component={MoreScreen}
        options={{ headerTitle: 'More...' }}
      />
    </MoreStack.Navigator>
  );
}