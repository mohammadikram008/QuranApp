import React from 'react'
import { StyleSheet, Text, View,Button,Image } from 'react-native'
const AllSurah = ({ navigation }) => {
    return (
        <View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
                <Button title="Arabic Version" onPress={() => navigation.navigate('ArabicMain')} />
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
                <Button title="English Version" onPress={() => navigation.navigate('English')} />
            </View>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
                <Button title="Other Version" onPress={() => navigation.navigate('Other')} />
            </View>

            <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
                <Image source = {require('../ad.png')} style={{width:200,height:200}} />
            </View>

        </View>
    )
}

export default AllSurah