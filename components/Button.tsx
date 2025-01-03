import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  otherStyle?: string;
}

export const Button = ({
  title,
  onPress,
  isLoading,
  otherStyle,
  ...otherProps
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isLoading}
      onPress={onPress}
      {...otherProps}
      className={`h-16 w-full justify-center items-center rounded-xl bg-blue-400 mb-2 ${otherStyle}`}
    >
      <Text className="font-bold text-lg text-white">
        {isLoading ? <ActivityIndicator size={'small'} /> : title}
      </Text>
    </TouchableOpacity>
  );
};
