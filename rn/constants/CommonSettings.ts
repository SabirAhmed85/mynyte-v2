import { HeaderStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import { useTheme } from '../config/ThemeManager';

export const HeaderStylingOptions = () => {
  const { theme } = useTheme();
  return {
    headerStyle: {
      backgroundColor: theme.headerBackground,
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      fontFamily: 'titillium',
      color: '#ffffff',
    },
    headerTintColor: theme.headerTint,
  };
};

export const CardScreenTransition = {
  cardOverlayEnabled: true,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width * 1.25, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['15deg', '0deg'],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.9],
              })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};