import React, {Component} from 'react'
import {Navigator, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {Platform} from 'Platform'
export default class StackNavigatorProvider extends Component {
    constructor(props) {
        super(props);
        this.state.currentPage = props.initComponent;
        this._pageStack = [props.initComponent];
        this._navigator = this.refs.navigator;
    }

    state = {
        currentPage: this.props.initComponent
    };
// page:{
//     name,
//     componemt,
//     depth,
// }
    push(route) {
        let stack = this._pageStack;
        if (!route.name || !route.depth || !route.component)
            throw new Error('arguments must be {name:component,depth:int}');
        if (stack.length > route.depth) {
            stack = stack.slice(0, route.depth);
        }
        stack.push({
            name: route.name,
            component: route.component
        });
        pageStack.push(route);
        this._navigator.push({
            name: route.name,
            component: route.component,
            index: route.depth
        });
    }
    pop(){
        this._pageStack.pop();
        this._navigator.pop();
    }
    handleBackbutton() {

    }
    getStackDepth(){
        return this._pageStack.length;
    }
    getStack(){
        return this._pageStack;
    }
    render() {
        return (
            <Navigator refs="navigator"
                       initialRoute={{
                           name: this.props.initialRoute.name,
                          component: this.props.initialRoute.component
                        }}
                       configureScene={(route) => {
                           return Navigator.SceneConfigs.VerticalDownSwipeJump;
                       }}
                       renderScene={
                           (route, navigator) => {
                               let TempComponent = route.component;
                               return (
                                   <TempComponent navigator={this}/>
                               );
                           }
                       }/>
        );
    }

}
const style = StyleSheet.create({
    navbar_default: {}
});