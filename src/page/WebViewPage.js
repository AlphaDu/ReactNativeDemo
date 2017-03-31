/**
 * Created by ljunb on 2016/11/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    LayoutAnimation,
    Platform,
    UIManager,
    WebView
} from 'react-native';
export default class WebViewPage extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        if (this.webview){
            this.webview.injectJavaScript("indow.postMessage('injected');window.addEventListener('load',function(){window.postMessage('injected');alert('inject');});");
        }
    }

    render () {
        return (<WebView style={{marginTop:20}}
                         source={{uri:'https://www.baidu.com'}}
                         onMessage={(event)=>{
                             console.log(event)
                         }}
                         ref={webview => { this.webview = webview }}
                         injectedJavaScript="window.postMessage('injected');window.addEventListener('load',function(){document.write('test');window.postMessage('injected');alert('inject');});document.write('test');"/>)

    }
}
