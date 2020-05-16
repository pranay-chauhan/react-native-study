import React from 'react';
import { TextInput, StyleSheet, Text, View, Button,Alert,ActivityIndicator} from 'react-native';
export default class exp extends React.Component{
    constructor(){
        super();
        this.state ={
            loader:true
        }
    }
    componentDidMount = ()=>{
        setTimeout(()=>{
            this.setState({
                loader:false
            })
        },4000)
    }
    render(){
        return(
            <View>
                {
                    this.state.loader ?  <ActivityIndicator color='red' size={100}/> : <Text style={{fontSize:20}}>
                    ActivityIndicator also called as Loader
                </Text>
                }
            </View>
        )
    }
}