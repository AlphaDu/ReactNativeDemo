import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Button, Alert,Text} from 'react-native';
import {Provider,connect} from 'react-redux'
import {createStore} from 'redux'
import loginService from '../actions/login.js'
import appConsts from '../consts/appConsts'
class LoginUI extends Component {
    state = {
        userNameStyle: style.InputBox,
        passwordStyle: style.InputBox
    };

    constructor(props) {
        super(props);
    }
    getLastLogonUser(){

    }
    componentDidMount(){

    }
    render() {
        let messageStyle = style.normal;
        let message = '';
        if (this.props.loginStatus == appConsts.login.sendingLoginRequest) {
            messageStyle = style.sending;
            message = 'logining ...';
        } else if (this.props.loginStatus == appConsts.login.loginSucceed) {
            messageStyle = style.succeed;
            message = 'login succeed';
        } else if (this.props.loginStatus == appConsts.login.loginFailed) {
            messageStyle = style.failed;
            message = 'login failed'
        }
        return (
            <View style={style.loginContainer}>
                <TextInput style={this.state.userNameStyle} multiline={false} underlineColorAndroid='transparent'
                           maxLength={16}
                           onFocus={() => {
                               this.setState({
                                   userNameStyle: style.InputBoxChoosen
                               });
                           }}
                           onBlur={() => {
                               this.setState({
                                   userNameStyle: style.InputBox
                               });
                           }}
                />
                <TextInput secureTextEntry={true} style={this.state.passwordStyle} underlineColorAndroid='transparent'
                           maxLength={16}
                           onFocus={() => {
                               this.setState({
                                   passwordStyle: style.InputBoxChoosen
                               });
                           }}
                           onBlur={() => {
                               this.setState({
                                   passwordStyle: style.InputBox
                               });
                           }}
                />
                <Button onPress={
                    () => {
                        this.props.dispatch(loginService())
                    }
                } title="      登 录      " style={style.loginButton} color="#1ABC9C"/>
                <Text style={messageStyle}>{message}</Text>
            </View>
        );
    }
}
const style = StyleSheet.create({
        loginContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#F1F1F1'
        },
        InputBox: {
            width: 250,
            height: 50,
            marginBottom: 20,
            backgroundColor: '#fff',
        },
        InputBoxChoosen: {
            width: 250,
            height: 50,
            marginBottom: 20,
            backgroundColor: '#fff',
            borderColor: "#1ABC9C",
            borderWidth: 2
        },
        loginButton: {
            color: "#1ABC9C",
            width: 250
        },
        normal: {
            color: '#2f4f4f'
        },
        sending: {
            color: '#1e90ff'
        },
        succeed: {
            color: '#32cd32'
        },
        failed: {
            color: '#dc143c'
        }
    }
);

export default connect(
    (state)=>{
        return {
            user:state.user,
            loginStatus: state.loginStatus
        }
    }
)(LoginUI);
