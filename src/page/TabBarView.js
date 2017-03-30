/**
 * Created by ljunb on 16/5/26.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import ScrollableTabView ,{DefaultTabBar}from 'react-native-scrollable-tab-view';
import TabBar from '../components/TabBar';
import Page1 from '../page/TestPage1'
import Page2 from '../page/TestPage2'
import Page3 from '../components/MenuList';
import LoadedList from '../page/LoadedList'
import ProfileView from '../page/ProfileView';
import  ListPage from '../page/ListPage';
import MainList from '../page/MainList'
import Test from '../page/TestPage'
export default class TabBarView extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ScrollableTabView
                tabBarPosition='bottom'
                locked
                scrollWithoutAnimation
                renderTabBar={
                    ()=><DefaultTabBar />
                }

            >
                <Page1 tabLabel='Tab #1' key={1}/>
                <Test tabLabel='Main' key={2}/>
                <Page3 tabLabel="Tab #3" key={3}/>
                <ListPage tabLabel="List" key={4}/>
                <ProfileView tabLabel="profile"/>
                <LoadedList tabLabel="DownLoad"/>
            </ScrollableTabView>

        );
    }
}
