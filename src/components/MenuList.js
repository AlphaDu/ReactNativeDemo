/**
 * Created by ljunb on 16/5/26.
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Alert,
    Animated,
    ScrollView
} from 'react-native'

const menuRouterList = [
    {
        title: "TEST",
        childs: [
            {
                title: 'c1'
            },
            {
                title: 'c2'
            }
        ]
    },
    {
        title: "TEST",
        childs: [
            {
                title: 'c1'
            },
            {
                title: 'c2'
            }
        ]
    }
];
export default class MenuList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.menuContainer}>
                {
                    menuRouterList.map(
                        (router) => {
                            return (
                                <Category title={router.title} childs={router.childs}/>
                            );
                        }
                    )
                }
            </ScrollView>
        );
    }
}
class Category extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isOpen: false,
            memberHeightAni:new Animated.Value(0)
        }
    }
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        childs: React.PropTypes.array
    };
    static state = {
        isOpen: false,
        memberHeightAni:new Animated.Value(0)
    };
    change = () => {
        this.setState({
            isOpen:!this.state.isOpen
        });
        if(this.state.isOpen){
            Animated.timing(this.state.memberHeightAni,{toValue:20 * this.props.childs.length}).start();
        }else{
            Animated.timing(this.state.memberHeightAni,{toValue:0}).start();
        }
    };
    isOpen = () => {
        return this.state.isOpen
    };


    render() {
        return (
           <View style={{marginTop:5,alignItems: 'center'}}>
                <View style={styles.cateButton}>
                    <TouchableHighlight onPress = {this.change}>
                        <Text>{this.props.title}</Text>
                    </TouchableHighlight>
                </View>
           <Animated.View style={{
                width:100,
                height:this.state.memberHeightAni,
                backgroundColor:'#23B7E5',
                justifyContent: 'center',
                marginTop:5,
                alignItems: 'center'
              }}>
               {
                   this.props.childs.map(
                       (child) => {
                           return (<Member title={child.title}/>)
                       }
                   )
               }
           </Animated.View>
           </View>

        );
    }
}
class Member extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.member}>
                <TouchableHighlight>
                    <Text>{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    menuContainer: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#1C2B36',
        width:200,
        height:27
    },
    member: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00ffff',
        width: 100,
        height:30,
        marginTop:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateButton:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#3CB259',
        height:30,
        width:170,
        justifyContent: 'center',
        alignItems: 'center'
    }
});