
import React, {useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image,ImageBackground } from 'react-native'
export const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        const timer = setTimeout(() => {
            // Do something after a certain delay
            navigation.navigate('Home')
          }, 3000);
          return () => clearTimeout(timer);
    })
  return (
    <View style={styles.container}>
    {/* <ImageBackground
      source={require('../Assets/open-book.png')}
      style={styles.backgroundImage}
    > */}
      <Image
        source={require('../Assets/booksplash.png')}
        style={styles.quranImage}
      />
      <Text style={styles.buttonText} >Quran App</Text>
    {/* </ImageBackground> */}
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft:"8%"
      },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    quranImage: {
      width: '60%',
      height: '30%',
    },
  });