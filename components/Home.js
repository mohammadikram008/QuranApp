import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
    // <View style={{backgroundColor:"black"}}>
    //     <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    //     <Text style={{fontSize:24,fontWeight:'bold', color: '#333333'}}>Quran App</Text>
    //     </View>
    //     <View style={{padding:20,marginTop:5}} >
    //         <Button title="Read Quran" onPress={() => navigation.navigate('AllSurah')} />
    //     </View>
    //     <View style={{padding:20,marginTop:5}} >
    //         <Button title="Question Screen" onPress={() => navigation.navigate('QuestionScreen')} />
    //     </View>
    //     <View style={{padding:20,marginTop:5}} >
    //         <Button title="Imam Chat Bot" onPress={() => navigation.navigate('ImamChatbot')} />
    //     </View>
    //     <View style={{padding:20,marginTop:5}} >
    //         <Button title="Fine Tuned Bot" onPress={() => navigation.navigate('FineTuned')} />
    //     </View>
    //     <View style={{padding:20,marginTop:5}} >
    //         <Button title="Bot" onPress={() => navigation.navigate('Second')} />
    //     </View>

    //     <View style={{padding:20,marginTop:5}} >
    //         <Button title="Chat Now" onPress={() =>checkdata() } />
    //     </View>
        
    //     <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:5}}>
    //       <Image source = {require('../ad.png')} style={{width:300,height:200}} />
    //     </View>
        
      
    // </View>
    
    <View style={styles.container}>
     {/* <View>
         <Text style={{fontSize:24,fontWeight:'bold', color: '#333333'}}>Quran App</Text>
         </View> */}
      <View style={styles.buttonContainer}>
      
        <TouchableOpacity 
          mode="contained"
          // icon={() => }
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => navigation.navigate('AllSurah')}
        >
          {/* <FontAwesome5 name="book" size={20} color="#ffffff" /> */}
         <View style={styles.imgview} >

          <Image
        source={require('../Assets/book.png')}
        style={styles.quranImage}
        />
           <Text style={styles.buttonText}>Read  Quran </Text>
        </View>
      
        </TouchableOpacity >
        {/* <TouchableOpacity
          mode="contained"
          icon={() => <FontAwesome5 name="question" size={20} color="#ffffff" />}
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => navigation.navigate('QuestionScreen')}
        >
         <Text style={styles.buttonText}>Question Screen  </Text> 
        </TouchableOpacity> */}
        <TouchableOpacity
          mode="contained"
          // icon={() =>}
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => navigation.navigate('ImamChatbot')}
        >
           <View style={styles.imgview} >

          <Image
        source={require('../Assets/chat.png')}
        style={styles.quranImage}
        />
          {/* <FontAwesome5 name="sms" size={20} color="#ffffff" /> */}
        <Text style={styles.buttonText}> Imam ChatBot</Text>  
        </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          mode="contained"
          icon={() => <Icon name="bell" size={20} color="#ffffff" />}
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => navigation.navigate('FineTuned')}
        >
         <Text style={styles.buttonText}> Fine Tuned Bot </Text>  
        </TouchableOpacity>
        <TouchableOpacity
          mode="contained"
          icon={() => <Icon name="cog" size={20} color="#ffffff" />}
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() => navigation.navigate('Second')}
        >
        <Text style={styles.buttonText}>Bot </Text> 
        </TouchableOpacity>
        <TouchableOpacity
          mode="contained"
          icon={() => <Icon name="info" size={20} color="#ffffff" />}
          style={styles.button}
          labelStyle={styles.buttonText}
          onPress={() =>checkdata() }
        >
         <Text style={styles.buttonText}> Chat Now </Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.advertisingContainer}>
        <Text style={styles.advertisingText}>Advertisement</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop:50,
    backgroundColor: '#ffffff',
  },
  quranImage: {
    width: '10%',
    height: '140%',
    
  },
  imgview:{
    flexDirection: 'row',
     alignItems: 'center',
     flexWrap: 'wrap',
    
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '30%',
    marginTop:"10%"
  },
  button: {
    width: '80%',
    height: 100,
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#708090',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:"8%"
  },
  advertisingContainer: {
    width: '80%',
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 50,
   
  },
  advertisingText: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home

// const styles = StyleSheet.create({
 
// })