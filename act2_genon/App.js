import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim() === '') {
      return;
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), value: enteredGoalText },
    ]);
    setEnteredGoalText('');
  }

  return (
    <ImageBackground
      source={require('./act2_bg4.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>2023 Goals</Text>
          <Text style={styles.subHeader}>Your Milestone Tracker</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your Course Goal"
            style={styles.inputText}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <Button title="Add Goal" color="#5D4534" onPress={addGoalHandler} />
        </View>

        <FlatList
          keyExtractor={(item) => item.id}
          data={courseGoals}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setCourseGoals((prevGoals) =>
                  prevGoals.filter((goal) => goal.id !== item.id)
                );
              }}
            >
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{item.value}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#282321',
  },
  inputText: {
    borderWidth: 2,
    color: 'black',
    width: '70%',
    marginRight: 12,
    padding: 13,
    borderColor: '#61564A',
    borderRadius: 8,
    backgroundColor: '#B3AEA4',
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
  headerContainer: {
    backgroundColor: '#B3AEA4',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
    marginRight: 60,
    marginTop: 10,
    marginBottom: 1,
    borderWidth: 2,
    borderRadius: 45,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#302821',
    paddingBottom: 2,
  },
  subHeader: {
    margin: 5,
    fontSize: 15,
    color: '#302821',
  },
  goalItem: {
    padding: 15,
    backgroundColor: '#B3AEA4',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  goalText: {
    fontSize: 16,
  },
});

