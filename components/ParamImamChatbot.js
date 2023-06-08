import React, { useState, useEffect } from 'react';
import { GiftedChat,Send } from 'react-native-gifted-chat';
import axios from 'axios';
import { Text } from 'react-native';
const API_KEY = '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'; // Replace with your OpenAI API key
const API_URL = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

const ParamImamChatbot = ({ navigation, route }) => {
  const { question } = route.params;
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Assalamu Alaikum, How can I assist you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Imam',
        },
      },
    ]);
  }, []);
  useEffect(() => {
    if (route.params && route.params.question) {
      handleUserMessage([{ text: route.params.question, _id: 0 }]);
    }
  }, [route.params]);

  const handleUserMessage = async (newMessages) => {
    const userMessage = newMessages[0];
    const { text, _id } = userMessage;

    const message = {
      _id:new Date().getTime(),
      text,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'User',
      },
    };

    setMessages((previousMessages) => GiftedChat.append(previousMessages, [message]));

    try {
      const response = await axios.post(
        API_URL,
        {
          prompt: `You are an Imam. ${text}`,
          max_tokens: 50,
          temperature: 0.2,
          top_p: 0.2,
          frequency_penalty: 0.2,
          presence_penalty: 1.0,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        }
      );

      if (response.data && response.data.choices && response.data.choices.length > 0) {
       
        const botMessage = {
          _id: new Date().getTime(),
          text: response.data.choices[0].text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Imam',
          },
        };
         
        setMessages((previousMessages) => GiftedChat.append(previousMessages, [botMessage]));
        
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => handleUserMessage(newMessages)}
      user={{
        _id: 1,
      }}
     
    />
  );
};

export default ParamImamChatbot;