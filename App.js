import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNum, setUserNum] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [roundsNum, setRoundsNum] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumHandler(pickedNum) {
    setUserNum(pickedNum);
    setGameOver(false);
  }

  function gameOverHandler(num) {
    setGameOver(true);
    setRoundsNum(num);
  }

  function startNewGame() {
    setUserNum(null);
    setRoundsNum(0);
  }

  let screen = <StartGameScreen pickedNumHandler={pickedNumHandler} />;

  if (userNum) {
    screen = <GameScreen userNum={userNum} gameOverHandler={gameOverHandler} />;
  }

  if (gameOver && userNum) {
    screen = (
      <GameOverScreen
        userNum={userNum}
        roundsNum={roundsNum}
        startNewGame={startNewGame}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScr}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScr}
          imageStyle={styles.img}
        >
          <SafeAreaView style={styles.rootScr}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScr: {
    flex: 1,
  },
  img: {
    opacity: 0.16,
  },
});
