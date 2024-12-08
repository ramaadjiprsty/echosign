import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const MainHero = () => {
  return (
    <View>
        <Image className={'w-full h-24'} source={require('../assets/bg_header.png')} />
    </View>
  )
}

export default MainHero