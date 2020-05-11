import React from 'react';
import { TextInput, StyleSheet, FlatList, Text, View, Button, Alert, ScrollView } from 'react-native';
export default class fruit extends React.Component {
    constructor() {
        super();
        this.state = {
            fruits: [
                { name: 'Apple', color: 'red', price: 80 },
                { name: 'Orange', color: 'ornage', price: 60 },
                { name: 'Mango', color: 'yelllow', price: 100 },
                { name: 'Banana', color: 'yellow', price: 30 },
                { name: 'Kiwi', color: 'darkgreen', price: 120 },
                { name: 'Mango', color: 'yelllow', price: 100 },
                { name: 'Banana', color: 'yellow', price: 30 },
                { name: 'Kiwi', color: 'darkgreen', price: 120 }
            ]
        }
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 100 }}>FlatList</Text>
                <FlatList data={this.state.fruits} renderItem={({ item }) => <Text style={{ fontSize: 80 }}>{item.name}</Text>} />
            </View>
        )
    }
}