import React, {Component} from 'react';
import LoginUI from './components/Login.js'
import {Provider, connect} from 'react-redux'
import reducers from './reducers/index.js'
import Mainpage from './page/MainPage.js'
import MenuList from './components/MenuList'
import {Navigator,Platform,StatusBar} from 'react-native'
import {StackNavigator} from 'react-navigation'
import TabbarView from './page/TabBarView';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import ComicDetailPage  from './page/ComicDetailPage'
let storage = new Storage({
   size:10000000,
    storageBackend: AsyncStorage,
    defaultExpires:null,
    enableCache:true
});
class App extends Component {
    constructor(props) {
        super(props);

    }
    render(){

        if(/*this.props.user == null || !this.props.user*/null){
            return <LoginUI dispatch={this.props.dispatch}/>
        }else{
            // return <Mainpage dispatch={this.props.dispatch} user={this.props.user}/>
            return <Mainpage/>
        }
    }
};

global.storage = storage;
const AppEntry  = StackNavigator({
    Home:{screen:TabbarView},
    Detail:{screen:ComicDetailPage}
});


export default AppEntry;
