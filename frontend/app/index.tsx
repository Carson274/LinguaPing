import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import WordList from "../app/components/WordList";
import wordsData from "./words.json";

export default function Index() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    setWords(wordsData);
  }, []);

  return (
    <SafeAreaView style={styles.safeContent} >
      <View style={styles.container} >
        <Text style={styles.title} >Words</Text>
        <WordList words={words} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContent: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 20
  }
});