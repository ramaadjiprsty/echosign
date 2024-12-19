import { ImageSourcePropType } from "react-native";
import icons from "../constants/icons"

enum CardTitle {
  INTRODUCTION = "Introduction",
  LEARNING = "Learning",
  EXERCISE = "Exercise",
  ABOUT = "About",
}

interface CardData {
  key: CardTitle;
  image: ImageSourcePropType;
  color: string;
  destination: string;
}

export const cardData : CardData[] = [
  { key: CardTitle.INTRODUCTION, image: icons.presentation, color: 'bg-blue-300', destination: '/introduction'},
  { key: CardTitle.LEARNING, image: icons.signLanguange, color: 'bg-green-300', destination: '/learning' },
  { key: CardTitle.EXERCISE, image: icons.quiz, color: 'bg-red-300', destination: '/exercise' },
  { key: CardTitle.ABOUT, image: icons.about, color: 'bg-violet-300', destination: '/about' }
  
];