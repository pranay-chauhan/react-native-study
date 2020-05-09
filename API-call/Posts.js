import React from 'react'
import axios from 'axios';
import {View,Text,Button,StyleSheet,ScrollView} from 'react-native';

export default class posts extends React.Component{
    constructor(){
        super();
        this.state={
            posts:[]
        }
    }
    componentDidMount = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
          this.setState({
            posts:res.data
          })
          console.log('The Data is ',res.data);
        }).catch(err=>{
          console.log('The error is ',err)
        })
      }
       
    render(){
        return(
            <View>
                <ScrollView>
                {
                          this.state.posts.map((post)=>{
                              return(
                                  <View key={post.id} style={styles.scrollCss}>
                                      <Text>{post.title}</Text>
                                  </View>
                              )
                          })
                      }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textStyle:{
        color:'#000',
        backgroundColor:'orange',
        justifyContent:'center',
        alignContent:'center'
    },
    scrollCss:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:30,
        margin:3,
        borderColor:'orange',
        borderWidth:5,
        backgroundColor:'yellow'
    }
})