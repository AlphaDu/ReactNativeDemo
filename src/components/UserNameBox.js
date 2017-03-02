import React, {Component} from 'react';
import  {StyleSheet, TextInput, View, Button, Alert} from 'react-native';
const MAX_LENGTH = 16;
const REGREX = '';
//status  0:格式正常，1.校验不通过
//isFocus true:选中，false:未选中，
function onUserNameChange() {
    return {}
}
function illeagalValueNotify() {
    return {}
}
class UserNameBox extends Component {
    static defaultProps = {
        status: 0
    };

    constructor(props) {
        super(props);
    }

    render() {
        let lastStyle = {};
        if (this.props.isChoosen && this.props.isChoosen == true) {
            lastStyle = styles.onFocus;
        } else {
            lastStyle = styles.normal;
        }
        render(<TextInput maxLength={MAX_LENGTH}
                          onChangeText={
                              () => {
                                  this.props.dispatch(onUserNameChange());

                              }
                          }
        />);
    };
}
const styles = StyleSheet.create({
    onFocus: {},
    normal: {}
});