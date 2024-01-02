import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumContainer from "../components/game/NumContainer";
import PrimaryBtn from "../components/ui/PrimaryBtn";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import GuessLogItem from "../components/game/GuessLogItem";

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

const GameScreen = ({ userNum, gameOverHandler }) => {
  const initialGuess = generateRandomBetween(1, 100, userNum);
  const [currGuess, setCurrGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currGuess === userNum) {
      gameOverHandler(guessRounds.length);
    }
  }, [currGuess, userNum, gameOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prev) => [newRndNum, ...prev]);
  }

  const guessLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumContainer>{currGuess}</NumContainer>
      <Card>
        <Instruction style={styles.instText}>Higher or lower?</Instruction>
        <View style={styles.btns}>
          <View style={styles.btn}>
            <PrimaryBtn onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryBtn>
          </View>
          <View style={styles.btn}>
            <PrimaryBtn onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryBtn>
          </View>
        </View>
      </Card>
      <View style={styles.list}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNum={guessLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  btns: {
    flexDirection: "row",
  },
  btn: {
    flex: 1,
  },
  instText: {
    marginBottom: 12,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
