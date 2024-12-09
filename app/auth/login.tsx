import { ThemedText } from "@/components/ThemedText";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useState } from "react";
import { Alert, Image, StyleSheet, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Validation Error", "All fields are required.");
      return;
    } else {
      Alert.alert("Success", "Form submitted!");
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerTexts}>
        <ThemedText type="title">Welcome back</ThemedText>
        <ThemedText type="subtitle">Sign in</ThemedText>
      </View>

      <View style={styles.form}>
        <View>
          <ThemedText type="subtitle">Username</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <ThemedText type="subtitle">Password</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={{ gap: 15 }}>
          <PrimaryButton
            title="Sign in"
            onPress={() => handleLogin}
            style={styles.loginBtn}
          />

          <ThemedText type="default" style={{ textAlign: "center" }}>
            Don’t have an account?{" "}
            <Link href="auth/register " style={styles.linkText}>
              Create
            </Link>
          </ThemedText>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/images/splash-icon.png")}
          style={styles.logo}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingTop: 60,
    paddingBottom: 50,
    gap: 40,
  },
  headerTexts: {
    gap: 10,
  },
  form: {
    flex: 1,
    gap: 30,
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderColor: "#ddd",
    borderWidth: 1,
    fontSize: 18,
    fontWeight: 600,
    color: "#333",
  },
  loginBtn: {
    marginTop: 20,
  },
  linkText: {
    lineHeight: 30,
    fontSize: 16,
    color: "#83E18D",
    textAlign: "center",
  },
  logo: {
    width: 150,
    height: 100,
  },
});

export default LoginPage;
