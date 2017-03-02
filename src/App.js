import React, {Component} from 'react';
import LoginUI from './components/Login.js'
import {Provider, connect} from 'react-redux'
import reducers from './reducers/index.js'
import Mainpage from './components/MainPage.js'

class App extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        if(/*this.props.user == null || !this.props.user*/null){
            return <LoginUI dispatch={this.props.dispatch}/>
        }else{
            return <Mainpage dispatch={this.props.dispatch} user={this.props.user}/>
        }
    }
}
const Login = connect(
    (state) => {
        return {
            user:state.user,
            loginStatus: state.loginStatus
        }
    }
)(App);

const initLogin =()=>{

};
export default Login;