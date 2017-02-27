import React,{Component}from 'react';
import App from './App.js'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import loginReducer from './reducers/login.js'
import LoginUI from './components/Login.js'
export default class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin:false,
            loginStatus:'NORMAL',
            store:createStore(loginReducer,applyMiddleware(thunk))
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App/>
            </Provider>
        )
    }
}