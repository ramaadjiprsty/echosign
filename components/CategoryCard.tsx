import React from "react";
import {ImageSourcePropType, View} from "react-native";

type CategoryCardProps = {
    title: string;
    image: ImageSourcePropType;
    color: string;
    onPress?: () => void;

}

const CategoryCard = ({ title, image, color, onPress}: CategoryCardProps) => {
    return (
        <View className=''>

        </View>
    )
}