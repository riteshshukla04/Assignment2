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
import { addfact } from '../../actions';
import initialState from '../../reducers/initialstate';


const FactForm=({navigation})=>{
  console.log(initialState.isLoggedin)
    const [fact, setfact] = useState('')
    const dispatch = useDispatch();
    const submit=(fact)=>{
        dispatch(addfact(fact))
    }
    return(
        <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('../../assests/logo.png')}
      />
      <Text style={styles.title}>Add FactFriday</Text>
      <TextInput
        value={fact}
        placeholder='Name'
        style={styles.foodInput}
        onChangeText={(fact) => setfact(fact)}
      />

    <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submit(fact)
          setfact('')
        }}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('Factlist')}>
        <Text style={{ fontSize: 22, color: 'white' }}>Go to Facts</Text>
      </TouchableOpacity>
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



export default FactForm;