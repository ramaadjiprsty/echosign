import React, { useState } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import FormField from '../../components/FormField';
import { router } from 'expo-router';
import { supabase } from '../../lib/supabase';
import images from '../../constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/Button';
import { useAuthForm } from '../../hooks/useAuthForm';

const SignUpLayout = () => {
  const [loading, setLoading] = useState(false);
  const { form, updateField, resetForm } = useAuthForm();

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
      resetForm();
    }
    setLoading(false);
  }

  return (
    <SafeAreaView>
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
          handleChangeText={(e) => updateField('email', e)}
        />

        <FormField
          title="Password"
          value={form.password}
          placeholder="Password"
          handleChangeText={(e) => updateField('password', e)}
        />

        <View className="mt-4 justify-center items-center">
          <Button
            title="CREATE ACCOUNT"
            onPress={() => signUpWithEmail()}
            disabled={loading || !form.email || !form.password}
            otherStyle={`${!form.email || !form.password ? 'bg-gray-300' : 'bg-blue-400'}`}
          />
          <Text>
            Already have an account?{' '}
            <Text
              className="text-blue-500"
              onPress={() => router.replace('/sign-in')}
            >
              Sign In here
            </Text>
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SignUpLayout;
