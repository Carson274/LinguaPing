import { Text } from "react-native";

export default function WordList({ word }: { word: Word }) {
  return (
    <Text>{word.front}</Text>
  )
}