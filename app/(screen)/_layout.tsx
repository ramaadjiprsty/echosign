import { Stack } from 'expo-router';
import React from 'react';

const ScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="alphabet" />
      <Stack.Screen name="numbers" />
      <Stack.Screen name="affix" />
      <Stack.Screen name="word" />
    </Stack>
  );
};

export default ScreenLayout;
