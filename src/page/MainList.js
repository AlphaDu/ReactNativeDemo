import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    StyleSheet,
    Navigator
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import  TestPage1 from './TestPage1'
import TestPage2 from './TestPage2'
import MainTabBar from '../components/MainTabBar'

const titles =['首页', '评测'];
const pages =[TestPage1,TestPage2];
export default class MainList extends Component {

    constructor (props) {
        super(props)
    }
    render(){
        return (
            <View style={{flex:1}}>
                <ScrollableTabView
                    renderTabBar={()=><MainTabBar tabNames={titles}/>}
                    tabBarPosition='top'
                    scrollWithoutAnimation={false}
                >
                    {
                        pages.map((Component,index)=>{
                          return  (
                              <Component
                                key = {titles[index]}
                                tabLael ={titles[index]}
                              />
                          )
                        })
                    }
                </ScrollableTabView>
            </View>
        );
    }
}
