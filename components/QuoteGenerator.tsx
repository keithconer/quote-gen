import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import icons
import TextToSpeech from "./TextToSpeech";
import ClipboardHandler from "./ClipboardHandler";
import SocialShare from "./SocialShare";
import { COLORS, SIZES } from "../constants/Styles";

// Motivational and calming quotes
const quotes = [
  {
    text: "“You are braver than you believe, stronger than you seem, and smarter than you think.”",
    author: "A.A. Milne",
  },
  { text: "“The only way out is through.”", author: "Robert Frost" },
  {
    text: "“Believe you can and you're halfway there.”",
    author: "Theodore Roosevelt",
  },
  {
    text: "“It’s okay to not be okay, but it’s not okay to stay that way.”",
    author: "Unknown",
  },
  {
    text: "“Start where you are. Use what you have. Do what you can.”",
    author: "Arthur Ashe",
  },
  {
    text: "“Doubt kills more dreams than failure ever will.”",
    author: "Suzy Kassem",
  },
  { text: "“You don’t have to be perfect to be amazing.”", author: "Unknown" },
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState<string>(quotes[0].text);
  const [author, setAuthor] = useState<string>(quotes[0].author);

  // Function to generate a random quote
  const generateRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author);
  };

  return (
    <View style={styles.container}>
      {/* Quote container */}
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{quote}</Text>
        <Text style={styles.authorText}>{author}</Text>
      </View>

      {/* Generate Quote Button with Icon */}
      <TouchableOpacity
        style={styles.generateButton}
        onPress={generateRandomQuote}
      >
        <Text style={styles.generateButtonText}>Generate Quote</Text>
        <Ionicons name="reload" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>

      {/* Action icons for text to speech, copy, and social share */}
      <View style={styles.actionsContainer}>
        <TextToSpeech text={quote} />
        <ClipboardHandler text={quote} />
        <SocialShare text={quote} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.padding * 2, // Added more padding for better spacing on sides
    paddingVertical: SIZES.padding, // Adjusted top/bottom padding
  },
  quoteContainer: {
    backgroundColor: COLORS.quoteBackground, // Softer background for the quote container
    borderRadius: SIZES.borderRadius,
    padding: SIZES.padding * 2, // Increased padding for more spacious quote container
    marginBottom: SIZES.margin * 2, // Added margin to separate from the button
    width: "100%", // Full width for the quote container
    maxWidth: 500, // Max width for large screens
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5, // For Android shadow effect
  },
  quoteText: {
    fontSize: 26, // Larger font size for the quote text
    color: COLORS.textPrimary,
    textAlign: "center",
    fontFamily: "Arial",
    fontStyle: "italic",
    lineHeight: 32, // Increased line height for better readability
    marginBottom: SIZES.margin / 2, // Adjusted margin for better spacing
  },
  authorText: {
    fontSize: 18, // Slightly larger font size for the author text
    color: COLORS.textSecondary,
    textAlign: "center",
    fontFamily: "Arial",
    lineHeight: 24,
    marginTop: SIZES.margin / 2, // Added margin on top for better spacing
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%", // Ensure actions are spaced out evenly
    marginTop: SIZES.margin * 2, // Increased margin from the quote section
  },
  generateButton: {
    backgroundColor: COLORS.primary, // Soothing blue color for the button
    paddingVertical: SIZES.padding, // Adjusted padding for balance
    paddingHorizontal: SIZES.padding * 3, // Increased padding for larger button size
    borderRadius: SIZES.borderRadius,
    marginTop: SIZES.margin, // Adjusted margin for spacing from quote container
    width: "100%", // Full width of container for better balance
    maxWidth: 500, // Max width for larger screens
    alignItems: "center",
    flexDirection: "row", // Align icon and text horizontally
    justifyContent: "center", // Center both icon and text
  },
  generateButtonText: {
    color: "white",
    fontSize: 18, // Adjusted font size for balance with button
    fontFamily: "Arial",
    fontWeight: "bold",
    marginLeft: 10, // Space between icon and text
  },
  icon: {
    marginLeft: 10, // Space between icon and text
  },
});

export default QuoteGenerator;
