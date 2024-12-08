import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Card = ({ title, image, color, onPress }: { title: string; image: any; color: string; onPress?: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`shadow-md rounded-lg overflow-hidden my-2 border border-black ${color}`}>
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