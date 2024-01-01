import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const PrimaryBtn = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.btnContainer, styles.pressed] : styles.btnContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  btnContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
