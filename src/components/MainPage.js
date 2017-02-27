import React, {Component} from 'react';
import {Text} from 'react-native';
import {Provider,connect} from 'react-redux';
class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Text>this is Guide Page</Text>)
    }
}
export default connect(
    (state) => {
        return {
           user:state.user
        }
    }
)(MainPage);