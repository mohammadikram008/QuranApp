import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import AllSurah from './components/AllSurah';
import { ShowSurah } from './components/ShowSurah';
import { SplashScreen } from './components/SplashScreen';
import English from './components/English';
import Arabic from './components/Arabic';
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
import FineTuned from './components/FineTuned';
import QuestionScreen from './components/QuestionScreen';
import AnswerScreen from './components/AnswerScreen';
import ImamChatbot from './components/ImamChatbot';
import ParamImamChatbot from './components/ParamImamChatbot';


const Stack = createNativeStackNavigator();
const App = () => {
    
  // options={{headerShown: false}}

  return (
    <NavigationContainer>
        <Stack.Navigator  initialRouteName='SplashScreen'  >
        <Stack.Screen name="Quran App" component={SplashScreen}  options={{headerShown: false}} />
         <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="AllSurah" component={AllSurah} />
          <Stack.Screen name="ShowSurah" component={ShowSurah} />
         <Stack.Screen name="English" component={English}  />
         <Stack.Screen name="Arbic" component={Arabic}  />
         <Stack.Screen name="Other" component={Other}  />
         <Stack.Screen name="ParamImamChatbot" component={ParamImamChatbot}  />
         <Stack.Screen name="AnswerScreen" component={AnswerScreen}  />
         <Stack.Screen name="QuestionScreen" component={QuestionScreen}  />
         <Stack.Screen name="ImamChatbot" component={ImamChatbot}  />
         <Stack.Screen name="FineTuned" component={FineTuned}  />
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
