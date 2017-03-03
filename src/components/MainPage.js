import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    Text,
    Button,
    Animated,
    TouchableHighlight
} from 'react-native';
export default class mainPage extends Component{
    constructor (props){
        super(props);
        this.state = {
          heightAni:new Animated.Value(50)
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.cate}>
                <TouchableHighlight onPress={()=>{}}>
                    <Text>test</Text>
                </TouchableHighlight>
            </View>
                <Animated.View style={{
                    width:100,
          height:this.state.heightAni,
        backgroundColor:'#23B7E5',
        justifyContent: 'center',
        marginTop:5,
        alignItems: 'center'
                }}>
                    <TouchableHighlight onPress={()=>{
                            Animated.timing(
                                this.state.heightAni,
                                {toValue:200}
                            ).start();
                    }} >
                        <Text>test</Text>
                    </TouchableHighlight>
                </Animated.View>
                <View style={styles.cate}>
                    <TouchableHighlight onPress={()=>{}}>
                        <Text>test</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#1C2B36',
        alignItems: 'center',
        width:300
    },
    cate:{
        width:100,
        height:50,
        backgroundColor:'#23B7E5',
        justifyContent: 'center',
        marginTop:5,
        alignItems: 'center'
    },
    member:{

    }
});