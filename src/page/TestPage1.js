import React, {Component} from 'react'
import {
    View,
    Text, TouchableHighlight,
    StyleSheet,
    Alert,
    Animated,
    ScrollView,
    ListView,
    RefreshControl,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import TabBar from '../components/TabBar'
import ImagePicker from 'react-native-image-picker'
import Camera from 'react-native-camera'
const pickerOption={
    title: 'select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
        skipBackup: true,
        path: 'iamges'
    }
};
const tabTitles=['食物百科', '逛吃', '我的'];
const tabIcons=[
    require('../resource/ic_tab_search.png'),
    require('../resource/ic_tab_homepage.png'),
    require('../resource/ic_tab_my.png')
];
const tabSelectedIcon=[
    require('../resource/ic_tab_search_select.png'),
    require('../resource/ic_tab_homepage_select.png'),
    require('../resource/ic_tab_my_select.png')
];
export default class ListViewBasics extends Component {
    // 初始化模拟数据
    constructor (props) {
        super(props);
        this._isRefreshing=false;
        const ds=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    _onRefresh=() => {
        this._isRefreshing=true;
        setTimeout(() => {
            this._isRefreshing=false
        }, 10000);
    };
    _onPress=() => {
        ImagePicker.showImagePicker(pickerOption, (response) => {
            console.log('Response = ', response);

            if (response.didCancel){
                console.log('User cancelled image picker');
            }
            else if (response.error){
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton){
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source={uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    };
    _onPressCam=() => {
        const options ={};
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    };

    render () {
        return (
            <View style={{flex: 1,
            alignItems: 'center',flexDirection:'column', paddingTop: 22}}>
                <TouchableHighlight style={{width:100,height:100,justifyContent:'center',alignItems: 'center'}}
                                    onPress={()=>this._onPress()}>
                    <View
                        style={{width:100,height:100,justifyContent:'center',alignItems: 'center',backgroundColor:'#C0FF3E'}}>
                        <Text>text</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{width:100,height:100,margin:10}}
                                    onPress={()=>this._onPressCam()}>
                    <View
                        style={{width:100,height:100,justifyContent:'center',alignItems: 'center',backgroundColor:'#C0FF3E'}}>
                        <Text>text</Text>
                    </View>
                </TouchableHighlight>
                <Camera ref={(cam)=>{this.camera = cam}}
                        style={{flex: 1,justifyContent: 'flex-end',alignItems: 'center'}}
                        aspect={Camera.constants.Aspect.fill}/>
                <Image source={this.state.avatarSource} style={{width:100,height:100}}/>
            </View>
        );
    }
}