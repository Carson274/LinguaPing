import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import WordList from "../app/components/WordList";
import { useState } from "react";

export default function Index() {
  const [words, setWords] = useState(
    [
      {
        front: "hello",
        back: "안녕하세요"
      },
      {
        front: "bus",
        back: "버스"
      }
    ]
  );

  return (
    <SafeAreaView style={styles.safeContent} >
      <View style={styles.container} >
        <Text style={styles.title} >Words</Text>
        <>
          {words.map((word, index) => (
            <WordList key={index} word={word} />
          ))}
        </>
      </View>
    </SafeAreaView>
  );
}

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
    fontWeight: "600"
  }
});