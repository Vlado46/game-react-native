import { TextInput, View, StyleSheet } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.btns}>
        <View style={styles.btn}>
          <PrimaryBtn>Reset</PrimaryBtn>
        </View>
        <View style={styles.btn}>
          <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
