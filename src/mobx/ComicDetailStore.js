/**
 * Created by AlphaDu on 2017/3/31.
 */
const host = 'https://exhentai.org/?';
import spider from '../common/spider'
import {observable, computed, action, runInAction} from 'mobx'
class ComicDetailStore{
    @observable title  = "";
    @observable author = "";
    @observable uploaderDate = "";
    @observable length = 0;
    @observable previews = [];
    @observable torrents  = [];

}