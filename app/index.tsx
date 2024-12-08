import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '../global.css';
import Card from '../components/Card';
import { FlatList } from 'react-native';
import { cardData } from '../data/cardData';//
import { router } from 'expo-router';
// import icons from '../constants/icons';

export default function App() {
  const handlePress = (destination: string) => {
    router.push(destination)
  }
  

  return (
    <View className='justify-center mx-3'>
      <FlatList
      data={cardData}
      renderItem={({ item }) => <Card title={item.key} image={item.image} color={item.color} onPress={() => handlePress(item.destination)} />}
      keyExtractor={item => item.key}
    />
      <StatusBar style="auto" />
    </View>
  );
}
