import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Card from "../components/Cards/Card";
import CustomButton from "../components/Buttons/CustomButton";
import colors from "../constants/colors";
import Input from "../components/Inputs/Input";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input
          style={styles.inputField}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.buttonContainer}>
          <CustomButton>
            <Button title="Reset" color={colors.secondary} onPress={() => {}} />
          </CustomButton>
          <CustomButton>
            <Button title="Confirm" color={colors.primary} onPress={() => {}} />
          </CustomButton>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  inputField: {
    width: "50%",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default StartGameScreen;
