import { useState, useId } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = function (enteredValue) {
    setGoalsList((prev) => [
      ...prev,
      { text: enteredValue, id: (Math.random() * 5).toFixed(3) },
    ]);
    setIsModalVisible(false);
  };

  const removeGoalhandler = function (id) {
    setGoalsList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const addModalHandler = function () {
    setIsModalVisible(true);
  };

  const removeModalHandler = function () {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <GoalInput
        onAdd={addGoalHandler}
        isVisible={isModalVisible}
        onCloseModal={removeModalHandler}
      />
      <View style={styles.newGoalbtn}>
        <Button
          color="#00796b"
          title="Add new goal"
          onPress={addModalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={({ item }) => (
            <GoalItem
              text={item.text}
              id={item.id}
              onRemove={removeGoalhandler.bind(this, item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 20,
    flex: 1,
    backgroundColor: "#48c85abb",
  },

  goalsContainer: {
    gap: 15,
    flex: 6,
  },

  newGoalbtn: {
    marginTop: 20,
    marginBottom: 20,
  },
});

// const textStyle = StyleSheet.compose(styles.textHey, intro.text);
