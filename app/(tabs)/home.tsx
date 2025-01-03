import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { supabase } from '../../lib/supabase';
import { router } from 'expo-router';
import { Alert, Text } from 'react-native';

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
    <SafeAreaView>
      <Text>Test {username}</Text>
    </SafeAreaView>
  );
};

export default Home;
