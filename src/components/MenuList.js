/**
 * Created by ljunb on 16/5/26.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Alert,
    Animated,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import TestPage1 from '../page/TestPage1.js'
import TestPage2 from '../page/TestPage2.js'

const menuRouterList = [
    {
        title: "TEST",
        childs: [
            {
                title: 'c1',
                component: <TestPage1 />
            },
            {
                title: 'c2',
                component: <TestPage2 />
            }
        ]
    },
    {
        title: "TEST",
        childs: [
            {
                title: 'c3',


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
        this.state = {
            currentPage: TestPage2
        }
    }



    _forward = (component) => {
        this.setState({
            currentPage: compnents
        })
    };

    renderView() {

    }

    render() {
        return (
            <View style={{flex:1,flexDirection:'row'}} >
                <ScrollView style={styles.menuContainer}>
                    {
                        menuRouterList.map(
                            (router, key) => {
                                return (
                                    <Category title={router.title} childs={router.childs} key={key}
                                    forward={(component)=>{
                                        this.setState({
                                            currentPage:component
                                        })
                                    }}/>
                                );
                            }
                        )
                    }
                </ScrollView>
                <ScrollView style={styles.menuContent}>
                    {
                        this.state.currentPage
                    }
                </ScrollView>
            </View>
        );
    }
}
class Category extends Component {
    constructor(props) {
        super(props);
        this._isOpen = false;
        this.state = {
            memberHeightAni: new Animated.Value(0)
        }
    }

    static propTypes = {
        title: React.PropTypes.string.isRequired,
        childs: React.PropTypes.array

    };

    change = () => {
        this._isOpen = !this._isOpen;
        Animated.timing(this.state.memberHeightAni, {
            toValue: 35 * this.props.childs.length * this._isOpen,
            duration: 200
        }).start();
    };
    isOpen = () => {
        return this._isOpen
    };

    shouldCompoentUpdate(nextProps, nextState) {
        return true;
    }

    renderContent() {

    }

    render() {
        return (
            <View style={{marginTop:5,alignItems: 'center'}}>
                <TouchableOpacity onPress={this.change} style={styles.cateButton}>
                    <View >
                        <Text >{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
                <Animated.View style={{
                width:100,
                height:this.state.memberHeightAni,
                justifyContent: 'center',
                marginTop:5,
                alignItems: 'center'
              }}>
                    {
                        this.props.childs.map(
                            (child, key) => {
                                return (<Member {...child}
                                    onPress={(title,component)=>{
                                        this.props.forward(component);
                                    }} key={key}/>)
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
                <TouchableHighlight onPress={()=>this.props.onPress(this.props.title,this.props.component)}>
                    <Text>{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const MenuListCell = ({
    title,
    component,
    onPress
}) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={()=>onPress(title)}>
                    <Text>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1C2B36',
    },
    member: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00ffff',
        width: 100,
        height: 20,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuContent: {
        backgroundColor: '#dcdcdc',
        flex: 3,
        flexGrow:2.5
    },
    cateButton: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#3CB259',
        height: 20,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center'
    }
});