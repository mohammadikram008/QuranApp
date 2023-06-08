import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  let response='';
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
    const messageText = newMessages[0].text.toLowerCase();
    const greetingKeywords = [
      "assalamualaikum",
      'hello',
      'hi',
      'hey',
      'as-salamu alaykum',
      'assalam o alaikum',
      'salam',
      'hola',
      'bonjour',
      'merhaba',
      'ciao',
      'konichiwa',
      'namaste',
      'salaam',
      'shalom',
      'marhaba',
      'ahlan',
      'sannu',
      'sabaidee',
      'xin chao',
      'salut',
      'sveiki',
      'labas',
      'god dag',
      'hyvää päivää',
      'guten tag',
      'hallo',
      'helo',
      'privet',
      'sawubona',
      'szia',
      'zdravstvuyte',
      'dobrý den',
      'dobrý deň',
      'përshëndetje',
      'sawatdee',
      'zdravo',
      'dzień dobry',
      'goedendag',
      'goeden dag',
      'bonan tagon',
      'dobrý den',
      'dobar dan',
      'tjena',
      'chào',
      'xin chào',
      'merhabalar',
      'hey there',
      'hi there',
      'yo',
      'greetings',
      'sup',
      'howdy'
    ];

    // check if input contains any of the greeting keywords
    if (greetingKeywords.some((keyword) => messageText.includes(keyword))) {
      if (messageText.includes('as-salamu alaykum') || messageText.includes('salam') || messageText.includes('assalam o alaikum') || messageText.includes('assalamualaikum') ) {
        response = 'Wa alaikum salam!';
        setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [
          {
            _id: Math.random().toString(),
            text: response,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chatbot',
              avatar: 'https://i.imgur.com/7k12EPD.png',
            },
          },
        ])
      ); 
      } else {
        response = 'Hi there!';
        setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [
          {
            _id: Math.random().toString(),
            text: response,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chatbot',
              avatar: 'https://i.imgur.com/7k12EPD.png',
            },
          },
        ])
      ); 
      }
    } 
    else{
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-002/completions',
        {
          prompt: messageText,
          max_tokens: 50,
          temperature:0.2,
          n: 1,
          // stop: '\n',
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
    }
   
    
    const isIslamicQuestion = checkIfIslamicQuestion(messageText);
    if (!isIslamicQuestion) {
      const islamicQuestions = [
        'What is the significance of the Hajj pilgrimage?',
        'What is the difference between Sunni and Shia Islam?',
        'What is the meaning of the phrase "Allahu Akbar"?',
        'What is the significance of the month of Ramadan?',
        'What is the role of women in Islam?',
        'What is the purpose of zakat?',
        'What is the significance of the Kaaba?',
        'What is the meaning of the word "Islam"?',
        'What is the Islamic view on homosexuality?',
        'What is the role of prayer in Islam?',
        'What is the importance of the Quran in Islam?',
        'What is the concept of sharia law in Islam?',
        'What is the significance of the night of Laylat al-Qadr?',
        'What is the Islamic view on the afterlife?',
        'What is the significance of the five pillars of Islam?',
        'What is the role of the Prophet Muhammad in Islam?',
        'What is the Islamic view on war and violence?',
        'What is the Islamic view on social justice?',
        'What is the significance of the black stone in Islam?',
        'What is the Islamic view on free will and predestination?',
      ];
      const randomQuestion = islamicQuestions[Math.floor(Math.random() * islamicQuestions.length)];
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [
          {
            _id: Math.random().toString(),
            text: `I cannot answer such a question.You should ask me questions related to Islam. Example of Islamic questions are: ${randomQuestion}`,
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
  };

  const checkIfIslamicQuestion = (question) => {
    // Check if the question contains any of these keywords
    const islamicKeywords = [
      "islam",
      "Islam",
      'salam',
      'as-salamu alaykum',
      'assalam o alaikum',
      'Allah',
      'Prophet',
      'Quran',
      'Hadith',
      'Hajj',
      'Umrah',
      'Zakat',
      'Sadaqah',
      'Ramadan',
      'Eid',
      'Salah',
      'Fasting',
      'Sunnah',
      'Shariah',
      'Islamic law',
      'Islamic finance',
      'Islamic banking',
      'Islamic economics',
      'Islamic philosophy',
      'Islamic art',
      'Islamic culture',
      'Islamic history',
      'Islamic theology',
      'Islamic spirituality',
      'Islamic ethics',
      'Islamic education',
      'Islamic science',
      'Islamic architecture',
      'Islamic calligraphy',
      'Islamic literature',
      'Islamic mysticism',
      'Islamic sociology',
      'Islamic psychology',
      'Islamic medicine',
      'Islamic politics',
      'Islamic feminism',
      'Islamic jurisprudence',
      'Islamic human rights',
      'Islamic environmentalism',
      'Islamic charity',
      'Islamic media',
      'Islamic terrorism',
      'Islamic extremism',
      'Islamic fundamentalism',
      'Islamic revivalism',
      'Islamic modernism',
      'Islamic reformism',
      'Islamic liberalism',
      'Islamic democracy',
      'Islamic marriage',
      'Islamic family',
      'Islamic parenting',
      'Islamic education',
      'Islamic spirituality',
      'Islamic morality',
      'Islamic values',
      'Islamic character',
      'Islamic lifestyle',
      'Islamic etiquette',
      'Islamic jurisprudence',
      'Islamic ethics',
      'Islamic leadership',
      'Islamic business',
      'Islamic finance',
      'Islamic insurance',
      'Islamic investment',
      'Islamic accounting',
      'Islamic marketing',
      'Islamic banking',
      'Islamic contracts',
      'Islamic arbitration',
      'Islamic philanthropy',
      'Islamic governance',
      'Islamic politics',
      'Islamic law enforcement',
      'Islamic military',
      'Islamic art and architecture',
      'Islamic music',
      'Islamic literature',
      'Islamic science',
      'Islamic medicine',
      'Islamic psychology',
      'Islamic sociology',
      'Islamic education',
      'Islamic history',
      'Islamic civilization',
    ];
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

export default Chatbot;