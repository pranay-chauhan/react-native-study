import React,{useEffect,useState} from 'react';
import {StyleSheet,View,Text,Button} from 'react-native'

function UseEffect(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.warn('Hello Hooks',count)
    })
    return(
        <View>
            <Text style={{fontSize:30}}>
            {count}
            </Text>
            <Button title ="Update Count" onPress={()=>setCount(count+1)}/>
        </View>
    )
}
export default UseEffect