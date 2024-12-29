import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import icons from '../constants/icons';

interface FormProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
}: FormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setFocused] = useState(false);

  return (
    <View className={`space-y-2`}>
      <Text className="text-lg font-medium ml-1">{title}</Text>

      <View
        className={`border w-full h-16 px-4 rounded-xl items-center flex-row ${isFocused ? 'border-blue-400' : 'border-black'}`}
      >
        <TextInput
          className="flex-1 text-black font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          autoCapitalize="none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          secureTextEntry={title == 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
