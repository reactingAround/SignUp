import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base'

import * as firebase from 'firebase';

//Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCpPBEYe9omdyf_5ZaTS9hOjkAI7Whx7og",
  authDomain: "test-6abae.firebaseapp.com",
  databaseURL: "https://test-6abae.firebaseio.com",
  projectId: "test-6abae",
  storageBucket: "test-6abae.appspot.com",
}
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state=({
      email: '',
      password: '',
    })
  }

  signUpUser = (email,password) =>{
    try{
      if(this.state.password.length<6){
        alert('Please enter more than 6 characters!')
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
    }
    catch(error){
      console.log(error.toString())
    }
  }

  loginUser = (email,password) =>{

  }

  render(){
    return(
      <Container style={styles.container}>
        <Form>
            <Item floatingLabel><Label >Email</Label><Input onChangeText={(email)=>this.setState({email})}  autoCapitalize="none" autoCorrect={false} /></Item>
            <Item floatingLabel><Label>Password</Label><Input onChangeText={(password)=> this.setState({password})} autoCapitalize="none" autoCorrect={false} secureTextEntry={true}/></Item>
            <Button style={{margin:10}}
              full
              rounded
              success
              onPress= {()=> this.loginUser(this.state.email,this.state.password)}
            > 
              <Text style={{color:'white'}}>Login</Text>
            </Button>
            <Button style={{margin:10}}
              full
              rounded
              primary
              onPress={()=> this.signUpUser(this.state.email,this.state.password)}
            > 
              <Text style={{color:'white'}}>Sign Up</Text>
            </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor: '#fff',
    padding:10,
  }

})
