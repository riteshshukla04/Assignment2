import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import FactForm from '../screens/FactItems/Factitem';
import configureStore from '../reducers/Provider';
import DrawerNavigation from './drawer';
import AuthDrawer from './drawerauth';
import initialState from '../reducers/initialstate';
import AuthNavigator from './LoginSelection';
import { state } from '../screens/Login';
import HomeNavigator from '../navigation/StackNavigator'

const store=configureStore();

const AppNavigator = () =>
 {
   
  return(
  <Provider store={store}>
    <HomeNavigator></HomeNavigator>
  </Provider>
  )}


export default AppNavigator;