import React from 'react';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#80C4E9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
          color: 'black',
        },
      }}>
      <Stack.Screen name="index" options={{ title: 'Home', headerShadowVisible: true, headerTitleAlign: 'center'}} />
      <Stack.Screen name='(screen)' options={{ headerShown: false}}/>
    </Stack>
  );
}


