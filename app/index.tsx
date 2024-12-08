import { router } from 'expo-router';
import { FlatList, View } from 'react-native';
import Card from '../components/Card';
// import MainHeader from '../components/MainHeader';
import { StatusBar } from 'expo-status-bar';
import { cardData } from '../data/cardData'; //
import '../global.css';

export default function App() {
  const handlePress = (destination: string) => {
    router.push(destination)
  }
  

  return (
    <View>
      {/* <MainHeader /> */}
      {/* <MainHero /> */}
      <View className='justify-center mx-3'>
        <FlatList
          data={cardData}
          renderItem={({ item }) => 
              <Card 
                title={item.key} 
                image={item.image} 
                color={item.color} 
                onPress={() => handlePress(item.destination)} />}
          keyExtractor={item => item.key}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
