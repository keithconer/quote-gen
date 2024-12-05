import React from "react";
import * as Speech from "expo-speech";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icon
import { COLORS, SIZES } from "../constants/Styles";

type TextToSpeechProps = {
  text: string;
};

const TextToSpeech: React.FC<TextToSpeechProps> = ({ text }) => {
  const speak = () => {
    Speech.speak(text);
  };

  return (
    <TouchableOpacity style={styles.iconButton} onPress={speak}>
      <Ionicons name="volume-high-outline" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding / 2,
    borderRadius: SIZES.borderRadius,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TextToSpeech;
