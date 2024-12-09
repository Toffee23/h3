import { ThemedText } from "@/components/ThemedText";
import { Stack } from "expo-router";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import PrimaryButton from "@/components/ui/PrimaryButton";

const OnboardingScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText type="title">OnboardingScreen</ThemedText>
      <PrimaryButton title="Get started" onPress={() => router.push("/auth")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#1F4258",
    alignItems: "center",
    gap: 10,
  },
});

export default OnboardingScreen;
