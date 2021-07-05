import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { addfact } from '../../actions';
import initialState from '../reducers/initialstate';
import {useNavigation} from '@react-navigation/native';
import { login } from '../actions';
import { LOGIN } from '../actions/type';

  

const Register=({errors})=>{
  
    const {navigate} = useNavigation();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterrors] = useState('')
    const [isLoggedin,setlogin ]=useState(false)
    const dispatch = useDispatch();
    const submit=({email,password},state=initialState)=>{
        console.log("Email-->",email);
        console.log("Password--->",password);
        auth().createUserWithEmailAndPassword(email,password)
        
        .then(() => {
            
            navigate('Login')
        })
        .catch(error => {
         error=>seterrors(error);
         console.log(error)
        });
    }
    
    return(
        <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('../assests/logo.png')}
      />
      <Text style={styles.title}>Register Page</Text>
      <TextInput
        value={email}
        placeholder='Email'
        style={styles.foodInput}
        onChangeText={(email) => setemail(email)}
      />
      <TextInput
        value={password}
        placeholder='Password'
        style={styles.foodInput}
        secureTextEntry={true}
        onChangeText={(password) => setpassword(password)}
      />

    <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submit({email,password})
          setemail('');
          setpassword('');
        }}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
         navigate('Login');
        }}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Login</Text>
        </TouchableOpacity>
        <Text>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    marginBottom: 30,
    marginTop: 16,
    color: 'white'
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 32,
    borderWidth: 1,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 100,
  }
});


export default Register;