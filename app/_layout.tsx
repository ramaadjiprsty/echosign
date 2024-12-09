import React from 'react';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0c0a09',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
          color: 'white',
        },
      }}>
      <Stack.Screen name="index" options={{ title: 'Home', headerShadowVisible: true}} />
      <Stack.Screen name='(screen)' options={{ headerShown: false}}/>
    </Stack>
  );
}


