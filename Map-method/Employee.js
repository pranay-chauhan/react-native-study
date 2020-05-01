import React from 'react';
import {StyleSheet,Button,Text,View,Slider} from 'react-native';

export default class extends React.Component{
    render(){
        const employee = [
            {name:'Mohan', age:35},
            {name:'Sohan',age:29},
            {name:'Anil',age:34}
        ]
        return(
            <View>
                {
                    employee.map((emp)=>{
                        return(
                            <View>
                                <Text>{emp.name}</Text>
                                <Text>{emp.age}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'pink'
    }
})