import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  style?: object;
  textStyle?: object;
};

const PrimaryButton = ({
  title,
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
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#83E18D",
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
    fontWeight: 600,
  },
  disabled: {
    backgroundColor: "#d3d3d3",
  },
});

export default PrimaryButton;
