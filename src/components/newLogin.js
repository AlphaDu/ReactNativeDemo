import React, {Component} from 'react';
import  {StyleSheet, TextInput, View, Button,Alert} from 'react-native';
import {Provider} from 'react-native'
import {createStore} from 'redux'
conntect(
    (state) =>{
        return {
            isChoosen:false
        }
    },

)(TextInput);
class Login extends Component{
    render(){

    }
}