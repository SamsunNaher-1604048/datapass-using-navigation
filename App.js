
import * as React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Src/Components/HomeScreen';
import Profile from './Src/Components/Profile';


const stack=createNativeStackNavigator()


function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Login Page' component={HomeScreen}/>
        <stack.Screen name='Profile' component={Profile}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;