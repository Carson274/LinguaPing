import { Text, View, StyleSheet, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function WordCard({ word } : { word: Word }) {
  return (
    <View style={styles.container}>
      <View style={styles.wordContainer}>
        <Text>{word.front}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Ionicons name="swap-vertical" size={24} color="black" />
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    gap: 10
  },
  wordContainer: {
    flex: 1,
    backgroundColor: "#E1E1E1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  buttonContainer: {
    flex: 0,
    backgroundColor: "#FFDD8C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 40,
    height: 40
  },
  textContainer: {
    flex: 1,
    backgroundColor: "#fffff1",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    height: "100%",
    width: "80%"
  }
})