import { ImageSourcePropType } from "react-native";
import icons from "../constants/icons"

enum CardTitle {
  INTRODUCTION = "Pengenalan",
  LEARNING = "Belajar",
  EXERCISE = "Latihan",
  ABOUT = "Tentang",
}

interface CardData {
  key: CardTitle;
  image: ImageSourcePropType;
  color: string;
  destination: string;
}

export const cardData : CardData[] = [
  { key: CardTitle.INTRODUCTION, image: icons.presentation, color: 'bg-blue-400', destination: '/introduction'},
  { key: CardTitle.LEARNING, image: icons.signLanguange, color: 'bg-green-400', destination: '/learning' },
  { key: CardTitle.EXERCISE, image: icons.quiz, color: 'bg-red-400', destination: '/exercise' },
  { key: CardTitle.ABOUT, image: icons.about, color: 'bg-yellow-400', destination: '/about' }
  
];