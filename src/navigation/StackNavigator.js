import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FactForm from '../screens/FactItems/Factitem';
import Display from '../screens/FactSubmit';
import Login from '../screens/Login';
import Register from '../screens/Register';



const Stack = createStackNavigator();

const  HomeNavigator=() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="FactForm" component={FactForm} />
        <Stack.Screen name="Factlist" component={Display} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigator;