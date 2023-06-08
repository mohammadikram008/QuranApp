import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

const API_ENDPOINT = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
//const API_ENDPOINT = 'https://api.openai.com/v1/models/gpt-3.5-turbo/completions';

const MuslimImamChatBot = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Introduce the Imam and greet the user when the chat bot loads
    const imamGreeting = createBotMessage(
      'As-salamu alaykum! I am here to assist you with any questions you have about Islam, the Quran, or Sunnah. Please feel free to ask.',
    );
    setMessages((prevMessages) => GiftedChat.append(prevMessages, [imamGreeting]));
  }, []);

  const handleSend = async (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    const userMessage = newMessages[0].text;

    try {
      // Send the user's message to the ChatGPT API for generating a response
      const response = await axios.post(API_ENDPOINT, {
        prompt: `User: ${userMessage}\nImam:`,
        //role: "system" , content: "You are an Islamic scholar.",
        max_tokens: 200,
        temperature: 0.2,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
      });

      const botResponse = response.data.choices[0].text.trim();
      const botMessage = createBotMessage(botResponse);
      setMessages((prevMessages) => GiftedChat.append(prevMessages, [botMessage]));
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const createBotMessage = (text) => ({
    _id: Math.random().toString(36).substring(7),
    text,
    createdAt: new Date(),
    user: { _id: 2, name: 'Imam', avatar: 'https://your.imam.avatar.url' },
  });

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{ _id: 1 }}
    />
  );
};

export default MuslimImamChatBot;
