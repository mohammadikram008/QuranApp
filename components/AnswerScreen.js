import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const AnswerScreen = ({ navigation, route }) => {
  const { question } = route.params;
  const [answer, setAnswer] = useState('');

  const handleAnswerSubmit = () => {
    // Perform any logic with the submitted answer
    console.log('Submitted Answer:', answer);

    // Reset the input field and navigate back to the question screen
    setAnswer('');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Question: {question}</Text>
      <Text style={styles.subtitle}>Answer:</Text>
      <TextInput
        style={styles.input}
        multiline
        value={answer}
        onChangeText={setAnswer}
      />
      <Button title="Submit" onPress={handleAnswerSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default AnswerScreen;