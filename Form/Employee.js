import React from 'react';
import { TextInput, StyleSheet, Text, View, Button,Alert} from 'react-native';

export default class emp extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
            password:'',
            address:''
 
        }
    }
    submit = ()=>{
        console.warn(this.state)
    }
    render(){
        return(
            <View>
                <TextInput style={styles.textBox} placeholder="Enter Name" onChangeText={(text)=>{this.setState({name:text})}}></TextInput>
                {/* Here For input type password like functionality we are using 'secureTextEntry={true}'  */}
                <TextInput style={styles.textBox} placeholder="Enter Password" onChangeText={(text)=>{this.setState({password:text})}} secureTextEntry={true}></TextInput>
                <TextInput style={styles.textBox} placeholder="Enter Address" onChangeText={(text)=>{this.setState({address:text})}}></TextInput>
                <Button onPress={this.submit} title='Submit'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textBox:{
        borderColor:'skyblue',
        borderWidth:2,
        padding:10,
        width:350,
        marginTop:30,
        marginBottom:20
    },

})