import React from 'react';
import { TextInput, StyleSheet, Text, View, Button,Alert} from 'react-native';
import axios from 'axios';
//import Posts from './Posts';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            p: '',
            c: '',
            m: '',
            h: '',
            avg: ''
        }
    }

    alertButtonHandler =()=>{
 
        Alert.alert('Hi React Native Alert!!!')
    }

    calculateAvg = () => {
        let phy = parseFloat(this.state.p);
        let che = parseFloat(this.state.c);
        let math = parseFloat(this.state.m);
        let hindi = parseFloat(this.state.h)
        let avgr = (phy + che + math + hindi) / 4.0
        this.setState({
            avg: avgr
        })
    }

    render() {
        return (

            // <Posts/>
            <View style={styles.container}>
                <Text>{this.state.name}</Text>
                <TextInput underlineColorAndroid="transparent"
                    placeholder="Physics"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none" onChangeText={(txt) => this.setState({ p: txt })} />
                <TextInput underlineColorAndroid="transparent"
                    placeholder="Chemistry"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none" onChangeText={(txt) => this.setState({ c: txt })} />
                <TextInput underlineColorAndroid="transparent"
                    placeholder="Math"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none" onChangeText={(txt) => this.setState({ m: txt })} />
                <TextInput underlineColorAndroid="transparent"
                    placeholder="Hindi"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none" onChangeText={(txt) => this.setState({ h: txt })} />
                    
                <Text>Average:{this.state.avg}</Text>
                <Button title="Find Average" onPress={this.calculateAvg}>Find Average</Button>
                <Button style={styles.submitButton} onPress={this.alertButtonHandler} title="Alert Message"/>

            </View>

        );
    }

}


const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})
