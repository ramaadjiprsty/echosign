import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import images from '../../constants/images'

const Introduction = () => {
  return (
    <View className='m-4'>
      <View className="border-2 border-b-[6px] border-r-[6px] p-2" style={styles.radiusCard}>
        <Image source={images.introbanner} className="h-32 w-full" style={styles.radiusImage} />
        <Text className='text-2xl font-bold'>Mari Mengenal Lebih Dalam Tentang Bahasa Isyarat Indonesia</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  radiusCard: {
    borderRadius: 18
  },
  radiusImage:{
    borderRadius: 10
  }
})

export default Introduction