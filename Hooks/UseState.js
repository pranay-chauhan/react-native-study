import React,{useState} from 'react';
import {StyleSheet,View,Text,Button} from 'react-native'

function UseState(){
    const [count,setCount] = useState(100)
    return(
        <View>
            <Button title="Decrement Counter" onPress={()=>setCount(count-10)}></Button>
            <Text style={{fontSize:100}}>
                {count}
            </Text>
            <Button title="Increment Counter" onPress={()=>setCount(count+10)}></Button>
        </View>
    )
}
export default UseState