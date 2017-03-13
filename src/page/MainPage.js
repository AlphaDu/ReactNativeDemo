import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    Text,
    Button,
    Animated,
    TouchableHighlight,
    Navigator
} from 'react-native';
import Drawer from 'react-native-drawer';
import TabBarView from '../page/TabBarView.js';
const initialPageName = 'TabBarView';
const initialPage = TabBarView;
export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Navigator
                    initialRoute={{name:initialPageName,component:initialPage}}
                    renderScene={
                        (route,navigator)=>{
                            let Component = route.component;
                            return (
                                <Component navigator = {navigator} {...navigator.passProps}/>
                            );
                        }
                    }
                    configureScene={
                        (route)=>{
                          if(route.sceneConfig){
                              return route.sceneConfig;
                          }
                          return {
                              ...Navigator.SceneConfigs.PushFromRight,
                              gestures:{}
                          }
                        }
                    }

                />
            </View>
        )
    };

}

// export default class mainPage extends Component{
//     constructor (props){
//         super(props);
//         this.state = {
//           heightAni:new Animated.Value(50)
//         }
//     }
//     render(){
//         return (
//             <View style={styles.container}>
//                 <View style={styles.cate}>
//                 <TouchableHighlight onPress={()=>{}}>
//                     <Text>test</Text>
//                 </TouchableHighlight>
//             </View>
//                 <Animated.View style={{
//                     width:100,
//           height:this.state.heightAni,
//         backgroundColor:'#23B7E5',
//         justifyContent: 'center',
//         marginTop:5,
//         alignItems: 'center'
//                 }}>
//                     <TouchableHighlight onPress={()=>{
//                             Animated.timing(
//                                 this.state.heightAni,
//                                 {toValue:200}
//                             ).start();
//                     }} >
//                         <Text>test</Text>
//                     </TouchableHighlight>
//                 </Animated.View>
//                 <View style={styles.cate}>
//                     <TouchableHighlight onPress={()=>{}}>
//                         <Text>test</Text>
//                     </TouchableHighlight>
//                 </View>
//             </View>
//         );
//     }
// }
// styles = StyleSheet.create({
//     container:{
//         flex:1,
//         flexDirection:'column',
//         backgroundColor:'#1C2B36',
//         alignItems: 'center',
//         width:300
//     },
//     cate:{
//         width:100,
//         height:50,
//         backgroundColor:'#23B7E5',
//         justifyContent: 'center',
//         marginTop:5,
//         alignItems: 'center'
//     },
//     member:{
//
//     }
// });
