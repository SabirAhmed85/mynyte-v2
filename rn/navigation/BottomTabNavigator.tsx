import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import { useTheme } from '../config/ThemeManager';
import { BottomTabParamList } from '../types';
import { FeedNavigator } from './StackNavigators/FeedStackNavigator';
import { OffersNavigator } from './StackNavigators/OffersStackNavigator';
import { MyNyteNavigator } from './StackNavigators/MyNyteStackNavigator';
import { CovidNavigator } from './StackNavigators/CovidStackNavigator';
import { MoreNavigator } from './StackNavigators/MoreStackNavigator';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const { theme } = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: theme.tint,
        style: {
          backgroundColor: theme.tabBarBackground,
          borderTopColor: theme.tabBarBorderColor,
        }
      }}>
      <BottomTab.Screen
        name='MyNyte'
        component={MyNyteNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='star' color={color} icon='fa5' />,
        }}
      />
      <BottomTab.Screen
        name='Offers'
        component={OffersNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='pound-sign' color={color} icon='fa5' />,
        }}
      />
      <BottomTab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='ios-paper' color={color} icon='ion' />,
        }}
      />
      <BottomTab.Screen
        name='Covid'
        component={CovidNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='briefcase-medical' color={color} icon='fa5' />,
        }}
      />
      <BottomTab.Screen
        name='More'
        component={MoreNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='ellipsis-h' color={color} icon='fa5' />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string; icon: string; }) {
  return (props.icon === 'fa5') ?
    <FontAwesome5 size={22} {...props} /> :
    <Ionicons size={22} {...props} />;
}

// Each tab has its own navigation stack in the StackNavigators directory in this directory, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
