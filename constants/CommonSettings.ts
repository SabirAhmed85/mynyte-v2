import { StackNavigationOptions } from '@react-navigation/stack';
import { StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '../config/ThemeManager';

export const HeaderStylingOptions = () => {
  const { theme } = useTheme();
  return () => ({
    headerStyle: {
      backgroundColor: theme.headerBackground,
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      fontFamily: 'titillium',
      color: '#ffffff',
    },
    headerTintColor: theme.headerTint,
  } as StackNavigationOptions);
};
