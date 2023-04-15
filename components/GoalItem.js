import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = function ({ text, onRemove }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onRemove}
        android_ripple={{ color: "#fec8c9" }}
        style={({ pressed }) => pressed && styles.goalPressed}
      >
        {text !== "" ? <Text style={styles.goalText}>{text}</Text> : null}
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#00897b",
    textTransform: "capitalize",
    marginBottom: 20,
    borderRadius: 15,
  },

  goalText: {
    padding: 15,
    color: "white",
    textTransform: "capitalize",
    fontSize: 20,
  },
  goalPressed: {
    color: "#a3daff",
  },
});
