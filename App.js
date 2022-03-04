import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/headers/Header";
import StartGameScreen from "./screen/StartGameScreen";
import GameScreen from "./screen/GameScreen";
import { useState } from "react";
import GameOverScreen from "./screen/GameOver";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  const startGameHandler = (selectedNumber) => {
    setSelectedNumber(selectedNumber);
    setGuessRounds(0);
  };

  const startNewGameHandler = () => {
    setGuessRounds(0);
    setGuessRounds(0);
    setSelectedNumber();
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (selectedNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={selectedNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userChoice={selectedNumber}
        onRestart={startNewGameHandler}
      />
    );
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
