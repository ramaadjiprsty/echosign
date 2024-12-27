import React, { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fonstLoaded, error] = useFonts({
    'Lexend-Thin': require('../assets/fonts/LexendMega-Thin.ttf'),
    'Lexend-ExtraLight': require('../assets/fonts/LexendMega-ExtraLight.ttf'),
    'Lexend-Light': require('../assets/fonts/LexendMega-Light.ttf'),
    'Lexend-Regular': require('../assets/fonts/LexendMega-Regular.ttf'),
    'Lexend-Medium': require('../assets/fonts/LexendMega-Medium.ttf'),
    'Lexend-SemiBold': require('../assets/fonts/LexendMega-SemiBold.ttf'),
    'Lexend-Bold': require('../assets/fonts/LexendMega-Bold.ttf'),
    'Lexend-ExtraBold': require('../assets/fonts/LexendMega-ExtraBold.ttf'),
    'Lexend-Black': require('../assets/fonts/LexendMega-Black.ttf'),
    'Erica One': require('../assets/fonts/EricaOne-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (fonstLoaded) SplashScreen.hideAsync();
  }, [fonstLoaded, error]);

  if (!fonstLoaded && !error) return null;

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0c0a09',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'Lexend-Bold',
          fontSize: 24,
          color: 'white',
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(screen)" options={{ headerShown: false }} />
    </Stack>
  );
}
