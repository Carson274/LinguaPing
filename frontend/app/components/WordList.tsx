import { View, StyleSheet, ScrollView } from "react-native";
import WordCard from "./WordCard";

export default function WordList({ words } : { words: Word[] }) {
  return (
    <ScrollView style={styles.listContainer} >
      {words.map((word, index) => (
        <View style={styles.cardContainer} >
          <WordCard word={word} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%"
  },
  cardContainer: {
    marginBottom: 10
  }
});