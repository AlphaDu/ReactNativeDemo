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
import {observer} from 'mobx-react/native'
import {reaction} from 'mobx'
import Icon from 'react-native-vector-icons/FontAwesome';
import dynamicTabStore from '../store/DynamicTabStore'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import DynamicTabBar from '../components/DynamicTabBar'
const MaxTabNum=10;
@observer
export default class TestPage extends Component{
    render(){
        return (
            <View style={{flex:1}}>
                <ScrollableTabView
                renderTabBar={()=><DynamicTabBar/>} >
                    {
                        dynamicTabStore.controllers.map((controller,index)=>{
                            let Component = controller.component;
                            return <Component tabLabel={controller.title}/>
                        })
                    }
                </ScrollableTabView>
            </View>
        )
    }
}

/*class ScrollableTabBar extends Component {
 static propType={
 goToPage: React.PropTypes.func,
 activeTab: React.PropTypes.number,
 tabs: React.PropTypes.array,
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
 render () {
 return (
 <View style={{height:60}}>
 <ScrollView showsHorizontalScrollIndicator={false}
 horizontal
 style={{backgroundColor:'#e7f276'}}>
 {
 dynamicTabStore.controllers.map((controller, index) => {
 return <TabCell label={controller.title} onPress={()=>this.props.goToPage(index)}/>
 })
 }{
 this.props.tabs.length >= 10?<AppendCell onPress={this.addTab}/>:null
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
 <TouchablaOpacity onPress={this.props.onPress}>
 <View style={{width:100,marginRight:5,backgroundColor:'#8afc7b'}}>
 <Text>{this.props.label}</Text>
 </View>
 </TouchablaOpacity>
 )
 }
 }
 class AppendCell extends Component {
 render () {
 return (
 <TouchablaOpacity onPress={this.props.onPress}>
 <View style={{width:50,marginRight:5,backgroundColor:'#a5a5a5'}}>
 <Icon name="add"/>
 </View>
 </TouchablaOpacity>
 )
 }

 }*/