import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderStylingOptions } from "../../constants/CommonSettings";
import { CovidParamList } from "../../types";
import CovidScreen from '../../screens/CovidScreen/CovidScreen';

const CovidStack = createStackNavigator<CovidParamList>();

export function CovidNavigator() {
  const headerStyling = HeaderStylingOptions;
  return (
    <CovidStack.Navigator screenOptions={headerStyling()}>
      <CovidStack.Screen
        name='CovidScreen'
        component={CovidScreen}
        options={{ headerTitle: 'Covid Help' }}
      />
    </CovidStack.Navigator>
  );
}