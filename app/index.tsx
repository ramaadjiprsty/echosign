import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '../global.css';
import Card from '../components/Card';
import { FlatList } from 'react-native';

export default function App() {
  return (
    <View className='justify-center mx-3'>
      <FlatList
        data={[
          {key: "Pengenalan"},
          {key: "Belajar"},
          {key: "Latihan"},
          {key: "Tentang"}
        ]}
        renderItem={({item}) => <Card title={item.key} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}
