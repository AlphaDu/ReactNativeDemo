'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    Text,
    Button
} from 'react-native';
import Drawer from 'react-native-drawer-menu';
const {width, height} = Dimensions.get('window');

const url = "http://www.58.com";
export default class Mainpage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // prepare your drawer content
        var drawerContent = (<View style={styles.drawerContent}>
            <View style={styles.leftTop}/>
            <View style={styles.leftBottom}>
                <View><Text>Drawer Content</Text></View>
            </View>
        </View>);
        // customize drawer's style (Optional)
        var customStyles = {
            drawer: {
                shadowColor: '#000',
                shadowOpacity: 0.4,
                shadowRadius: 10
            },
            mask: {}, // style of mask if it is enabled
            main: {} // style of main board
        };
        return (
            <View style={styles.container}>
                <Drawer ref="drawer"
                        style={styles.container}
                        drawerWidth={300}
                        drawerContent={drawerContent}
                        type={Drawer.types.Overlay}
                        customStyles={{drawer: styles.drawer}}
                        drawerPosition={Drawer.positions.Right}
                        onDrawerOpen={() => {console.log('Drawer is opened');}}
                        onDrawerClose={() => {console.log('Drawer is closed')}}
                >
                    <View style={styles.content}>
                        <Text>{Object.values(Drawer.positions).join(' ')}</Text>
                        <Text>{Object.values(Drawer.types).join(' ')}</Text>

                    </View>

                </Drawer>
                <Button onPress={()=>{
                    let _drawer = this.refs.drawer;
                    _drawer.openDrawer();
                }} title="test"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f1f1f1',
        paddingTop:20,
        borderWidth:2
    },
});