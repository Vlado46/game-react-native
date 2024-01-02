import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";

const StartGameScreen = ({ pickedNumHandler }) => {
  const [entereNum, setEnteredNum] = useState("");

  function numInputHandler(enteredText) {
    setEnteredNum(enteredText);
  }

  function resetInputHandler() {
    setEnteredNum("");
  }

  function confirmHandler() {
    const chosenNumber = parseInt(entereNum);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okey", style: "destructive", onPress: resetInputHandler }]
      );

      return;
    }
    pickedNumHandler(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Instruction>Enter a Number!</Instruction>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={entereNum}
          onChangeText={numInputHandler}
        />
        <View style={styles.btns}>
          <View style={styles.btn}>
            <PrimaryBtn onPress={resetInputHandler}>Reset</PrimaryBtn>
          </View>
          <View style={styles.btn}>
            <PrimaryBtn onPress={confirmHandler}>Confirm</PrimaryBtn>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  btns: {
    flexDirection: "row",
  },
  btn: {
    flex: 1,
  },
});
