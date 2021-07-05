import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FactForm from '../screens/FactItems/Factitem';
import Display from '../screens/FactSubmit';
import Login from '../screens/Login';
const Drawer = createDrawerNavigator();

const AuthDrawer=()=> {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Login} />
          <Drawer.Screen name="Display" component={Display} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  export default AuthDrawer;