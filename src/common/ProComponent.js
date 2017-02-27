import React,{Component} from 'react'
export default class ProComponent extends Component{
    constructor(props){
        super(props);
    }
}
ProComponnent.contextTypes = {
    store:React.propTypes.object
};