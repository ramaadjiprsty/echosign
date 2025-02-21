import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface CategoryCardProps extends TouchableOpacityProps {
  title: string;
  image: ImageSourcePropType;
  handlePress: () => void;
}

const CategoryCard = ({ title, image, handlePress }: CategoryCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-white p-6 flex-row items-center rounded-xl elevation-md my-2"
      onPress={handlePress}
    >
      <Image source={image} resizeMethod="auto" className="h-16 w-16" />
      <Text className="text-2xl ml-4 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
