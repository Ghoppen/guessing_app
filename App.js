import { StyleSheet, Text, View } from "react-native";
import Header from "./components/headers/Header";
import StartGameScreen from "./screen/StartGameScreen";
import GameScreen from "./screen/GameScreen";
import { useState } from "react";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setSelectedNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (selectedNumber) {
    content = <GameScreen userChoice={selectedNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guessing Game"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
