import React from 'react';
import { Stack, Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
          alignContent: 'center',
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name={'home'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="exercise"
        options={{
          title: 'Exercise',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name={'book'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name={'exclamation-circle'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
