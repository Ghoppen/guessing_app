import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TitleText from "../components/texts/TitleText";
import CustomButton from "../components/Buttons/CustomButton";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text>Number of Rounds: {props.roundsNumber}</Text>
      <Text>Selected Number: {props.userChoice}</Text>
      <CustomButton>
        <Button
          title="New Game"
          color={colors.primary}
          onPress={props.onRestart}
        />
      </CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: 40,
  },

  image: {
    width: "100%",
    height: "100%",
    height: 300,
  },
});

export default GameOverScreen;
