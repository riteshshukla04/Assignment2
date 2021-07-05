import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text
} from 'react-native'


import { ListItem, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { deletefact } from '../actions';


const Display=()=>{
    const dispatch=useDispatch();
    const deleteitem=(key)=>{
        dispatch(deletefact(key));
    }
    const facts=useSelector(state=>state.FactReducer.factlist)
    console.log(facts);
    return(
        <FlatList style={styles.listContainer}
      data={facts}
      keyExtractor={(item, index) => item.key.toString()}
      renderItem={
        (data) =>
          <Text style={styles.item}  onPress={() => deleteitem(data.item.key)}>{data.item.name}</Text>
           
        
          
          



      }
    />
    )
}

const styles = StyleSheet.create({
    listContainer: {
      backgroundColor: '#212121',
      padding: 16
    },
    listText: {
      fontSize: 30
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color:"white"
    },
  });

export default Display;