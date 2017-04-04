/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    AsyncStorage
} from 'react-native';
import Root from './src/root.js'
/*
 import Storage from 'react-native-storage'
export default class ReactNativeDemo extends Component {
    constructor(props) {
            super(props);
            appStorage.load({
                key: 'isFirstEnter',

            }).then(result => {
                Alert.alert("You used this app before!")
            }).catch(error => {
                Alert.alert('This is your first time of using this app! ');
                appStorage.save({
                    key: 'isFirstEnter',
                    rowData: {
                        isFirstTime: false
                    }
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Natives!
                </Text>
                <Text style={styles.instructions}>
                    To get starteds, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap RS on your keyboard to reload,{'\n'}
                    Shake or ress menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
 alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
let appStorage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    enableCache: true,
    defaultExpires: null,
    sync: {

    }
});
*/

AppRegistry.registerComponent('ReactNativeDemo', () => Root);
