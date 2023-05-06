import { View, Text,TextInput,StyleSheet,Button } from 'react-native'
import React,{useState} from 'react'

const GetUserInfo = ({ navigation }) => {
    
    const [name, onChangeName] = useState('');
    const [sect, onChangeSect] = useState('');
    const [gender,onChangeGender] = useState("")
  return (
    <View style={{marginTop:10}}>
      <Text style={{marginLeft:10,fontSize:18}}>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
      />
      <Text style={{marginLeft:10,fontSize:18}}>Enter Your Sect:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSect}
        value={sect}
      />
      <Text style={{marginLeft:10,fontSize:18}}>Select Your Gender:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeGender}
        value={gender}
      />
      <View style={{width:'80%',marginLeft:50,marginTop:30}}>
        <Button  title="Submit" onPress={() => navigation.navigate('ProfileChatbot')} />
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default GetUserInfo