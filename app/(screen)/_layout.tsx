import { Stack } from 'expo-router';
import React from 'react';

const ScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="alphabet" options={{ headerTitle: 'Alphabet' }} />
      <Stack.Screen name="numbers" options={{ headerTitle: 'Numbers' }} />
      <Stack.Screen name="affix" options={{ headerTitle: 'Affix' }} />
      <Stack.Screen name="word" options={{ headerTitle: 'Word' }} />
    </Stack>
  );
};

export default ScreenLayout;
