/**
 * Created by ljunb on 2017/3/15.
 * 首页->分类->食物列表
 */
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ListView,
    ScrollView,
    TouchableOpacity,
    Image,
    Animated,
    ActivityIndicator,
    Button,
    TouchableHighlight
} from 'react-native'
import GridView from '../components/GridView'
import ComicDetailStore from '../mobx/ComicDetailStore'
import {observer} from 'mobx-react/native'
let mockdatas = [
    "https://ehgt.org/m/001047/1047307-01.jpg", "https://ehgt.org/m/001047/1047307-01.jpg", "https://ehgt.org/m/001047/1047307-01.jpg",
    "https://ehgt.org/m/001047/1047307-01.jpg", "https://ehgt.org/m/001047/1047307-01.jpg",
];
@observer
export default class ComicDetailPage extends Component {
    constructor(props) {
        super(props);

    }

    renderItem = (url) => (
        <ImageCell url={url}/>
    );

    render() {
        return (
            <ScrollView>
                <Header title="title"
                        author="author"
                        image="https://ehgt.org/m/001047/1047307-01.jpg" uploaderTime="20170204"/>

                <View>
                    <Text>wocaoßßß</Text>
                    <GridView
                        items={mockdatas}
                        itemsPerRow={3}
                        renderItem={this.renderItem}
                        style={{backgroundColor: '#F5FCFF'}}/>
                </View>


            </ScrollView>
        );
    }
}
const Header = (props) => {
    return (
        <View style={{flexDirection:'row',height:160,backgroundColor:"#979797"}}>
            <Image source={{url:props.image}} style={{margin:9,flex:2,height:120,width:80}}/>
            <View style={{flex:8}}>

                <Text style={{fontSize:20,marginLeft:3,marginTop:9}}>{props.title}</Text>
                <View style={{bottom:29,position:'absolute'}}>
                    <MButton style={styles.button} title="下载" onPress={()=>{}}
                    />
                </View>

            </View>
        </View>
    )
};

const ImageCell = props => {
    return (

        <View style={{width:"30%",marginTop:2,marginBottom:2,borderWidth:0.5,borderColor:"#000000",flexDirection:'row', alignItems: 'center',
        justifyContent: 'space-around'}}>
            <TouchableOpacity>
                <Image style={{width:80,height:120,margin:3}}
                       source={props.url===undefined?require('../resource/img_timeline_default.png'):{url:props.url}}/>
            </TouchableOpacity>
        </View>

    )
}

const MButton =  (props) =>(
    <TouchableOpacity onPress = {props.onPress}>
        <View style={styles.buttonStyle}>
            <Text style={{color:'#ffffff'}}>{props.title}</Text>
        </View>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    header: {},
    items: {},
    buttonStyle: {height: 25, width: 60, borderColor: "#ffffff", borderWidth:2,alignItems: 'center',
        justifyContent: 'space-around',borderRadius:5}
});