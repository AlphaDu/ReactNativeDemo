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
    Animated
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LoadedList extends Component {
    render() {
        return (
            <View>
                <Header/>
                <ScrollView>
                    <LoadedCell title="TITLE IS TEST DSA SD DSDASDSADASDA" author="Zhang San" date="2016"/>
                    <LoadedCell title="TITLE2" author="Zhang San" date="2016"/>
                    <LoadedCell title="TITLE3" author="Zhang San" date="2016"/>
                    <LoadedCell title="TITLE3" author="Zhang San" date="2016"/>
                    <LoadedCell title="TITLE3" author="Zhang San" date="2016"/>
                    <LoadedCell title="TITLE3" author="Zhang San" date="2016"/>
                    <LoadedCell title="TITLE3" author="Zhang San" date="2016"/>
                    <LoadedCell title="TITLE3" author="Zhang San" date="2016"/>
                    <LoadedCell title="TITLE3" author="Zhang San" date="2016"/>
                    <LoadedCell title="TITLE3" author="Zhang San" date="2016"/>
                </ScrollView>
            </View>

        );
    }
}
const leftMoveRange = 70;
class LoadedCell extends Component {

    static propTypes = {
        image: React.PropTypes.string,
        title: React.PropTypes.string,
        author: React.PropTypes.string,
        date: React.PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            contentLeft: 0

        };
        this.showDelete = false
    }

    showDeleteButton() {

    }

    onSwitch = () => {

    };
    onStartMoveContent = (evt) => {
        this.showDelete = !(0 == this.state.contentLeft);
        this.startX = evt.nativeEvent.pageX;
    };
    onMoveContent = (evt) => {
        //移动范围：70
        let offSetX = evt.nativeEvent.pageX - this.startX;
        if ((!this.showDelete) && offSetX >= -70 && offSetX < 0) {
            console.log('to show delete');
            console.log('offset X:' + offSetX);
            this.setState({
                contentLeft: offSetX
            });
        } else if (this.showDelete && offSetX <= 70 && offSetX > 0) {
            console.log('to hide delete');
            console.log('offset X:' + offSetX);
            this.setState({
                contentLeft: offSetX - 70
            });
        }
    };
    onContentMoveFinish = (evt) => {
        console.log('show delete:' + this.showDelete);
        console.log(this.state.contentLeft);
        this.setState({
           contentLeft:this.showDelete?(this.state.contentLeft>-35?0:-70):(this.state.contentLeft<-35?-70:0)
        });

    };
    hideDeleteButton(){
        this.setState({
           contentLeft:0
        });
    }
    onClickDelete = () => {
        Alert.alert('Delete is Clicked!')
    };

    onClickContent = () => {

        Alert.alert('Content is Clicked!');
    };

    render() {
        return (
            <View style={{height:104,margin:2}}>
                <TouchableHighlight underlayColor="#ffffff" activeOpacity={0.7} style={{zIndex:100,left:this.state.contentLeft}}>
                    <View style={[styles.content]}
                          onPress={this.onClickContent}
                          onStartShouldSetResponder={()=>true}
                          onMoveShouldSetResponder={()=>true}
                          onResponderGrant={(evt)=>{this.onStartMoveContent(evt)}}
                          onResponderMove={(evt)=>this.onMoveContent(evt)}
                          onResponderRelease={(evt)=>this.onContentMoveFinish(evt)}>

                        <Image style={{
                            width:80,
                            height:98,
                            top:2,
                            marginLeft:2
                        }} source={require('../resource/img_timeline_default.png')}/>
                        <View style={{flex:1,height:200,width:200}}>
                            <Text style={{fontSize:20,marginLeft:3}}>{this.props.title}</Text>
                            <Text style={{fontSize:12,marginLeft:3}}>{this.props.author}</Text>
                        </View>

                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{position:'absolute',zIndex:0,right:0}} onPress={()=>{
                        Alert.alert('delete!');
                    }}>
                    <View style={styles.deleteButton} >
                        <Icon name="dropbox" color="#ffffff" style={{fontSize:50,marginTop:24,marginLeft:10}}/>
                    </View>
                </TouchableHighlight>
                <View style={styles.line}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        backgroundColor: 'gray',
        height: 102,
        flexDirection: 'row',

    },
    line: {
        height: 1,
        backgroundColor: 'black',
        marginTop: 2
    },
    deleteButton: {
        backgroundColor: 'red',
        width: 70,
        height: 102,
        right: 0,
        top: 0

    }
});
const Header = (onClickEdit,onClickSearch)=>{
    return(
        <View style={{backgroundColor:'#bdbdbd',height:40,flexDirection:'row'}}>
            <Text style={{fontSize:20,margin:6,flex:7}}>已下载</Text>
            <View style={{flexDirection:'row',flex:1}}>
                <TouchableHighlight >
                    <Icon name='magnifyingGlass' style={{fontSize:20,marginTop:8,maiginRight:20}}/>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Icon name="menu"  style={{fontSize:20,marginTop:8,marginRight:20}}/>
                </TouchableHighlight>
            </View>
        </View>
    );
};