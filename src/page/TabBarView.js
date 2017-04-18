/**
 * Created by ljunb on 16/5/26.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
} from 'react-native'
import ScrollableTabView ,{DefaultTabBar,ScrollableTabBar}from 'react-native-scrollable-tab-view';
import TabBar from '../components/TabBar';
import Page1 from '../page/TestPage1'
import Page2 from '../page/TestPage2'
import Page3 from '../components/MenuList';
import LoadedList from '../page/LoadedList'
import ProfileView from '../page/ProfileView';
import  ListPage from '../page/ListPage';
import MainList from '../page/MainList'
import Test from '../page/TestPage'
import WebViewPage from '../page/WebViewPage'
import DetailPage from '../page/ComicDetailPage'
import ComicListPage from '../page/ComicListPage'

export default class TabBarView extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ScrollableTabView
                tabBarPosition='top'
                locked
                scrollWithoutAnimation
                renderTabBar={
                    ()=><DefaultTabBar />
                }
            >
                <ComicListPage tabLabel="clist" key={1} navigation={this.props.navigation}/>
                <DetailPage tabLabel="detal" key={6}/>
                <Test tabLabel='Main' key={2}/>

                <Page3 tabLabel="Tab #3" key={3}/>
                <WebViewPage tabLabel="web" ley={5}/>
                <ListPage tabLabel="List" key={4}/>
                <LoadedList tabLabel="DL"/>
            </ScrollableTabView>

        );
    }
}
