import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';
import { openai } from './api.js';
import { GrammarBot } from 'grammar-bot';

const grammarBot = new GrammarBot();

function FineGrammer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello, how can I assist you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
        },
      },
    ]);
  }, []);

  async function handleUserMessage(newMessages) {
    const userMessage = newMessages[0];
    const { text, _id } = userMessage;

    const message = {
      _id,
      text,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'User',
      },
    };

    setMessages((previousMessages) => GiftedChat.append(previousMessages, [message]));

    try {
      const response = await openai.createCompletion({
        model: 'ada:ft-personal-2023-05-20-07-01-16',
        prompt: text,
        max_tokens: 30,
        temperature: 0.2,
      });

      if (response.data && response.data.choices.length > 0) {
        let botResponse = response.data.choices[0].text;
        const grammarResponse = await grammarBot.check(botResponse);

        if (grammarResponse.matches.length > 0) {
          // Correct any grammatical errors
          botResponse = grammarResponse.matches[0].replacements[0].value;
        }

        const botMessage = {
          _id: _id + 1,
          text: botResponse,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Chatbot',
          },
        };

        setMessages((previousMessages) => GiftedChat.append(previousMessages, [botMessage]));
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => handleUserMessage(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
}

export default FineGrammer;
