import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,StyleSheet,
    Dimensions, Platform, PixelRatio,ScrollView
} from 'react-native'
import ListPager from '../components/ListPager'
export default class ProfileView extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <View style={{flex:1,backgroundColor:'#f5f5f5'}}>
                <HeaderView/>
            </View>
        );
    };
}
const HeaderView = ({settingAction, loginAction}) => {
    return (
        <ScrollView
            contentContainerStyle={{width: gScreen.width, height: 230, alignItems: 'center', backgroundColor: '#87CEFF'}}
            source={require('../resource/img_my_head.png')}
        >
            <View style={[styles.header, {width: gScreen.width}]}>
                <Text style={{color: 'white', fontSize: 16}}>游客</Text>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.settingContainer}
                    onPress={settingAction}
                >
                    <Image
                        style={{width: 20, height: 20}}
                        source={require('../resource/ic_my_setting.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={{width: 80, height: 80}}
                        source={require('../resource/img_default_avatar.png')}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.loginContainer}
                    onPress={loginAction}
                >
                    <Text style={{color: 'white'}}>点击登录</Text>
                </TouchableOpacity>
            </View>
            <ListPager/>
        </ScrollView>
    )
};
global.gScreen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    navBarHeight: Platform.OS === 'ios' ? 64 : 50,
    navBarPaddingTop: Platform.OS === 'ios' ? 20 : 0,
    onePix: 1 / PixelRatio.get(),
    isIOS: Platform.OS === 'ios'
}

global.gColors = {
    themColor: 'rgb(217, 51, 58)',
    bgColor: '#f5f5f5',
    borderColor: '#d5d5d5'
}
const ProfileCell = ({
    title,
    imageSource,
    style,
    onPress
}) => {

} ;
const styles = StyleSheet.create({
    header: {
        height: gScreen.isIOS ? 44 : 50,
        marginTop: gScreen.isIOS ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingContainer: {
        height: gScreen.isIOS ? 44 : 50,
        width: gScreen.isIOS ? 44 : 50,
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    loginContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 2
    },
    cellContainer: {
        borderColor: '#d9d9d9',
        marginTop: 15,
        backgroundColor: 'white'
    },
    staticCell: {
        flexDirection: 'row',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cellStyle: {
        flex: 1,
        height: 46,
        borderColor: '#d9d9d9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15
    }
});