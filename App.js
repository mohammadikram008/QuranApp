import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import AllSurah from './components/AllSurah';

import English from './components/English';
import Other from './components/Other';
import ArabicMain from './components/ArabicMain';
import GetUserInfo from './components/GetUserInfo';
import Chatbot from './components/Chatbot';
import ProfileChatbot from './components/ProfileChatbot';
import Testing from './components/Testing';
import ConfirmProfile from './components/ConfirmProfile';
import SurahFateha from './components/surahs/Fateha/SurahFateha';
import Second from './components/Second';
import SurahBaqrah from './components/surahs/Baqrah/SurahBaqrah';


const Stack = createNativeStackNavigator();
const App = () => {
    

  return (
    <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
         <Stack.Screen name="AllSurah" component={AllSurah} options={{headerShown: false}} />
         <Stack.Screen name="English" component={English}  />
         <Stack.Screen name="Other" component={Other}  />
         <Stack.Screen name="Second" component={Second}  />
         <Stack.Screen name="GetUserInfo" component={GetUserInfo}  />
         <Stack.Screen name="Testing" component={Testing}  />
         {/*Screen thats get user information before moving to chatbot*/}
         <Stack.Screen name="ProfileChatbot" component={ProfileChatbot}  />
         <Stack.Screen name="ConfirmProfile" component={ConfirmProfile}  />
         <Stack.Screen name="Chatbot" component={Chatbot}  />
         <Stack.Screen name="SurahFateha" component={SurahFateha}  />
         <Stack.Screen name="SurahBaqrah" component={SurahBaqrah}  />
         <Stack.Screen name="ArabicMain" component={ArabicMain} options={{headerShown: false}} />

        </Stack.Navigator>

        
    </NavigationContainer>
    
  )
}

export default App