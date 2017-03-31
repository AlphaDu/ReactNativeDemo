import {observable, runInAction, computed, action} from 'mobx'
class DetailStore{
    @observable cover = "";
    @observable title = "";
    @observable author = "";
    @observable uploadDate = '';
    @observable previews = [];
    constructor (cover,title,author,uploadDate,previews);

    @computed
    get getPicNum(){
        return this.previews.length;
    }
}