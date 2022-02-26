import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game is over</Text>
      <Text>Number of Rounds: {props.numberOfRounds}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <View>
        <Button
          title="New Game"
          color={colors.primary}
          onPress={props.onRestart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
