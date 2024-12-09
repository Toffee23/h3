import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#1F4258",
  },
});

{
  /* // <Stack screenOptions={{ headerShown: false }}>
    //  
    //     <Stack.Screen name="index" />
    //     <Stack.Screen name="login" />
    //     {/* <Stack.Screen name="register" options={{ title: "Register" }} /> */
}
// </Stack> */}
