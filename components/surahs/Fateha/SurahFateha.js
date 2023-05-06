import { View, Text } from 'react-native'
import React from 'react'
import fatehaverses from './fatehaverses'
const SurahFateha = () => {
    const getVerses = (response) => {
        let allverses = response.data.verses;
      
        const keys = Object.keys(allverses);
      
        return keys.map((key) => {
          let singleverses = allverses[key];
      
          return { value: key, ...singleverses };
        });
      };
      const firstverses=getVerses(fatehaverses);
  return (
    <View style={{marginLeft:10}}>
      {firstverses.map((verse,index) => {
              return (
                <View style={{marginBottom:50}} key={index}>
                  <Text style={{fontSize:20}}>{verse.text}</Text>
                </View>
              );
            })}
    </View>
  )
}

export default SurahFateha