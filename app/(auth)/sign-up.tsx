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

const SignUpLayout = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) Alert.alert(error.message);
    if (!session) {
      Alert.alert(
        'Account Created',
        'Please check your inbox for email verification',
        [
          {
            text: 'OK',
            onPress: () => {
              router.replace('/sign-in');
            },
          },
        ],
      );
      setForm({
        email: '',
        password: '',
      });
    }
    setLoading(false);
  }

  return (
    <View>
      <View className="h-1/3 my-4 border-b">
        <Image
          source={images.signLanguangePic}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <View className="px-4">
        <Text className="text-4xl font-bold mb-4">Create Account</Text>
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
            onPress={() => signUpWithEmail()}
            disabled={!form.email || !form.password || loading}
            className={`h-16 w-full justify-center items-center rounded-xl bg-blue-400 mb-2 ${!form.email || !form.password ? 'bg-gray-300' : 'bg-blue-400'}`}
          >
            <Text className="font-bold text-lg text-white">
              {loading ? <ActivityIndicator size="small" /> : 'CREATE ACCOUNT'}
            </Text>
          </TouchableOpacity>
          <Text>
            Already have an account?{' '}
            <Text
              className="text-blue-500"
              onPress={() => router.push('/sign-in')}
            >
              Sign In here
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpLayout;
