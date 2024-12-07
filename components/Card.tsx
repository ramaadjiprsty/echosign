import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Card = ({ title, onPress }: { title: string; onPress?: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} className="bg-blue-400 shadow-md rounded-lg overflow-hidden my-2">
      <View className="p-8 w-full">
        <Text className="text-2xl font-semibold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;