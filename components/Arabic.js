import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Arabic = ({navigation}) => {
  return (
    <View style={styles.container}>
    {/* <View>
        <Text style={{fontSize:24,fontWeight:'bold', color: '#333333'}}>Quran App</Text>
        </View> */}
     <View style={styles.buttonContainer}>
       <TouchableOpacity
         mode="contained"
         style={styles.button}
         labelStyle={styles.buttonText}
         onPress={() => navigation.navigate('SurahBaqrah')}
       >
         <FontAwesome5 name="book" size={20} color="#ffffff" />
       <Text style={styles.buttonText}> SurahBaqrah </Text>  
       </TouchableOpacity>

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
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 100,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  advertisingContainer: {
    width: '80%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 50,
  },
  advertisingText: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Arabic