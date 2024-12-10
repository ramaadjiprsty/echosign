import { View, Text, TouchableOpacity, Image, ImageSourcePropType, StyleSheet } from 'react-native';
import React from 'react';

type CardParam = {
  title: string;
  image: ImageSourcePropType;
  color: string;
  onPress?: () => void;
}

const Card = ({ title, image, color, onPress }: CardParam) => {
  return (
    <View className='bg-black m-2 translate-x-1.5 translate-y-1.5'>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} className={`overflow-hidden border-2 shadow -translate-x-1.5 -translate-y-1.5  ${color}`}>
        <View className="flex-row p-4 w-full items-center "> {/* Changed to flex-row */}
          <View className="flex-1"> {/* This allows the title to take available space */}
            <Text className="text-3xl font-lexsemibold">{title}</Text>
          </View>
          <Image source={image} className="w-20 h-20" /> {/* Added margin-left for spacing */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;