import React from "react";
import * as Clipboard from "expo-clipboard";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import clipboard icon
import { COLORS, SIZES } from "../constants/Styles";

type ClipboardHandlerProps = {
  text: string;
};

const ClipboardHandler: React.FC<ClipboardHandlerProps> = ({ text }) => {
  const copyToClipboard = () => {
    Clipboard.setStringAsync(text);
  };

  return (
    <TouchableOpacity style={styles.iconButton} onPress={copyToClipboard}>
      <FontAwesome name="clipboard" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.padding / 2,
    borderRadius: SIZES.borderRadius,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ClipboardHandler;
