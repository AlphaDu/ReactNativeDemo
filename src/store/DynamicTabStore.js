import {observable, runInAction, computed, action} from 'mobx'
import ProfileView from '../page/ProfileView'
import TestPage2 from '../page/TestPage2'
import TestPage1 from '../page/TestPage1'
import WebViewPage from '../page/WebViewPage'
import LoadedList from '../page/LoadedList'
import {Map} from 'immutable';
const defaultController = {id:0,title:'MAINPAGE',component:ProfileView};
const testPages = [
    {title:'MAINPAGE',component:ProfileView},
    {title:'PAGE1',component:TestPage1},
    {title:'PAGE2',component:TestPage2},
    {title:'WEBVIEW',component:WebViewPage},
    {title:'LOAD',component:LoadedList}
];
class  DynamicTabStore{
    @observable pageid = 0;
    @observable controllers = testPages;
    @action close = (i) =>{

    };
    @action append =() =>{
        this.pageid ++;
        this.controllers.push({id:this.pageid,...defaultController});

    };
    @action removePage = (index) => {
        this.controllers = this.controllers.slice(0,index).concat(this.controllers.slice(index + 1));
    };
}
const dynamicTabStore = new DynamicTabStore();
export default dynamicTabStore;