import { StyleSheet, Text, View,Button,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = ({ navigation }) => {
  const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem("Username");
        // alert(value);
        return value;
      
    } catch(e) {
      // error reading value
      console.log(e);
    }
  }
  const checkdata=()=>{
    let name=getData();
    if(name){
      // navigation.navigate('Chatbot');
      navigation.navigate('ConfirmProfile');
    }
    else{
      navigation.navigate('ProfileChatbot')
    }
  }
  return (
    <View>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:24,fontWeight:'bold'}}>Quran App</Text>
        </View>

        <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
            <Button title="Read Quran" onPress={() => navigation.navigate('AllSurah')} />
        </View>

        <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
            <Button title="Chat Now" onPress={() =>checkdata() } />
        </View>
        
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
          <Image source = {require('../ad.png')} style={{width:200,height:200}} />
        </View>
        
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
 
})