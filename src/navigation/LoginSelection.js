import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import DrawerNavigation from './drawer';
import AuthDrawer from './drawerauth';

const AuthNavigator=()=>{

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();


    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
      useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    
    if (initializing) return null;
    
    if (!user) {
        
        return (
            <DrawerNavigation></DrawerNavigation>
        );
    }
    
    return (
       <AuthDrawer></AuthDrawer>
      );
    }

    

export default AuthNavigator;