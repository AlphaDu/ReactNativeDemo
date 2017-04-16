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
            <View style={{flex:1,flexDirection:'row',height:27,backgroundColor:'#AE837E'}}>
                <TouchableOpacity style={{justifyContent:'center',alignItems: 'center',width:20}} onPress={()=>this.props.goBack()}>
                    <Icon name="caret-left" size={30}/>
                </TouchableOpacity>
                <TextInput style={{height:25,fontSize:25,padding:0,marginTop:10}}
                           onSubmitEditing={(event) => {
                               this.props.goSkip(event.nativeEvent.text)
                           }}/>
                <Text style={{height:30,fontSize:25}}>{"/" + this.props.totalPage}</Text>
                <TouchableOpacity style={{justifyContent:'center',alignItems: 'center',width:20}} onPress={()=>this.props.goFoward()}>
                    <Icon name="caret-right" size={30}/>
                </TouchableOpacity>
            </View>
        )
    }
}
