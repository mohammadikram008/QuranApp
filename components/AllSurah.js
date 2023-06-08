import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const AllSurah = ({ navigation }) => {
    return (
        <View style={styles.container}>
      
         <View style={styles.buttonContainer}>
         
           <TouchableOpacity 
             mode="contained"
            //  icon={() => <FontAwesome5 name="book" size={20} color="#ffffff" />}
             style={styles.button}
             labelStyle={styles.buttonText}
             onPress={() => navigation.navigate('ArabicMain')}
           >
            <FontAwesome5 name="book" size={20} color="#ffffff" />
              <Text style={styles.buttonText}>Arabic Version</Text>
         
           </TouchableOpacity >
           <TouchableOpacity
             mode="contained"
            //  icon={() => <FontAwesome5 name="question" size={20} color="#ffffff" />}
             style={styles.button}
             labelStyle={styles.buttonText}
             onPress={() => navigation.navigate('English')}
           >
            <FontAwesome5 name="book" size={20} color="#ffffff" />
            <Text style={styles.buttonText}>English Version  </Text> 
           </TouchableOpacity>
           <TouchableOpacity
             mode="contained"
            //  icon={() =><FontAwesome5 name="sms" size={20} color="#ffffff" />}
             style={styles.button}
             labelStyle={styles.buttonText}
             onPress={() => navigation.navigate('Other')}
           >
            <FontAwesome5 name="sms" size={20} color="#ffffff" />
           <Text style={styles.buttonText}> Other Version </Text>  
           </TouchableOpacity>
        
    
          
         </View>
         <View style={styles.advertisingContainer}>
           <Text style={styles.advertisingText}>Advertisement</Text>
         </View>
       </View>
        // <View>

        //     <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
        //         <Button title="Arabic Version" onPress={() => navigation.navigate('ArabicMain')} />
        //     </View>

        //     <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
        //         <Button title="English Version" onPress={() => navigation.navigate('English')} />
        //     </View>

        //     <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
        //         <Button title="Other Version" onPress={() => navigation.navigate('Other')} />
        //     </View>

        //     <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
        //         <Image source = {require('../ad.png')} style={{width:200,height:200}} />
        //     </View>

        // </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      marginTop:50,
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
export default AllSurah