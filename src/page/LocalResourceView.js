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
import LoadingList from './LoadingList'
import LoadedList from './LoadedList'
import LocalResourceBar from '../components/LocalResourceBar'
class LocalResourceView extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <View style={{flex:1}}>
                <ScrollableTabView
                renderTabBar={}>

                </ScrollableTabView>
            </View>
        );
    }
}

class LoadgingResourceView extends Component{

}
class LoadedResourceView extends Component{

}
