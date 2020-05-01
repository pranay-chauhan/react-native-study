import React from 'react';
import {TextInput,StyleSheet,Button,Text,View} from 'react-native';
export default class bird extends React.Component{
    constructor(){
        super();
        this.state={
            num : ''
        }
    }
    render(){
        return (
            <View style={styles.container}>
              <Text>{this.state.name}</Text>
              <TextInput onChangeText={(txt)=>this.setState({name : txt})} style={{fontSize : 30,height : 40}} placeholder="Enter Name"/>
            </View>
          );      
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  