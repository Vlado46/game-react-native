import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryBtn from "../components/ui/PrimaryBtn";

const GameOverScreen = ({ roundsNum, userNum, startNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 480) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.scr}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imgContainer, imageStyle]}>
          <Image
            style={styles.img}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.sumTxt}>
          Your phone needed <Text style={styles.highlight}>{roundsNum}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNum}</Text>.
        </Text>
        <PrimaryBtn onPress={startNewGame}>Start New Game</PrimaryBtn>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  scr: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  sumTxt: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
