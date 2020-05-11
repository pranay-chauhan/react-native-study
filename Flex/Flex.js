import React from 'react';
import { TextInput, StyleSheet, Text, View, Button,Alert} from 'react-native';
 export default class flex extends React.Component{
     constructor(){
         super();
     }
     render(){
         return(
            <View style={{flexWrap:'wrap',flex: 2,flexDirection:'row'}}>
        <View style={{width: 130, height: 130, backgroundColor: 'powderblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'skyblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'steelblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'orange'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'pink'}} />
      </View>
      
         )
     }
 }