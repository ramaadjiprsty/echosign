import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
        tabBarStyle: {
          paddingTop: 12,
          height: 70,
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
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name={'cog'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
