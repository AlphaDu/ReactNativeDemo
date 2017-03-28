import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
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
let model = ['a','b','c'];

class ListPages extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        }
    }
    _renderRow = ()=>{

    };
    _hasNext = ()=>{

    };
    render(){
        return (
            <ListView

              dataSource={this.state.dataSource.cloneWithRows(model.slice(0))}
              renderRow={this._renderRow}
            onEndReached={this._hasNext}/>
        )
    }
}
const ListCell = (text)=> (
        <View style={{height:100,marginBottom:5,marginTop:5,backgroundColor:"#5ed68e",justifyContent:'center',alignItems: 'center'}}>
            <Text>wocao</Text>
        </View>
    )


export default ListCell
