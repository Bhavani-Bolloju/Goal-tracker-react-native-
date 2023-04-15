import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import goalImage from "../assets/Images/goal.png";

function GoalInput({ onAdd, isVisible, onCloseModal }) {
  const [text, setText] = useState("");

  const addGoalHandler = function () {
    onAdd(text);
    setText("");
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={goalImage} />
        <TextInput
          style={styles.inputText}
          placeholder="enter your goal..."
          onChangeText={(text) => setText(text)}
          defaultValue={text}
          inputMode="text"
        />
        <View style={styles.buttonsContainer}>
          <Button color="#00796b" title="Cancel" onPress={onCloseModal} />
          <Button color="#00796b" title="Add goal" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#004d40",
    flex: 1,
    marginBottom: 40,
    backgroundColor: "#5c6b",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#00796b",
    width: "80%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 30,
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
