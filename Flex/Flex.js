import React from 'react';
import { TextInput, StyleSheet, Text, View, Button,Alert,ScrollView} from 'react-native';
 export default class flex extends React.Component{
     constructor(){
         super();
     }
     render(){
         return(
            //  Here horizontal props for the scrolling horizontallly
             <ScrollView horizontal={true}>
                   <View style={{flexDirection:'row',flex: 2}}>
        <View style={{width: 130, height: 130, backgroundColor: 'powderblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'skyblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'steelblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'orange'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'pink'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'powderblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'skyblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'steelblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'orange'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'pink'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'powderblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'skyblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'steelblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'orange'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'pink'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'powderblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'skyblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'steelblue'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'orange'}} />
        <View style={{width: 130, height: 130, backgroundColor: 'pink'}} />
      </View>
             </ScrollView>
         )
     }
 }