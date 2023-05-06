import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Arabic from './Arabic';
import English from './English';
const Drawer = createDrawerNavigator();
const ArabicMain = () => {
  return (
    
        <Drawer.Navigator>
            <Drawer.Screen name="Arabic" component={Arabic} />
            <Drawer.Screen name="English" component={English} />
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>

    
  )
}

export default ArabicMain