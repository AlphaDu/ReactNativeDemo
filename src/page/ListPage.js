import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Button,
    TouchableHighlight,
    Platform,
    StyleSheet,
    Navigator,
    Touchable,
    ScrollView,
    Alert,
    Modal,
    Animated,
    ListView
} from 'react-native'
let model = ['a','b','c','e','f','g','h'];
import ListPager from '../components/ListPager'
import {observer} from 'mobx-react/native'
import {reaction} from 'mobx'
import ComicListStore from '../mobx/ComicListStore'
@observer
class ListPages extends Component{
    constructor(props){
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            text:''
        };

        // {
        //      currenPage
        //      pageInfo
        //      List
        //

        listdata = {
            currentPage:0,
            pageInfo:10234,
            List:[]
        };


    }
    _renderRow = (data)=>{
        return (
            <ListCell>{data}</ListCell>
        )
    };
    _hasNext = ()=>{
        addNum = this.state.text * 1;
        for (let i = 0;i <addNum;i ++){
            model.push(i);
        }
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(model.slice(0))
        });
    };
    appendList = (text) =>{
        for(let i = 0;i <text; i ++){
            model.push(i);
        }
        this.setState({
           dataSource:this.state.dataSource.cloneWithRows(model.slice(0))
        });
    };
    render(){
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <View style={{flex:0.5,alignItems: 'center'}}>
                    <ListPager />
                </View>
                <View style={{flex:9}}>
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(model.slice(0))}
                        renderRow={this._renderRow}
                        onEndReachedThreshold={10}
                        onEndReached={this._hasNext}/>
                </View>
                <View style={{flex:0.5,flexDirection:'row'}}>
                    <TextInput style={{flex:7,width:200}} onChangeText={(text)=>this.setState({text})} />
                    <Button title="DD" style={{flex:2,width:100}} onPress={()=>this.appendList(this.state.text)}/>
                </View>
            </View>

        )
    }
}
class ListCell extends Component{
    render (){
        return (
            <View style={{height:100,marginBottom:5,marginTop:5,backgroundColor:"#5ed68e",justifyContent:'center',alignItems: 'center'}}>
                <Text>{this.props.children}</Text>
            </View>
        )
    }
}
// const ListCell = (children)=> (
//         <View style={{height:100,marginBottom:5,marginTop:5,backgroundColor:"#5ed68e",justifyContent:'center',alignItems: 'center'}}>
//             <Text>{children}</Text>
//         </View>
//     );


export default ListPages
