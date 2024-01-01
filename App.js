import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNum, setUserNum] = useState(null);

  function pickedNumHandler(pickedNum) {
    setUserNum(pickedNum);
  }

  return (
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
        <SafeAreaView style={styles.rootScr}>
          {userNum ? (
            <GameScreen userNum={userNum} />
          ) : (
            <StartGameScreen pickedNumHandler={pickedNumHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
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
