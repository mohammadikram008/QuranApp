import { View, Text,FlatList,ScrollView } from 'react-native'
import React from 'react'
import baqrahverses from './baqrahverses'
const SurahBaqrah = () => {
    const getVerses = (response) => {
        let allverses = response.data.verses;
      
        const keys = Object.keys(allverses);
      
        return keys.map((key) => {
          let singleverses = allverses[key];
      
          return { value: key, ...singleverses };
        });
      };
      const firstverses=getVerses(baqrahverses);
  return (
    <ScrollView style={{marginRight:20}}>
      {firstverses.map((verse,index) => {
              return (
                <View style={{marginBottom:50}} key={index}>
                  <Text style={{fontSize:20}}>{verse.text}</Text>
                </View>
              );
            })}
    </ScrollView>
     
  )
}

export default SurahBaqrah