import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    TouchableHighlight,
    Platform,
    StyleSheet,
    Navigator,
    Touchable,
    ScrollView,
    Alert,
    Modal,
    Animated,
    ListView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
const MaxTabNum=10;
export default class ScrollableTabBar extends Component {
    static propType={
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        tabNames: React.PropTypes.array
    };
    constructor (props) {
        super(props);
        this.state = {
            tabNums : this.props.tabs.length
        }
    }
    addTab = ()=>{
      tabs.push('MAINPAGAE');

    };

    render () {
        return (
            <View style={{height:60}}>
                <ScrollView showsHorizontalScrollIndicator={false}
                            horizontal
                            style={{backgroundColor:'#e7f276'}}>
                    <TabCell />
                    <TabCell/>
                    <TabCell/><TabCell/><TabCell/><TabCell/><AppendCell/>
                </ScrollView>
            </View>
        )
    }
};
class TabCell extends Component(){
    static propType ={
        active:React.PropTypes.bool,
        label:React.PropTypes.string

    };
    render(){
        return (
            <TouchablaOpacity>
                <View style={{width:100,marginRight:5,backgroundColor:'#8afc7b'}}>
                    <Icon name="add"  />
                </View>
            </TouchablaOpacity>
        )
    }
}
class AppendCell extends Component{
    render(){
        return(
            <View style={{width:50,marginRight:5,backgroundColor:'#a5a5a5'}}>
            </View>
        )
    }
}