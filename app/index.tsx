import { router } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
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
    <View className='h-full w-full bg-violet-500'>
    <View className='m-4 bg-white p-4'>
      {/* <MainHeader /> */}
      {/* <MainHero /> */}
      {/* <View className='flex-row justify-between'> */}
      {/* <View className='border-2 border-b-4 border-r-4 rounded-lg p-4'>
        <View className='flex-row justify-between'>
        <View className='items-center'>
            <Text className='text-2xl font-bold px-2'>Progress</Text>
            <Text className='text-3xl font-bold'>0%</Text>
          </View>
          <View className='items-center'>
            <Text className='text-2xl font-bold px-2'>High Score</Text>
            <Text className='text-3xl font-bold'>0</Text>
          </View>
        </View>
      </View> */}
      {/* </View> */}
      <View className='justify-center'>
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
    </View>
  );
}
