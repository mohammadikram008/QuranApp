import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
const ProfileChatbot = () => {

    const [textInput,setTextInput]=useState('');
    const [username,setUsername]=useState('');
    const [showusername,setShowUsername]=useState(true);
    const [sect,setSect]=useState('');
    const [showsect,setShowSect]=useState(false);
    const [gender,setGender]=useState('');
    const [showgender,setShowGender]=useState(false);
    const [showAll,setShowAll]=useState(false);
    const [count,setCount]=useState(0);
    const handleSend=()=>{
      if(textInput){
        if(count==0){
          setUsername(textInput);
          setShowUsername(false);
          setShowSect(true);
          setTextInput('');
          setCount(count+1);
          // alert(count);
        }
        else if(count==1){
          setSect(textInput);
          setShowSect(false);
          setShowGender(true);
          setTextInput('');
          setCount(count+1);
          // alert(count);
        }
        else if(count==2){
          setGender(textInput);
          setShowUsername(false);
          setShowSect(false);
          setShowGender(false);
          setShowAll(true);
          setTextInput('');
          setCount(count+1);
          // alert(count);
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
      <Toast />
        <View style={{marginBottom:"20%"}}>
            {showusername==true?(
              <>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>Bot:</Text>
              <Text>What is your Name?</Text>
              </>
              
            )
            :
            ""
            
            
            }
            
            
            {showsect==true?(
              <>
              <View>
              <Text style={{fontSize:18,fontWeight:'bold'}}>Name: {username}</Text>
              </View>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>Bot:</Text>
              <Text>What is your Sect?(Shia,Sunni or any other)</Text>
              </>
              
            )
            :
            ""
            
            
            }
             
            {showgender==true?(
              <>
              <View>
                <Text style={{fontSize:18,fontWeight:'bold'}}>Sect: {sect}</Text>
              </View>
              <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>Bot:</Text>
              <Text>What is your Gender?(Male,Female)</Text>
              </>
              
            )
            :
            ""
            
            
            }

            {showAll==true?(
              <>
                <View>
                  <Text style={{fontSize:18,fontWeight:'bold'}}>Name: {username}</Text>
                </View>
                <View>
                  <Text style={{fontSize:18,fontWeight:'bold'}}>Sect: {sect}</Text>
                </View>
                <View>
                  <Text style={{fontSize:18,fontWeight:'bold'}}>Gender: {gender}</Text>
                </View>
              </>
              
            )
            :
            ""
            
            
            }


            
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
    }
  });
export default ProfileChatbot