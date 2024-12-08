import icons from "../constants/icons"

export interface CardData {
    title: string,
    color?: string,
    image?: string
}

export const cardData: CardData[] = [
    {
        title: "Pengenalan",
        color: "bg-blue-300",
        image: icons.presentation
    },
    {
        title: "Belajar",
        color: "bg-teal-300",
        image: icons.signLanguange
    },
    {
        title: "Latihan",
        color: "bg-purple-400",
        image: icons.quiz
    },
    {
        title: "Tentang",
        color: "bg-pink-400",
        image: icons.about
        
    }
]