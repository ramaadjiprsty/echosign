import React from 'react';
import { View, Text, ImageSourcePropType, FlatList } from 'react-native';
import SignCard from '../../components/SignCard';
import images from '../../constants/images';
import { alphabetData, data } from '../../data/alphabetData';

const Alphabet = () => {
  const renderItem = ({ item }: { item: data }) => (
    <SignCard title={item.description} image={item.image} />
  );

  return (
    <View className="px-4">
      <FlatList
        data={alphabetData}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
      />
    </View>
  );
};

export default Alphabet;
