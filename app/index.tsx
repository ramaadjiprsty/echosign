import { router } from 'expo-router';
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MenuCard from '../components/MenuCard';
import { StatusBar } from 'expo-status-bar';
import { cardData } from '../data/cardData'; //
import '../global.css';
import images from '../constants/images';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // const handlePress = async () => {
  //   if (!session) {
  //     router.push('/sign-in');
  //   } else {
  //     router.push('/home');
  //   }
  // };

  return (
    <View className="flex-1 justify-center content-center items-center">
      <Text className="text-3xl font-bold">ONBOARDING APP</Text>
      <TouchableOpacity
        onPress={() => router.push('/sign-in')}
        className="bg-orange-400 p-4 rounded-xl"
      >
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
