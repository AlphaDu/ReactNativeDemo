import React,{Component}from 'react';
import App from './App.js'
import {createStore, applyMiddleware,compose} from 'redux'
import {AsyncStorage} from 'react-native'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import loginReducer from './reducers/login.js'
import LoginUI from './components/Login.js'
import {persistStore, autoRehydrate} from 'redux-persist'
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin:false,
            loginStatus:'NORMAL',
            store:this._configureStore()
        }
    }
    _configureStore(){
        let store = createStore(loginReducer,undefined, compose(applyMiddleware(thunk),autoRehydrate()));
        persistStore(store,{storage: AsyncStorage,whitelist:["lastUser"]});
        return store;
    }
    render() {
        return (
            <Provider store={this.state.store}>
                <App/>
            </Provider>
        )
    }
}
