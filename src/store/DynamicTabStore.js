import {observable, runInAction, computed, action} from 'mobx'
import ProfileView from '../page/ProfileView'
import TestPage2 from '../page/TestPage2'
import TestPage1 from '../page/TestPage1'
import WebViewPage from '../page/WebViewPage'
import LoadedList from '../page/LoadedList'
import ListPage from '../page/ListPage'
import {Map} from 'immutable';
const defaultController = {id:0,title:'MAINPAGE',component:ProfileView,tabKey:0};
const testPages = [
    {title:'MAINPAGE',component:ProfileView,tabKey:1},
    {title:'PAGE1',component:TestPage1,tabKey:2},
    {title:'List',component:ListPage,tabKey:3},
    {title:'WEBVIEW',component:WebViewPage,tabKey:4},
    {title:'LOAD',component:LoadedList,tabKey:5}
];
class  DynamicTabStore{

    @observable controllers = testPages;
    @observable tabKey = 5;
    @action close = (i) =>{

    };
    @action append =() =>{
        this.tabKey ++;
        this.controllers.push({id:this.pageid,...defaultController,tabKey:this.tabKey});

    };
    @action removePage = (index) => {
        this.controllers = this.controllers.slice(0,index).concat(this.controllers.slice(index + 1));
    };
}
const dynamicTabStore = new DynamicTabStore();
export default dynamicTabStore;