import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import React from 'react';

type CardParam = {
  title: string;
  image: ImageSourcePropType;
  color: string;
  onPress?: () => void;
}

const Card = ({ title, image, color, onPress }: CardParam) => {
  return (
    <TouchableOpacity onPress={onPress} className={`shadow-md rounded-lg overflow-hidden my-2 border ${color}`}>
      <View className="flex-row p-4 w-full items-center"> {/* Changed to flex-row */}
        <View className="flex-1"> {/* This allows the title to take available space */}
          <Text className="text-3xl font-semibold">{title}</Text>
        </View>
        <Image source={image} className="w-20 h-20" /> {/* Added margin-left for spacing */}
      </View>
    </TouchableOpacity>
  );
};

export default Card;