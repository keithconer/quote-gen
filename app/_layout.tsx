import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import QuoteGenerator from "../components/QuoteGenerator";
import { COLORS } from "../constants/Styles";

const Layout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <QuoteGenerator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default Layout;
