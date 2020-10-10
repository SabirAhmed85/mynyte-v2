import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import { useTheme } from '../config/ThemeManager';
import { HeaderStylingOptions } from '../constants/CommonSettings';
import FeedScreenContainer from '../screens/FeedScreen/FeedScreen.container';
import OffersScreen from '../screens/OffersScreen/OffersScreen';
import { BottomTabParamList, OffersParamList, FeedParamList, MoreParamList, CovidParamList, MyNyteParamList } from '../types';
import OfferScreen from '../screens/OffersScreen/OfferScreen/OfferScreen';
import { OpaqueView } from '../components/Themed';
import FeedListingScreen from '../screens/FeedScreen/FeedListingScreen/FeedListingScreen';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CovidScreen from '../screens/CovidScreen/CovidScreen';
import MoreScreen from '../screens/More';
import MyNyteScreen from '../screens/MyNyteScreen/MyNyteScreen';
import FeedListingOffersScreen from '../screens/FeedScreen/FeedListingScreen/FeedListingOffersScreen/FeedListingOffersScreen';
import { RouteProp, useNavigation } from '@react-navigation/native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const { theme } = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: theme.tint,
        style: {
          backgroundColor: '#2f2f2f',
          borderTopColor: '#565555',
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

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const MyNyteStack = createStackNavigator<MyNyteParamList>();

function MyNyteNavigator() {
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

const OffersStack = createStackNavigator<OffersParamList>();

function OffersNavigator() {
  const headerStyling = HeaderStylingOptions;
  return (
    <OffersStack.Navigator screenOptions={headerStyling()}>
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
            <FontAwesome5
              name='times'
              size={24}
              style={{ marginLeft: 15 }}
              onPress={() => route.navigation.navigate('Offers', { screen: 'OffersScreen', params: {} })}
              color='#fff'
            />
          ),
        })}
      />
    </OffersStack.Navigator>
  );
}

const FeedStack = createStackNavigator<FeedParamList>();

const HeaderTitle = (
  props: {
    route: RouteProp<FeedParamList, "FeedScreen">,
    navigation: any,
    theme: any
  }
) => {
  const [hideSearchInput, setHideSearchInput] = React.useState(false);

  React.useEffect(() => {
    if (props.route.params !== undefined && (
      (props.route.params as any)['show-guide'] !== undefined ||
      (props.route.params as any)['whats-open'] !== undefined
    )) {
      setHideSearchInput(true);
    }
    else {
      setHideSearchInput(false);
    }
  }, [props]);

  return !!hideSearchInput ?
    null :
    (
      <OpaqueView style={{ width: '100%' }}>
        <TextInput
          onFocus={() => {
            props.navigation.setParams({ search: '' })
          }}
          placeholder='Search...'
          placeholderTextColor={props.theme.primaryActiveColorHighlight} // was '#fdbebe'
          style={{
            width: '100%',
            borderBottomColor: props.theme.primaryActiveColorHighlight, // was '#f98493'
            borderBottomWidth: 1,
            height: 30,
            color: props.theme.secondaryText,
          }}
        />
      </OpaqueView>
    )
};

const HeaderLeftButton = (
  props: {
    route: RouteProp<FeedParamList, "FeedScreen">,
    navigation: any
  }
) => {
  const [hideButton, setHideButton] = React.useState(false);

  React.useEffect(() => {
    if (props.route.params !== undefined && (
      (props.route.params as any).search !== undefined ||
      (props.route.params as any)['whats-open'] !== undefined
    )) {
      setHideButton(true);
    }
    else {
      setHideButton(false);
    }
  }, [props]);

  return !!hideButton ?
    null :
    (
      <FontAwesome5
        name='smile-beam'
        size={24}
        style={{ marginLeft: 15 }}
        onPress={() => props.navigation.setParams({ 'show-guide': '' })}
        color='#fff'
      />
    )
}

const HeaderRightButton = (
  props: {
    route: RouteProp<FeedParamList, "FeedScreen">,
    navigation: any
  }
) => {
  const [name, setName] = React.useState(props.route.params ? 'times' : 'clock');

  React.useEffect(() => {
    if (props.route.params !== undefined && (
      (props.route.params as any).search !== undefined ||
      (props.route.params as any)['whats-open'] !== undefined ||
      (props.route.params as any)['show-guide'] !== undefined
    )) {
      setName('times');
    }
    else {
      setName('clock');
    }
  }, [props]);

  return (
    <FontAwesome5
      name={name}
      size={24}
      style={{ marginRight: 15 }}
      onPress={() => {
        if (props.route.params !== undefined && (
          (props.route.params as any).search !== undefined ||
          (props.route.params as any)['whats-open'] !== undefined ||
          (props.route.params as any)['show-guide'] !== undefined
        )) {
          props.navigation.setParams({ search: undefined, 'whats-open': undefined, 'show-guide': undefined });
        }
        else {
          props.navigation.setParams({ 'whats-open': '' });
        }
      }}
      color='#fff'
    />
  )
}

function FeedNavigator() {
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
            <TouchableOpacity
              activeOpacity={0.7}
              containerStyle={{ height: '100%' }}
              style={{ width: 50, height: '100%', flexDirection: 'row', alignItems: 'center' }}
              onPress={() => route.navigation.dangerouslyGetState().routes.length === 1 ?
                route.navigation.reset({ index: 0, routes: [{ name: 'FeedScreen', params: {} }] }) :
                route.navigation.goBack()
              }>
              <FontAwesome5
                name='times'
                size={24}
                style={{ marginLeft: 15 }}
                color='#fff'
              />
            </TouchableOpacity>
          ),
        })}
      />
      <FeedStack.Screen
        name='FeedListingOffersScreen'
        component={FeedListingOffersScreen}
        options={(route) => ({
          headerTitle: route.route.params.listingName.replace(/~and~/g, ' & ').replace(/-/g, ' '),
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              containerStyle={{ height: '100%' }}
              style={{ width: 50, height: '100%', flexDirection: 'row', alignItems: 'center' }}
              onPress={() => route.navigation.dangerouslyGetState().routes.length === 1 ?
                route.navigation.reset({ index: 0, routes: [{ name: 'FeedListingScreen', params: route.route.params }] }) :
                route.navigation.goBack()}>
              <FontAwesome5
                name='times'
                size={24}
                style={{ marginLeft: 15 }}
                color='#fff'
              />
            </TouchableOpacity>
          ),
        })}
      />
    </FeedStack.Navigator>
  );
}

const CovidStack = createStackNavigator<CovidParamList>();

function CovidNavigator() {
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

const MoreStack = createStackNavigator<MoreParamList>();

function MoreNavigator() {
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
