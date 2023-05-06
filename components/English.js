import { View, Text,Button } from 'react-native'
import React from 'react'

const English = ({ navigation }) => {
  return (
    <View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
            <Button title="SurahFateha" onPress={() => navigation.navigate('SurahFateha')} />
        </View>
    </View>
  )
}

export default English