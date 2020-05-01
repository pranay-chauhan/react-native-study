import React from 'react';
import {StyleSheet,Button,Text,View} from 'react-native';

export default class Car extends React.Component{
    constructor(){
        super();
        this.state = {
            car_name:'Balleno',
            car_cost:700000,
            car_color:'Blue'
        }
    }
    render(){
        return(
        <View style={styles.myNewStyle}>
            <Text>{this.state.car_name}</Text>
        <Text>{this.state.car_color}</Text>
        <Text>{this.state.car_cost}</Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    myNewStyle:{
        backgroundColor:'pink'
    }
})