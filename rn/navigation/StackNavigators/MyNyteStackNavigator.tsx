import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderStylingOptions } from "../../constants/CommonSettings";
import { MyNyteParamList } from "../../types";
import MyNyteScreen from '../../screens/MyNyteScreen/MyNyteScreen';

const MyNyteStack = createStackNavigator<MyNyteParamList>();

export function MyNyteNavigator() {
  const headerStyling = HeaderStylingOptions;
  return (
    <MyNyteStack.Navigator screenOptions={headerStyling()}>
      <MyNyteStack.Screen
        name='MyNyteScreen'
        component={MyNyteScreen}
        options={{ headerTitle: 'MyNyte' }}
      />
    </MyNyteStack.Navigator>
  );
}