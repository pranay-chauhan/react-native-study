import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Person from './Class-component/Person';
//import Fruit from './Functional-component/Fruit';
//import Employee from './Map-method/Employee';
//import Car from './State/Car'
//import Fruit from './setState/Fruit';
import Bird from './Input-box/Bird'
export default function App() {
  return (
    <View style={styles.container}>
     {/* <Person/> */}
     {/* <Fruit name="banana" cost="30"/> */}
     {/* <Employee/> */}
     {/* <Car/> */}
    <Bird/>
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
