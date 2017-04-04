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
    ListView,TouchableOpacity
} from 'react-native'
import {observer} from 'mobx-react/native'
import {reaction} from 'mobx'
import Icon from 'react-native-vector-icons/FontAwesome';
import dynamicTabStore from '../store/DynamicTabStore'
const MaxTabNum=10;
@observer
export default class DynamicTabBar extends Component {
    static propType={
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array.required,
        tabNames: React.PropTypes.array
    };

    constructor (props) {
        super(props);
        this.state={
            tabNums: this.props.tabs.length
        }
    }
    addTab=() => {
        dynamicTabStore.append();
    };
    removePage = (i)=>{
        if(i != this.props.activeTab)
        dynamicTabStore.removePage(i);

    };
    render () {
        return (
            <View style={{height:35}}>
                <ScrollView showsHorizontalScrollIndicator={false}
                            horizontal
                            style={{backgroundColor:'#e7f276'}}>
                    {
                        dynamicTabStore.controllers.map((controller, index) => {
                            return <TabCell label={controller.title} onPress={()=>this.props.goToPage(index)} id={index} tabKey={controller.tabKey} onLongPress={this.removePage} />
                        })
                    }{
                    this.props.tabs.length <= 9?<AppendCell onPress={this.addTab}/>:null
                }
                </ScrollView>
            </View>
        )
    }
};
class TabCell extends Component{
    static propType={
        active: React.PropTypes.bool,
        label: React.PropTypes.string,
        onPress: React.PropTypes.func,
    };

    render () {
        return (
            <TouchableOpacity onPress={this.props.onPress} onLongPress={()=>this.props.onLongPress(this.props.id)}>
                <View style={{width:100,height:'100%',marginRight:5,backgroundColor:'#8afc7b',justifyContent:'center',alignItems: 'center',flex:1}}>
                    <Text>{this.props.label}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
class AppendCell extends Component {
    render () {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{width:40,marginRight:5,backgroundColor:'#a5a5a5',justifyContent:'center',alignItems: 'center',flex:1}}>
                    <Icon name="rocket"/>
                </View>
            </TouchableOpacity>
        )
    }
}