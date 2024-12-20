import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require("../assets/images/welcome-img.png")}
      >
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>Discover Your Dream Job Here</Text>
          <Text style={styles.descriptionText}>
            Explore all the existing job roles based on your interest and study
            major
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigate("Login")} // Naviguer vers LoginScreen
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("Register")} // Naviguer vers RegisterScreen
              style={[styles.button, styles.registerButton]}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond noir avec transparence
    width: "100%",
    height: "100%",
    paddingHorizontal: Spacing * 4,
    paddingTop: Spacing * 4,
  },
  welcomeText: {
    fontSize: FontSize.xxLarge,
    color: Colors.onPrimary,
    fontFamily: Font["poppins-bold"],
    textAlign: "center",
    marginBottom: Spacing * 2,
  },
  descriptionText: {
    fontSize: FontSize.medium,
    color: Colors.onPrimary,
    fontFamily: Font["poppins-regular"],
    textAlign: "center",
    marginBottom: Spacing * 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: Spacing * 2,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 2,
    width: "45%",
    borderRadius: Spacing,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: Spacing,
    },
    shadowOpacity: 0.3,
    shadowRadius: Spacing,
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: Colors.secondary,
  },
  buttonText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.onPrimary,
    fontSize: FontSize.large,
    textAlign: "center",
  },
});

export default WelcomeScreen;
