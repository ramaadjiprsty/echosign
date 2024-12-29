import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormField from '../../components/FormField';
import { router } from 'expo-router';
import { supabase } from '../../lib/supabase';
import images from '../../constants/images';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignInLayout = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user) {
        Alert.alert('Login successful!', userData.user.email);
        router.push('/home');
      }
    }
    setLoading(false);
  }

  return (
    <SafeAreaView>
      <View className="h-1/3 my-4 border-b">
        <Image
          source={images.signLanguangeLogo}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <View className="px-4">
        <Text className="text-4xl font-bold mb-4">Welcome Back!</Text>
        <FormField
          title="Email"
          value={form.email}
          placeholder="email@eexample.com"
          handleChangeText={(e) => setForm({ ...form, email: e })}
        />

        <FormField
          title="Password"
          value={form.password}
          placeholder="Password"
          handleChangeText={(e) => setForm({ ...form, password: e })}
        />

        <View className="mt-4 justify-center items-center">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => signInWithEmail()}
            disabled={loading} // Disable button while loading
            className="h-16 w-full justify-center items-center rounded-xl bg-blue-400 mb-2"
          >
            <Text className="font-bold text-lg text-white">
              {loading ? <ActivityIndicator size="small" /> : 'SIGN IN'}
            </Text>
          </TouchableOpacity>
          <Text>
            Dont Have an Account?{' '}
            <Text
              className="text-blue-500"
              onPress={() => router.replace('sign-up')}
            >
              Sign Up here
            </Text>
          </Text>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default SignInLayout;
