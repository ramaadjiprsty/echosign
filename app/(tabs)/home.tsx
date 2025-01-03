import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Alert, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoryCard from '../../components/CategoryCard';
import icons from '../../constants/icons';

const Home = () => {
  const [username, setUsername] = useState('');
  const fetchUsername = async () => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        Alert.alert('Error', 'Failed to fetch user information.');
        return;
      }

      const metadata = user.user_metadata;
      setUsername(metadata?.username || 'Guest'); // Fallback to "Guest" if username is not defined
    } catch (err) {
      console.error('Error fetching username:', err);
      Alert.alert('Error', 'An unexpected error occurred.');
    }
  };

  // Use useEffect to fetch the username when the component mounts
  useEffect(() => {
    fetchUsername()
      .then(() => {
        console.log('Username fetched successfully');
      })
      .catch((err) => {
        console.error('Error fetching username:', err);
      });
  }, []);

  return (
    <View className="h-full bg-slate-300">
      <View className="h-1/4 bg-white rounded-b-3xl flex justify-end">
        <View className="p-6">
          <Text className="text-2xl">Hello {username},</Text>
          <Text className="text-3xl font-bold">Lets Learn Sign Language!</Text>
        </View>
      </View>
      <Text className="text-2xl font-semibold p-6">Your Lesson</Text>
      <View className="mx-6">
        <CategoryCard title="Alphabet" image={icons.alphabet} />
        <CategoryCard title="Number" image={icons.numbers} />
        <CategoryCard title="Word" image={icons.word} />
        <CategoryCard title="Affix" image={icons.affix} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
