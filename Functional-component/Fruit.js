import React from 'react';
import {StyleSheet,View,Text,Button} from 'react-native'

const fruit = (props)=>{
    return(
        <View>
            <Text>{props.name}</Text>
            <Text>{props.cost}</Text>
        </View>
    )
}
export default fruit