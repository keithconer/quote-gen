import React from "react";
import * as Sharing from "expo-sharing";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Social media share icon
import { COLORS, SIZES } from "../constants/Styles";

type SocialShareProps = {
  text: string;
};

const SocialShare: React.FC<SocialShareProps> = ({ text }) => {
  const share = async () => {
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(text);
    }
  };

  return (
    <TouchableOpacity style={styles.iconButton} onPress={share}>
      <FontAwesome name="share-alt" size={30} color="white" />
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

export default SocialShare;
