import { View } from './components/Themed';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Text } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeManager, { useTheme } from './config/ThemeManager';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import ListingProvider from './config/ListingProvider';
import OfferProvider from './config/OfferProvider';

const FadeInView = (props: any) => {
  const fadeAnim = React.useRef(new Animated.Value(1)).current  // Initial value for opacity: 0
  const [zIndex, setZIndex] = React.useState(9999);

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }
    ).start(() => setZIndex(0));
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        zIndex: zIndex,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const { theme } = useTheme();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  if (!isLoadingComplete) {
    return (
      <View style={{ position: 'absolute', top: 0, left: 0, zIndex: 3, backgroundColor: '#323232', width: screenWidth, height: screenHeight }}>
      </View>
    );
  } else {
    return (
      <SafeAreaProvider style={{ backgroundColor: '#323232' }}>
        <FadeInView style={{ position: 'absolute', top: 0, left: 0, backgroundColor: theme.background, width: screenWidth, height: screenHeight }}>
        </FadeInView>
        <AppearanceProvider>
          <ThemeManager>
            <ListingProvider>
              <OfferProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
              </OfferProvider>
            </ListingProvider>
          </ThemeManager>
        </AppearanceProvider>
      </SafeAreaProvider>
    );
  }
}
