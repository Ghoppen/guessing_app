import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import NumberContainer from "../components/texts/NumberContainer";
import Card from "../components/Cards/Card";
import CustomButton from "../components/Buttons/CustomButton";
import colors from "../constants/colors";

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
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Do not lie", "You know that this is wrong", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setRounds((rounds) => rounds + 1);
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={styles.screen}>
      <Text>Computers Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <CustomButton>
          <Button
            title="lower"
            color={colors.secondary}
            onPress={nextGuessHandler.bind(this, "lower")}
          />
        </CustomButton>
        <CustomButton>
          <Button
            title="greater"
            color={colors.primary}
            onPress={nextGuessHandler.bind(this, "greater")}
          />
        </CustomButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "80%",
  },
});

export default GameScreen;
