import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';
import { openai } from './api.js'
function FineTuned() {
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
            // model: 'davinci:ft-personal-2023-03-31-01-09-15',
            // davinci:ft-personal-2023-05-19-06-54-39
            model:'ada:ft-personal-2023-05-20-07-01-16',
            // fine_tuned_model: 'ada:ft-personal-2023-05-20-07-01-16'
            prompt: text,
            max_tokens: 30,
            temperature:0.2
          }
          )
          console.log("Response",response)
    //   const response = await axios.post('https://api.openai.com/v1/engines/text-ada-002/completions', {
    //     model:'ada:ft-personal-2023-05-20-07-01-16',
    //     prompt: text,
    //     max_tokens: 100,
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer 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', // Replace with your OpenAI API key
    //     },
    //   });

      if (response.data && response.data.choices.length > 0) {
        const botMessage = {
          _id: _id + 1,
          text: response.data.choices[0].text,
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

export default FineTuned;
