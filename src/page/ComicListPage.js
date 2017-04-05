import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ListView,
    TouchableOpacity,
    Image,
    Animated,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import ListPager from '../components/ListPager'
import mockdata from '../mock/comiclist';
let model = ['a','b','c','e','f','g','h'];

export default class ComicListPage extends Component{
    constructor (props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            text: ''
        };
    }
    _renderRow = (data)=>{
        return (
            <ListCell {...data}/>
        )
    };
    goBack = () =>{

    };
    goFoward = () =>{

    };
    render(){
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={{flex:0.5,alignItems: 'center'}}>
                    <ListPager />
                </View>
                <View style={{flex:9}}>
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(mockdata.list.slice(0))}
                        renderRow={this._renderRow}
                        onEndReachedThreshold={10}
                        onEndReached={this._hasNext}/>
                </View>
            </View>
        )
    };
}
const header = {
    "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Encoding":"gzip, deflate, sdch, br",
    "Accept-Language":"zh-CN,zh;q=0.8",
    "Cache-Control":"max-age=0",
    "Connection":"keep-alive",
    "Cookie":"ipb_member_id=2390332; ipb_pass_hash=e9532dec36afd6d54eafa8ffb2e14168; igneous=aacb6fb36; s=1f6b1f494; uconfig=dm_t; lv=1491288799-1491307778",
    "Host":"exhentai.org",
    "Referer":"https://exhentai.org/s/a10270b82f/1045863-4",
    "Upgrade-Insecure-Requests":"1",
    "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
};
const ListCell = (props)=> {
    return (
        <View>
            <View style={{flexDirection:'row',height:90}}>
                <View style={{flex:2}}>
                    <Image source={{url:props.cover,
                    headers:header}}/>
                </View>
                <View style={{flex:8}}>
                    <Text>wocao{props.title}</Text>
                </View>
            </View>
            <View style={{bottom:0,position:'absolute',height:0.5,width:"100%",backgroundColor:"#6D6D6D"}}/>
        </View>
    );
};