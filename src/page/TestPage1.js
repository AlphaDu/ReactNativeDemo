import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Alert,
    Animated,
    ScrollView,
    ListView,
    RefreshControl
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import TabBar from '../components/TabBar'
const tabTitles = ['食物百科', '逛吃', '我的'];
const tabIcons = [
    require('../resource/ic_tab_search.png'),
    require('../resource/ic_tab_homepage.png'),
    require('../resource/ic_tab_my.png')
];
const tabSelectedIcon = [
    require('../resource/ic_tab_search_select.png'),
    require('../resource/ic_tab_homepage_select.png'),
    require('../resource/ic_tab_my_select.png')
];
export default class ListViewBasics extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        this._isRefreshing = false;
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }
    _onRefresh = ()=>{
        this._isRefreshing = true;
        setTimeout(()=>{
            this._isRefreshing = false
        },10000);
    };
    render() {
        return (
            <View style={{flex: 1, paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                    refreshControl={
                        <RefreshControl refreshing={this._isRefreshing}  onRefresh={this._onRefresh}/>
                    }
                />
            </View>
        );
    }
}