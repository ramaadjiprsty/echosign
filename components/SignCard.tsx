import React from 'react';
import { Text, Image, ImageSourcePropType, View } from 'react-native';

type SignCardProps = {
  title: string;
  image: ImageSourcePropType;
};

const SignCard = ({ title, image }: SignCardProps) => {
  return (
    <View className="rounded-xl my-2 bg-blue-300 flex-col justify-center items-center relative">
      <Image source={image} className="w-40 h-40 rounded-md" />
      <Text className="absolute bottom-0 text-center text-white font-bold text-2xl flex items-center justify-center w-full rounded-b-md bg-[rgba(0,0,0,0.5)]">
        {title}
      </Text>
    </View>
  );
};

export default SignCard;
