import { StyleSheet, Text, View } from "react-native";
import Header from "./components/headers/Header";
import StartGameScreen from "./screen/StartGameScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={"Guessing Game"} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
