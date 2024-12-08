import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const MainMenuHeader = () => {
  return (
    <View className='bg-white h-32 rounded-b-3xl border border-black overflow-hidden'>
      <ImageBackground 
        imageClassName='opacity-40'
        source={require('../assets/bg_header.png')}
        className='h-full justify-center items-center'
        resizeMode='cover'
      >
        <View className='pl-5'>
          <Text className='text-3xl'>
            Hi, <Text className='font-bold'>Kamu</Text>
          </Text>
          <Text className='text-xl'>Selamat Datang di Echo Sign</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default MainMenuHeader