import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import { useTheme } from '../config/ThemeManager';
import { PrimaryText, Text } from '../components/Themed';
import { BottomTabParamList } from '../types';
import { FeedNavigator } from './StackNavigators/FeedStackNavigator';
import { OffersNavigator } from './StackNavigators/OffersStackNavigator';
import { MyNyteNavigator } from './StackNavigators/MyNyteStackNavigator';
import { CovidNavigator } from './StackNavigators/CovidStackNavigator';
import { MoreNavigator } from './StackNavigators/MoreStackNavigator';
import TabBar from '../components/TabBar/TabBar';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const icons = {
  'MyNyte': {
    name: 'user',
    iconSet: 'fa5'
  },
  'Offers': {
    name: 'pound-sign',
    iconSet: 'fa5'
  },
  'Feed': {
    name: 'star',
    iconSet: 'fa5'
  },
  'Covid': {
    name: 'briefcase-medical',
    iconSet: 'fa5'
  },
  'More': {
    name: 'ellipsis-h',
    iconSet: 'fa5'
  },
};

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      tabBar={props =>
        <TabBar {...props} icons={icons} />
      }>
      <BottomTab.Screen
        name='MyNyte'
        component={MyNyteNavigator}
      />
      <BottomTab.Screen
        name='Offers'
        component={OffersNavigator}
      />
      <BottomTab.Screen
        name='Feed'
        component={FeedNavigator}
      />
      <BottomTab.Screen
        name='Covid'
        component={CovidNavigator}
      />
      <BottomTab.Screen
        name='More'
        component={MoreNavigator}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack in the StackNavigators directory in this directory, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
