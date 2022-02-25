import { React, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../components/Cards/Card";
import CustomButton from "../components/Buttons/CustomButton";
import colors from "../constants/colors";
import Input from "../components/Inputs/Input";

const StartGameScreen = (props) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [userConfirmation, setUserConfirmation] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (number) => {
    setEnteredInput(number.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setEnteredInput("");
    setUserConfirmation(false);
  };
  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredInput);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setUserConfirmation(true);
    setSelectedNumber(chosenNumber);
    setEnteredInput("");
  };
  let confirmedOuput;
  if (userConfirmation) {
    confirmedOuput = <Text>Chosen Number: {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
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
            onChangeText={numberInputHandler}
            value={enteredInput}
          />
          <View style={styles.buttonContainer}>
            <CustomButton>
              <Button
                title="Reset"
                color={colors.secondary}
                onPress={() => {
                  resetHandler();
                }}
              />
            </CustomButton>
            <CustomButton>
              <Button
                title="Confirm"
                color={colors.primary}
                onPress={() => {
                  confirmHandler();
                }}
              />
            </CustomButton>
          </View>
        </Card>
        {confirmedOuput}
      </View>
    </TouchableWithoutFeedback>
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
