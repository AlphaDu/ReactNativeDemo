/**
 * Created by AlphaDu on 2017/4/2.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity, StyleSheet,
    Dimensions, Platform, PixelRatio, ScrollView,
    TextInput

} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Pager extends Component {
    constructor(props) {
        super(props);

    }

    static propTypes = {
        goBack: React.PropTypes.func,
        goFoward: React.PropTypes.func,
        goSkip: React.PropTypes.func,
        currentPage: React.PropTypes.number
    };

    render() {
        return (
            <View style={{flex:1,flexDirection:'row',height:27, justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity style={{justifyContent:'center',alignItems: 'center',width:20}} onPress={()=>this.props.goBack()}>
                    <Icon name="caret-left" size={30}/>
                </TouchableOpacity>
                <TextInput style={{width:50,fontSize:15,padding:0,margin:0}}
                           onSubmitEditing={(event) => {
                               this.props.goSkip(event.nativeEvent.text)
                           }}/>
                <Text style={{fontSize:15,margin:0,padding:0 }}>{"/" + this.props.totalPage}</Text>
                <TouchableOpacity style={{justifyContent:'center',alignItems: 'center',width:20}} onPress={()=>this.props.goFoward()}>
                    <Icon name="caret-right" size={30}/>
                </TouchableOpacity>
            </View>
        )
    }
}
