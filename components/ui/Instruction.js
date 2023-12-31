import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Instruction = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
