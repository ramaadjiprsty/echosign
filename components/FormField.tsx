import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
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
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View className={`space-y-2`}>
      <Text className="text-base font-medium">{title}</Text>

      <View className="w-full h-16 px-4 bg-white border-2 border-black rounded-2xl focus:border-blue-400 items-center flex-row">
        <TextInput
          className="flex-1 text-black font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
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
