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
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Initial">;

const InitialScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/profil.jpg")} // Remplacez par le chemin de votre image
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.topHalf}>
            <Text style={styles.welcomeText}>
              Bienvenue sur notre application
            </Text>
          </View>
          <View style={styles.bottomHalf}>
            <TouchableOpacity
              onPress={() => navigate("Welcome")} // Naviguer vers la page de bienvenue
              style={styles.button}
            >
              <Text style={styles.buttonText}>Suivant</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond noir avec transparence
    paddingVertical: Spacing * 4,
  },
  topHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomHalf: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    paddingRight: Spacing * 4,
    paddingBottom: Spacing * 4,
  },
  welcomeText: {
    fontSize: FontSize.xxLarge,
    color: Colors.onPrimary,
    fontFamily: Font["poppins-bold"],
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Blanc avec transparence
    paddingVertical: Spacing * 1.5,
    paddingHorizontal: Spacing * 4,
    borderRadius: Spacing,
  },
  buttonText: {
    fontFamily: Font["poppins-bold"],
    color: Colors.primary,
    fontSize: FontSize.large,
    textAlign: "center",
  },
});

export default InitialScreen;
