import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image , ScrollView} from 'react-native'
import { useRoute } from '@react-navigation/native';
export const ShowSurah = () => {

    const route = useRoute();
    const { data } = route.params;
    console.log("params", data.data.ayahs[0])
    const Card = ({ ayahs }) => (
  
        <View >
            {ayahs[0]?<Text >{ayahs[0].text}</Text>:""}
          <Text style={styles.card} >
      
          <Text style={styles.name}>{ayahs.text}</Text>
         
          </Text>
        </View>
      );
    return (
   
<ScrollView contentContainerStyle={styles.container}>
      {  data.data.ayahs.map((ayahs,index) => (
        <Card key={index} ayahs={ayahs} />
      ))}
    </ScrollView>
           
    )
}
const styles = StyleSheet.create({
   
    container: {
      paddingVertical: 20,
    },
    card: {
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor: '#708090',
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      margin:"4%",
     
        justifyContent:'center',
        alignItems:'center',
    },
    name: {
        
      fontSize: 18,
      fontWeight: 'bold',
      color:'#ffffff'
    },
    translatedName: {
      fontSize: 16,
   color:'#ffffff'
    },
  });