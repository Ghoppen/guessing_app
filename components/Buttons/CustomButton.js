import React from "react";
import { View, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <View style={{ ...styles.button, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    maxWidth: "40%",
    elevation: 5,
    marginLeft: 10,
    borderRadius: 25,
  },
});

export default CustomButton;
