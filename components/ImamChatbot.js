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

  const handleSend = (newMessages = []) => {

    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    const userMessage = newMessages[0].text;
    console.log("userMessage",userMessage)
     axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        "messages": [
          {"role": "system", "content": "Hello"},
          {"role": "user", "content": `${userMessage}`},
          {"role": "assistant", "content": "I'm fine, thank you."}
        ],
        model: 'gpt-3.5-turbo',
        max_tokens: 200,
        temperature:0
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
      }
      ).then((res)=>{
        const botResponse = res.data;
        const chatGptResponse = botResponse.choices[0].message;
        const botMessage = createBotMessage(chatGptResponse.content);
          setMessages((prevMessages) => GiftedChat.append(prevMessages, [botMessage]));
        // Use the generated response in your app
        console.log("chatGptResponse",chatGptResponse.content);
      }).catch((err)=>{
        console.log("ERROR",err);
      })


    // try {
    //   // Send the user's message to the ChatGPT API for generating a response
    //   const response = await axios.post(API_ENDPOINT, {
    //     prompt: `User: ${userMessage}\nImam:`,
    //     //role: "system" , content: "You are an Islamic scholar.",
    //     max_tokens: 200,
    //     temperature: 0.2,
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer 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',
    //     },
    //   });

    //   const botResponse = response.data.choices[0].text.trim();
    //   console.log('botResponse:', botResponse);
    //   const botMessage = createBotMessage(botResponse);
    //   setMessages((prevMessages) => GiftedChat.append(prevMessages, [botMessage]));
    // } catch (error) {
    //   console.log('Error:', error);
    // }
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
