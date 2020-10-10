import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeManager from './config/ThemeManager';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  console.log(isLoadingComplete);
  if (!isLoadingComplete) {
    return (
      <AppLoading />
    );
  } else {
    return (
      <SafeAreaProvider>
        <AppearanceProvider>
          <ThemeManager>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ThemeManager>
        </AppearanceProvider>
      </SafeAreaProvider>
    );
  }
}
