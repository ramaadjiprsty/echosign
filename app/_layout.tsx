import React from 'react';

import { Stack } from 'expo-router';

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
        },
      }}>
      <Stack.Screen name="index" options={{ title: 'Home'}} />
      <Stack.Screen name='(screen)' options={{ headerShown: false}}/>
    </Stack>
  );
}


