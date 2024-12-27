import { router } from 'expo-router';
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MenuCard from '../components/MenuCard';
import { StatusBar } from 'expo-status-bar';
import { cardData } from '../data/cardData'; //
import '../global.css';
import images from '../constants/images';

export default function App() {
  return (
    <View className="flex-1 justify-center content-center items-center">
      <Text className="text-3xl font-bold">ONBOARDING APP</Text>
      <TouchableOpacity
        onPress={() => router.push('/sign-in')}
        className="bg-orange-400 p-4 rounded-xl"
      >
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
