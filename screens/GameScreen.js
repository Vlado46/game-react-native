import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumContainer from "../components/game/NumContainer";
import PrimaryBtn from "../components/ui/PrimaryBtn";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNum }) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNum);
  const [currGuess, setCurrGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currGuess < userNum) ||
      (direction === "greater" && currGuess > userNum)
    ) {
      Alert.alert("Dont lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currGuess;
    } else {
      minBoundary = currGuess + 1;
    }
    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currGuess
    );
    setCurrGuess(newRndNum);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumContainer>{currGuess}</NumContainer>
      <View>
        <Text>H or L</Text>
        <View>
          <PrimaryBtn onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryBtn>
          <PrimaryBtn onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryBtn>
        </View>
      </View>
      <View>{/* Log rounds */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
