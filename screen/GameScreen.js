import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomnumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomnumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomnumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
};

const styles = StyleSheet.create();

export default GameScreen;