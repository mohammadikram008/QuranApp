import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler';

import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import SelectDropdown from 'react-native-select-dropdown'
const Testing = () => {
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
      <Toast config={toastConfig} />
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
       
        {(showusername==true || showsect==true ) ?(
              <>
                    <TextInput
                    style={styles.input}
                    value={textInput}
                    onChangeText={text=>setTextInput(text)}
                    placeholder='Answer the Question'
                    />
              </>
              
            )
            :
            ""
            
            
            }
        
        {showgender==true?(
              <>
               

                <SelectDropdown
                  data={genderlist}
                  onSelect={(selectedItem, index) => {
                    setTextInput(selectedItem);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                  }}
/>
              </>
              
            )
            :
            ""
            
            
            }
      
        
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
export default Testing