import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { supabase } from '../../lib/supabase';
import { router } from 'expo-router';

const Setting = () => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/sign-in');
  };

  return (
    <SafeAreaView>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  );
};

export default Setting;
