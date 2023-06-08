import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

const IslamicChatbot = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Assalamu Alaikum! I am your Islamic Chatbot. How may I assist you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
          avatar: 'https://i.imgur.com/7k12EPD.png',
        },
      },
    ]);
  }, []);

  const onSend = async (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
    const messageText = newMessages[0].text;
    const isIslamicQuestion = checkIfIslamicQuestion(messageText);
    if (!isIslamicQuestion) {
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [
          {
            _id: Math.random().toString(),
            text: "I cannot answer such a question.",
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chatbot',
              avatar: 'https://i.imgur.com/7k12EPD.png',
            },
          },
        ])
      );
      return;
    }
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: `What is the answer to the following Islamic question? ${messageText}`,
        max_tokens: 50,
        n: 1,
        stop: '\n',
        temperature: 0.5,
        model: 'text-davinci-002',
        prompt_suffix: '\nAnswer:',
      },
      {
        headers: {
          Authorization: 'Bearer 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',
          'Content-Type': 'application/json',
        },
      }
    );
    const botMessage = response.data.choices[0].text.trim();
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, [
        {
          _id: Math.random().toString(),
          text: botMessage,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Chatbot',
            avatar: 'https://i.imgur.com/7k12EPD.png',
          },
        },
      ])
    );
  };

  const checkIfIslamicQuestion = (question) => {
    // Check if the question contains any of these keywords
    const islamicKeywords = ['islam', 'muslim', 'quran', 'prophet', 'allah', 'hajj'];
    for (let keyword of islamicKeywords) {
      if (question.toLowerCase().includes(keyword)) {
        return true;
      }
    }
    return false;
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default IslamicChatbot;