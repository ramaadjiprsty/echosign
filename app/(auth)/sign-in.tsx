import React, { useState } from 'react';
import { Text, View } from 'react-native';
import FormField from '../../components/FormField';

const SignInLayout = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  return (
    <View>
      <View className="px-4">
        <FormField
          title="Username"
          value={form.username}
          placeholder="Username"
          handleChangeText={(e) => setForm({ ...form, username: e })}
        />

        <FormField
          title="Password"
          value={form.password}
          placeholder="Password"
          handleChangeText={(e) => setForm({ ...form, password: e })}
        />
      </View>
    </View>
  );
};

export default SignInLayout;
