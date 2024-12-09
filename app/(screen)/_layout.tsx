import React from 'react';
import { Stack } from 'expo-router';
const ScreenLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0c0a09',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 24,
          color: 'white',
        },
      }}
      >
      <Stack.Screen name="introduction" options={{ title: 'Introduction'}} />
      <Stack.Screen name="learning" options={{ title: 'Learning'}} />
      <Stack.Screen name="exercise" options={{ title: 'Exercise'}} />
      <Stack.Screen name="about" options={{ title: 'About'}} />
    </Stack>
  );
}

export default ScreenLayout


