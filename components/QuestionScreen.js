import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  'What is the significance of Salah (prayer) in Islam?',
  'What are the Five Pillars of Islam?',
  'What is the importance of fasting during Ramadan?'
];

const QuestionScreen = ({ navigation }) => {
  const handleQuestionPress = (question) => {
    // navigation.navigate('AnswerScreen', { question });
    navigation.navigate('ParamImamChatbot', { question });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Islamic Questions</Text>
        {questions.map((question, index) => (
          <TouchableOpacity
            key={index}
            style={styles.questionButton}
            onPress={() => handleQuestionPress(question)}
          >
            <Text style={styles.questionText}>{question}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'#333'
  },
  questionButton: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  questionText: {
    fontSize: 18,
    color:'#555',
  },
});

export default QuestionScreen;
