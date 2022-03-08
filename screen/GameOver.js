import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TitleText from "../components/texts/TitleText";
import CustomButton from "../components/Buttons/CustomButton";
import colors from "../constants/colors";
import MainButton from "../components/Buttons/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={require("../assets/images/success.png")}
          //source={{ uri: "link" }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.resultText}>
        {" "}
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> roundsto
        guess the number{" "}
        <Text style={styles.highlight}>{props.userChoice}</Text>.{" "}
      </Text>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
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
  highlight: {
    color: colors.primary,
  },
  resultText: {
    textAlign: "center",
  },
});

export default GameOverScreen;
