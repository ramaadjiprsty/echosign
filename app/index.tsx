import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '../global.css';
import Card from '../components/Card';
import { FlatList } from 'react-native';
import { cardData } from '../data/cardData';

export default function App() {
  

  return (
    <View className='justify-center mx-3'>
      <FlatList
      data={cardData}
      renderItem={({ item }) => <Card title={item.key} image={item.image} color={item.color} />}
      keyExtractor={item => item.key}
    />

      <StatusBar style="auto" />
    </View>
  );
}
