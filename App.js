import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Person from './Class-component/Person';
//import Fruit from './Functional-component/Fruit';
//import Employee from './Map-method/Employee';
//import Car from './State/Car'
//import Fruit from './setState/Fruit';
//import Bird from './Input-box/Bird';
//import Posts from './API-call/Posts';
//import Average from './Averege';
//import ImagePicker from './Image-Picker';
//import User from './InputElement/User';
import Employee from './Form/Employee';
//import Flex from './Flex/Flex';
//import UseState from './Hooks/UseState'
import Fruit from './FlatList/Fruit'
export default function App() {
  return (
    <View style={styles.container}>
     {/* <Person/> */}
     {/* <Fruit name="banana" cost="30"/> */}
     {/* <Employee/> */}
     {/* <Car/> */}
    {/* <Bird/> */}
    {/* <Posts/> */}
    {/* <Average/> */}
    {/* <ImagePicker/> */}
    {/* <User/> */}
    <Employee/>
    {/* <Flex/> */}
    {/* <UseState/> */}
    {/* <Fruit/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
