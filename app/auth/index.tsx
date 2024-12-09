import { ThemedText } from "@/components/ThemedText";
import { Image, StyleSheet, View } from "react-native";
import { useRouter, Link } from "expo-router";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ContinueWithGoogleButton from "@/components/ui/ContinueWithGoogleButton";
import ContinueWithFacebookButton from "@/components/ui/ContinueWithFaceBookButton copy";

const Auth = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <Image source={require("../../assets/images/splash-icon.png")} />
        <ThemedText type="default" lightColor="white">
          Recruiting and Consulting
        </ThemedText>
      </View>

      <View style={styles.flex2}>
        <PrimaryButton
          title="Sign up"
          onPress={() => router.push("/auth/register")}
        />

        <ContinueWithGoogleButton onPress={() => alert("google")} />
        <ContinueWithFacebookButton onPress={() => alert("facebook")} />
        <Link href="auth/login" style={styles.linkText}>
          SIGN IN
        </Link>
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
  flex1: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  flex2: {
    flex: 3,
    gap: 40,
    paddingHorizontal: 15,
  },
  logo: {
    // width: 50,
    // height: 50,
  },
  linkText: {
    lineHeight: 30,
    fontSize: 16,
    color: "#83E18D",
    textAlign: "center",
    fontWeight: 600,
  },
});
