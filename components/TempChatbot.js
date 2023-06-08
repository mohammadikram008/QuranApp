import { View, Text, TouchableOpacity,StyleSheet,FlatList, TextInput } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios';
const Chatbot = () => {
    const [data,setData]=useState([]);

    const apiKey='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';
    const apiUrl="https://api.openai.com/v1/engines/text-davinci-002/completions";
    const [textInput,setTextInput]=useState('');

    const handleSend=async()=>{
      try{
        const prompt=textInput;
        alert(textInput);
        const response=await axios.post(apiUrl,{
            prompt:prompt,
            max_tokens:1024,
            temperature:0.5
        },{
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${apiKey}`
            }
        });
        const text=response.data.choices[0].text;
        alert("text",text);
        setData([...data,{type:'user','text':textInput}]);
        setTextInput('');
        alert("Data",data);
      }
      catch(err){
        alert(err)
      }
    }
  return (
    <View style={styles.container}>
      {/* <Text>Chatbot</Text> */}
      <FlatList
        data={data}
        keyExtractor={(item,index)=>index.toString()}
        style={styles.body}
        renderItem={(item)=>(
            <View style={{flexDirection:'row',padding:10}}>
                <Text style={{fontWeight:'bold',color:item.type==='user'?'green':'black'}}>
                    {item.type==='user'?'Ninza':'Bot'}
                </Text>
                <Text style={styles.bot}>{item.text}</Text>
            </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={text=>setTextInput(text)}
        placeholder='Ask me anything'
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
      justifyContent:'center'
    },
    body: {
      backgroundColor: '#fffcc9',
      margin: 10,
      width:'102%'
    },
    bot:{
        fontSize:16,
        color:'black'
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
export default Chatbot