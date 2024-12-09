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
    <TouchableOpacity onPress={onPress} className={`overflow-hidden my-2 border-2 border-r-4 border-b-4 ${color}`} style={styles.radiusCard}>
      <View className="flex-row p-4 w-full items-center "> {/* Changed to flex-row */}
        <View className="flex-1"> {/* This allows the title to take available space */}
          <Text className="text-3xl font-semibold">{title}</Text>
        </View>
        <Image source={image} className="w-20 h-20" /> {/* Added margin-left for spacing */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radiusCard: {
    borderRadius: 20
  },
});

export default Card;