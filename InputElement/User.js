import React from 'react';
import { TextInput, StyleSheet, Text, View, Button,Alert} from 'react-native';

export default class user extends React.Component{
    constructor(){
        super();
        this.state = {
            name:''
        }
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:40}}>
                {this.state.name}</Text>
                <TextInput placeholder={'Enter your name'} onChangeText={(e)=>{this.setState({name:e})}}></TextInput>
                <Button title="Submit"onPress={()=>{alert(this.state.name)}}></Button>
            </View>
        )
    }
}