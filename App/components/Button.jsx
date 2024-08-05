import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Button = (props) => {
  const isPrimary = props.theme === "primary";

  return (
    <View
      style={[
        styles.buttonContainer,
        isPrimary && styles.primaryButtonContainer,
      ]}
    >
      <Pressable
        style={[styles.button, isPrimary && styles.primaryButton]}
        onPress={props.onPress}
      >
        {isPrimary && (
          <FontAwesome
            name="picture-o"
            size={18}
            color={styles.primaryButtonIcon.color}
            style={styles.buttonIcon}
          />
        )}
        <Text style={[styles.buttonLabel, isPrimary && styles.primaryButtonLabel]}>
          {props.label}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
  primaryButtonContainer: {
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 18,
  },
  primaryButton: {
    backgroundColor: "#fff",
  },
  primaryButtonIcon: {
    color: "#25292e",
  },
  primaryButtonLabel: {
    color: "#25292e",
  },
});

export default Button;
