import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 0 : 2,
    // borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
    width: 300,
  },
});
