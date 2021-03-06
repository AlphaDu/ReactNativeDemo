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
    TouchableHighligh,
    ImageEditor
} from 'react-native'
import GridView from '../components/GridView'
import ComicDetailStore from '../mobx/ComicDetailStore'
import {observer} from 'mobx-react/native'
import {reaction} from 'mobx'
let mockdatas = [
    "https://ehgt.org/m/001047/1047307-01.jpg", "https://ehgt.org/m/001047/1047307-01.jpg", "https://ehgt.org/m/001047/1047307-01.jpg",
    "https://ehgt.org/m/001047/1047307-01.jpg", "https://ehgt.org/m/001047/1047307-01.jpg",
];
let preview = ["https://ehgt.org/m/001046/1046542-00.jpg"];
cropData = {
    size: {
        width: 100,
        height: 140
    },
    displaySize: {
        width: 200,
        height: 140
    },
    offset: {
        x: 100,
        y: 0
    }


};
// const home="https://exhentai.org/g/1050309/fcce0646da/";
const home = "https://exhentai.org/g/692165/9c00096e8f/";
@observer
export default class ComicDetailPage extends Component {
    constructor(props) {
        super(props);
        let params = {};
        if(this.props.navigation){
            params = this.props.navigation.state.params;
        }
        if (params.url) {
            this.comicDetailStore = new ComicDetailStore(params.url);
        }else{
            this.comicDetailStore = new ComicDetailStore(home);
        }
    }

    static defaultProps = {
        url: home
    };

    componentWillMount() {
        this.comicDetailStore.combinedUrlToPreviewsUrl(this.comicDetailStore.merged_imgs)
    }

    renderItem = (cellData, previews) => (
        <ImageCell  {...cellData} pr={previews}/>
    );

    onSuccess = (str) => {
        console.log("success");
        this.setState({
            urls: [str]
        });

    };
    onFail = (err) => {

    };

    componentDidMount() {
        ImageEditor.cropImage("https://ehgt.org/m/001046/1046542-00.jpg", cropData, this.onSuccess, this.onFail);

    }

    render() {
        const {title, title_jpn, cover, links, previews, tags, isFetching, cellData} =  this.comicDetailStore;
        return (
            <ScrollView style={{backgroundColor:"#8E8E93"}}>
                <Header title={title}
                        image={cover} uploaderTime="20170204" tags/>

                <View >
                    <Text>wocaoßßß</Text>
                    <GridView
                        items={cellData}
                        itemsPerRow={3}
                        renderItem={(data)=>this.renderItem(data,previews)}
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
                       source={{url:props.preview}}/>
            </TouchableOpacity>
        </View>

    )
}

const MButton = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonStyle}>
            <Text style={{color:'#ffffff'}}>{props.title}</Text>
        </View>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    header: {},
    items: {},
    buttonStyle: {
        height: 25, width: 60, borderColor: "#ffffff", borderWidth: 2, alignItems: 'center',
        justifyContent: 'space-around', borderRadius: 5
    }
});