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
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate("Welcome")}
    >
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
            <Text style={styles.instructionText}>
              Appuyez n'importe où pour continuer
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
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
    alignItems: "center",
    width: "100%",
    paddingBottom: Spacing * 4,
  },
  welcomeText: {
    fontSize: FontSize.xxLarge,
    color: Colors.onPrimary,
    fontFamily: Font["poppins-bold"],
    textAlign: "center",
  },
  instructionText: {
    fontSize: FontSize.medium,
    color: Colors.onPrimary,
    fontFamily: Font["poppins-regular"],
    textAlign: "center",
  },
});

export default InitialScreen;
