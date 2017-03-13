import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Alert,
    Animated,
    ScrollView,
    Touchable
} from 'react-native'

const Y_TOP_LIMIT = 10;
const Y_BOTTOM_LIMIT = 300;
class TestPage2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',}}>
                <View style={{width:100,height:100,backgroundColor:"#ea0000",margin:10}}>
                    <Text >1</Text>
                </View>
                <View   ref="moveBlock" style={{position:'absolute',width:100,height:100,backgroundColor:"#ea00ff",margin:10,top:20}}
                    onStartShouldSetResponder={(event) =>{
                        console.log("onStartShouldSetResponder");
                        return true
                    }}
                    onMoveShouldSetResponder={(event) =>{
                        console.log("onMoveShouldSetResponder");
                        return true
                    }}
                        onResponderMove={event=>{
                            console.log("onResponderMove:X " + event.nativeEvent.pageX+" Y " + event.nativeEvent.pageY );
                           this.refs.moveBlock.props.style = {...this.refs.moveBlock.props.style , top:event.nativeEvent.pageY}
                        } }
                        onResponderTerminationRequest={
                            event=>{
                                console.log("onResponderTerminationRequest");
                                return false
                            }
                        }
                        onResponderReject={event=>{
                            console.log("reject!");
                        }}
                        onResponderTerminate={
                            event=>{
                                console.log("Terminate");
                            }
                        }
                    >
                        <Text style={{position:'absolute',width:100,height:100,backgroundColor:"#ea00ff",margin:10,top:30,}}>2</Text>
                </View>
                <View style={{width:100,height:100,backgroundColor:"#ea0000",margin:10}}>
                    <Text >3</Text>
                </View>
            </View>

        )
    }
    componentDidMount(){
        let moveBlock = this.refs.moveBlock;
        let moveBlock2 = this.refs.moveBlock;
    }
}
export default TestPage2;