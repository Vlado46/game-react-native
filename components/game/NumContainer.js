import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const NumContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
};

export default NumContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
