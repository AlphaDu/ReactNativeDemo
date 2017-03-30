import {observable, runInAction, computed, action} from 'mobx'
import ProfileView from '../page/ProfileView'
import {Map} from 'immutable';
const defaultController = Map({title:'MAINPAGE',component:ProfileView});
class  DynamicTabStore{
    @observable controllers = [defaultController];
    @action close = (i) =>{

    };
    @action append =() =>{
      this.controllers.push(defaultController);
    }
}
const dynamicTabStore = new DynamicTabStore();
export default dynamicTabStore;