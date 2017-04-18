/**
 * c
 * Created by AlphaDu on 2017/4/18.
 *
 */
import {observable, computed, action, runInAction} from 'mobx'
class AppStore {
    @observable cookie = '';
    @observable username = '';
    @action.bound() setCookie(cookie){
        this.cookie = cookie;
    }
}
let appStore = new AppStore();
export default appStore;