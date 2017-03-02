/**
 * Created by ljunb on 16/5/26.
 */
import React, {Component,} from 'react'
import {
    View,
    Text,
    TouchHighLight,
    StyleSheet

} from 'react-native'

const menuRouter = [
    {
        category: "TEST"
        children: [
            {}
        ]
    },
    {},
];
export default class MenuList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View>

            </View>
        );
    }
}
class Category extends Component {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        onClick:React.propTypes.func.Required
    };
    static defaultState = {
        isOpen: false
    };
    change = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    isOpen = () => {
        return this.state.isOpen
    };
    _onClick =() =>{
        this.change();
        this.props.onClick();
    };
    render() {
        let _style = isOpen? styles.category_open : styles.catefory_close;
        return(
            <TouchableHighLight style={style} onClick={_onClick}/>
        );
    }
}
class Member extends Component{
    constructor(props){
        super(props);
    }
    render(){

    }
}
const styles = StyleSheet.create({
    category_open:{

    },
    catefory_close:{

    },
    member_normal:{

    },
    menber_selected:{

    }
});