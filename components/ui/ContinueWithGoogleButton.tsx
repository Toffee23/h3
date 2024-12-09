import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ButtonProps = {
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  style?: object;
  textStyle?: object;
};

const ContinueWithGoogleButton = ({
  onPress,
  isLoading = false,
  disabled = false,
  style = {},
  textStyle = {},
}: ButtonProps) => {
  return (
    <Pressable
      style={[styles.button, disabled ? styles.disabled : {}, style]}
      onPress={onPress}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={require("../../assets/images/devicon_google.png")} />
          <Text style={[styles.text, textStyle]}>Continue with Google</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    alignSelf: "stretch",
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
  },
  disabled: {
    backgroundColor: "#d3d3d3",
  },
});

export default ContinueWithGoogleButton;
