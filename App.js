/* David McFarland
   ITN263-4W1
   November 15, 2020
   Frebase - ChatApp
   v.1
*/ 
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Chat from './components/chat';
import Login from './components/login'
import Signup from './components/signup'

const Stack = createStackNavigator();

/* Had to modifiy original code here because createStackNavigator() has been moved to  
@react-navigation/stack. It also gave me an error about it being a function, so I created as variable then set up the screens 

*/
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
