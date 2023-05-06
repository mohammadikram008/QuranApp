import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler';

import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import SelectDropdown from 'react-native-select-dropdown'
import AsyncStorage from '@react-native-async-storage/async-storage';
const ConfirmProfile = ({ route, navigation }) => {
    const [currentname,setCurrentName]=useState("");
    useEffect(()=>{
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem("Username");
                // alert(value);
                setCurrentName(value);
                // return value;
              
            } catch(e) {
              // error reading value
              console.log(e);
            }
          }
        getData();
    },[])
  const genderlist = ["Male", "Female"]
    const toastConfig = {
        /*
          Overwrite 'success' type,
          by modifying the existing `BaseToast` component
        */
        success: (props) => (
          <BaseToast
            {...props}
            style={{ borderLeftColor: 'pink' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
              fontSize: 15,
              fontWeight: '400'
            }}
          />
        ),
        /*
          Overwrite 'error' type,
          by modifying the existing `ErrorToast` component
        */
        error: (props) => (
          <ErrorToast
            {...props}
            text1Style={{
              fontSize: 17
            }}
            text2Style={{
              fontSize: 15
            }}
          />
        ),
        /*
          Or create a completely new type - `tomatoToast`,
          building the layout from scratch.
      
          I can consume any custom `props` I want.
          They will be passed when calling the `show` method (see below)
        */
        tomatoToast: ({ text1, props }) => (
          <View style={{ height: 30, width: '100%', backgroundColor: 'tomato'}}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
          </View>
        )
      };

    const [textInput,setTextInput]=useState('');
    
    
    const handleSend=()=>{
      if(textInput){
        if(textInput=="Yes"){
            navigation.navigate('Chatbot');
        }
        else if(textInput=="No"){
            navigation.navigate('ProfileChatbot')
        }
        else{
            Toast.show({
              type: 'error',
              text1: 'Error',
              text2: 'Provide Yes or No Only'
            });
        }
      }
      else{
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Answer Can Not Be Empty'
        });
      }
       
        
    }
  return (
    <View style={styles.container}>
      <Toast config={toastConfig} />
        <View style={{marginBottom:"20%"}}>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>Bot:</Text>
              <Text>Am I Talking With {currentname}?(Yes or No)</Text>
        </View>
       
        
        
        <TextInput
                    style={styles.input}
                    value={textInput}
                    onChangeText={text=>setTextInput(text)}
                    placeholder='Answer the Question'
                    />
        
        <TouchableOpacity
        style={styles.button}
        onPress={handleSend}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

      
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fffcc9',
      alignItems:'center',
      justifyContent:'center',
      paddingTop:'20%'
    },
    body: {
      backgroundColor: '#fffcc9',
      margin: 10,
      width:'102%'
    },
    bot:{
        fontSize:16,
        color:'white'
    },
    input:{
        borderWidth:1,
        borderColor:'black',
        width:'90%',
        height:60,
        marginBottom:10,
        borderRadius:10
    },
    button:{
        backgroundColor:'yellow',
        width:'90%',
        height:60,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    buttonText:{
        fontSize:25,
        fontWeight:'bold',
        color:'blue'
    },
    text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
  });
export default ConfirmProfile