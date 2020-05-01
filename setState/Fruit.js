import React from 'react';
import {StyleSheet,Button,View,Text} from 'react-native';

export default class fruit extends React.Component{
    constructor(){
        super();
        this.state = {
            fruit_name:'Banana',
            fruit_cost:70,
            fruit_color:'Yellow'
        }
    }
    changeStateHandler=()=>{
        this.setState({
            fruit_name:'Apple',
            fruit_cost:140,
            fruit_color:'red'
        })
    }
    render(){
        return(
            <View>
                <Text>{this.state.fruit_name}</Text>
                <Text>{this.state.fruit_cost}</Text>
                <Text>{this.state.fruit_color}</Text>
                <Button onPress={this.changeStateHandler} title ='Click Me'/>
            </View>
        )
    }
}