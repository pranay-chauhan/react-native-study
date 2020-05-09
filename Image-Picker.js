import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View, Button, Picker } from 'react-native';

export default class img extends React.Component {
    constructor() {
        super();
        this.state = {
            degree: ''
        }
    }
    updateDegree = (deg) => {
        this.setState({
            degree: deg
        })
    }

    render() {
        return (
            <View>
                <Image source={{ uri: 'https://www.scitecheuropa.eu/wp-content/uploads/2019/09/Colour-bird-e1568033112774.jpg' }} style={{ height: 200, width: 400 }} />
                <Picker selectedValue={this.state.degree} onValueChange={this.updateDegree}>

                    <Picker.Item label='BE' value='be'></Picker.Item>
                    <Picker.Item label='MCA' value='mca'></Picker.Item>
                    <Picker.Item label='BCOM' value='bcom'></Picker.Item>
                </Picker>
                <Text style={styles.text}>
                    {this.state.degree}
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
    }
})
