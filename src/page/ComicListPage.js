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
import CookieManager from 'react-native-cookies'
import ListPager from '../components/ListPager'
import {observer} from 'mobx-react/native'
import mockdata from '../mock/comiclist';
let model = ['a', 'b', 'c', 'e', 'f', 'g', 'h'];
// CookieManager.setFromResponse('https://exhentai.org/', 'ipb_member_id=2390332; ipb_pass_hash=e9532dec36afd6d54eafa8ffb2e14168; igneous=aacb6fb36; s=1f6b1f494; uconfig=dm_t; lv=1491307778-1491735249', (res) => {
//     // `res` will be true or false depending on success.
//     console.log("Set cookie", res);
// });

import ComicListStore from '../mobx/ComicListStore';

CookieManager.set({
    name: 'cookie',
    value: 'ipb_member_id=2390332; ipb_pass_hash=e9532dec36afd6d54eafa8ffb2e14168; igneous=aacb6fb36; s=1f6b1f494; uconfig=dm_l; lv=1491833126-1491909096',
    domain: 'exhentai.org',
    origin: 'https://exhentai.org',
    path: '/',
    version: '1',
    expiration: '2017-07-30T12:30:00.00-05:00'
}, (err, res) => {
    console.log('cookie set!');
    console.log(err);
    console.log(res);
});
CookieManager.get('https://exhentai.org/', (err, res) => {
    console.log('Got cookies for url', res);
    // Outputs 'user_session=abcdefg; path=/;'
});
@observer
export default class ComicListPage extends Component {
    constructor(props) {
        super(props);
        this.store = new ComicListStore("https://exhentai.org/?inline_set=dm_l");
        this.store.load('https://exhentai.org/?inline_set=dm_l');
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            text: ''
        };
    }

    _renderRow = (data) => {
        return (
            <ListCell {...data}/>
        )
    };
    goBack = () => {

    };
    render() {
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={{flex:0.5,alignItems: 'center'}}>
                    <ListPager goBack={()=>this.store.goBack()} goFoward={()=>this.store.goFoward()} />
                </View>
                <View style={{flex:9}}>
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(this.store.comiclist.slice(0))}
                        renderRow={this._renderRow}
                        onEndReachedThreshold={10}
                        onEndReached={this._hasNext}/>
                </View>
                <Text>{this.store.total}</Text>
            </View>
        )
    };
}
const header = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Encoding": "gzip, deflate, sdch, br",
    "Accept-Language": "zh-CN,zh;q=0.8",
    "Cache-Control": "max-age=0",
    "Connection": "keep-alive",
     "Host": "exhentai.org",
    "Referer": "https://exhentai.org/s/a10270b82f/1045863-4",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
};
const ListCell = (props) => {
    return (
        <View>
            <View style={{flexDirection:'row',height:90}}>
                <View style={{flex:2}}>
                    <Image source={{url:props.cover,
                    headers:header}} style={{width:'100%',height:'100%'}}/>
                </View>
                <View style={{flex:8}}>
                    <Text>wocao{props.title}</Text>
                </View>
            </View>
            <View style={{bottom:0,position:'absolute',height:0.5,width:"100%",backgroundColor:"#6D6D6D"}}/>
        </View>
    );
};