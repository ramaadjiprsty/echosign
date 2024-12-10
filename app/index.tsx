import { router } from 'expo-router';
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';
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
    <View className='h-full w-full bg-yellow-300'>
    <View className='m-4'>
      <View className='bg-black translate-x-1.5 translate-y-1.5 h-40'>
        <View className='bg-white -translate-x-2 -translate-y-2 h-full flex-row justify-between items-center'>
          <Text className='text-6xl font-ericaone ml-4 mx-auto text-amber-300 shadow-black' style={styles.textStyle}>{`Echo \nSign`}</Text>
          <View className='border-2 contain-size h-32 w-1/2 bg-yellow-300 mr-4 rounded-lg'>
            <Image 
            source={require('../assets/images/sign-language-logo.png')} 
            className='h-full w-full mt-3' 
            resizeMode='center'
            />
          </View>
        </View>
      </View>
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
      <View className='justify-center mt-4'>
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

const styles = StyleSheet.create({
  textStyle: {
    textShadowOffset: {width: 4, height: 4},
    textShadowColor: 'black',
    textShadowRadius: 1
  },
});
