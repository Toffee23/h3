import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { Link } from "expo-router";
import PrimaryButton from "@/components/ui/PrimaryButton";

const SignUpPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerTexts}>
        <ThemedText type="title">Welcome</ThemedText>
        <ThemedText type="subtitle">Lets get to know you</ThemedText>
      </View>

      <View style={styles.form}>
        <View>
          <ThemedText type="subtitle">Firstname</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter your firstname"
            placeholderTextColor="#888"
            keyboardType="default"
            value={firstname}
            onChangeText={setFirstname}
          />
        </View>
        <View>
          <ThemedText type="subtitle">Lastname</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter your lastname"
            placeholderTextColor="#888"
            keyboardType="default"
            value={lastname}
            onChangeText={setLastname}
          />
        </View>
        <View>
          <ThemedText type="subtitle">Username</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#888"
            keyboardType="default"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={{ gap: 15 }}>
          <PrimaryButton
            title="Continue"
            onPress={() => alert(firstname)}
            style={styles.loginBtn}
          />

          <ThemedText type="default" style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link href="auth/login" style={styles.linkText}>
              Sign in
            </Link>
          </ThemedText>
        </View>
      </View>

      {/* <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/images/splash-icon.png")}
          style={styles.logo}
        />
      </View> */}
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
    gap: 5,
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

export default SignUpPage;
