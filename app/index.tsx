import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '../global.css';
import Card from '../components/Card';
import { FlatList } from 'react-native';
import icons from '../constants/icons';

export default function App() {
  return (
    <View className='justify-center mx-3'>
      <FlatList
        data={[
          {key: "Pengenalan", image: icons.presentation},
          {key: "Belajar", image: icons.signLanguange},
          {key: "Latihan", image: icons.quiz},
          {key: "Tentang", image: icons.about},
        ]}
        renderItem={({item}) => <Card title={item.key} image={item.image} />}
        keyExtractor={item => item.key}
      />

      <StatusBar style="auto" />
    </View>
  );
}
