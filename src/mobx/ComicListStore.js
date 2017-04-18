/**
 * Created by AlphaDu on 2017/3/31.
 */
const host = 'https://exhentai.org/?';
import spider from '../common/spider'
import {Map, List} from 'immutable'
import {observable, computed, action, runInAction} from 'mobx'
const HOST = 'https://exhentai.org/?';
export default class ComicListStore {
    @observable total = 0;
    @observable currentPage = 0;
    @observable comiclist = [];
    @observable tags = [];
    @observable cates = [];
    @observable isFetching = false;
    @observable isLegal = false;
    @observable isConnect = false;
    @observable errorMsg = '';

    constructor(url = HOST) {

        this.load(url);

    }

    @action load = async(url) => {
        let html = await  this._fetchHtmlFromUrl(url);
        runInAction(() => {
            let data = spider.parseComicList(html);
            this.comiclist = data.list;
            this.currentPage = data.currentPage;
            this.total = data.total;
        });

    };
    @action initPage = async(tags, cates) => {
        try {
            this.isFetching = true;
            let html = await this._fetchDataFromUrl(host);
            this.isFetching = false;
            this.isConnect = true;
            let result = spider.parseComicList();
            this.isLegal = result.isLegal;
            if (!isLegal)
                return null;

        } catch (err) {
            this.errorMsg = err;
        }
    };

    @action nextPage = async() => {
        this.page++;
    };
    @action prePage = async() => {
        this.page--;
    };
    @action goFoward = async() => {
        try {

            if (this.currentPage === this.total) return;
            let nextPage = parseInt(this.currentPage) + 1;
            let url = HOST + 'page=' + nextPage;
            let html = await this._fetchHtmlFromUrl(url);
            runInAction(() => {
                this.isFetching = false;
                let data = spider.parseComicList(html);
                this.putDataToStore(data);
                this.page = nextPage;
            });
        } catch (err) {
            console.log(err);
        }
    };
    @action.bound
    putDataToStore(data) {
        this.comiclist.replace(data.list);
        this.currentPage = data.currentPage;
        this.total = data.total;
    }
    @action clearImage(){

        this.comiclist = [];

    }
    @action goBack = async() => {
        try{

        if (this.currentPage === 0) return;
        let nextPage = this.page - 1;
        let url = HOST + 'page=' + nextPage;
        let html = await this._fetchHtmlFromUrl();
        runInAction(() => {
        this.isFetching = false;
        data = spider.parseComicList(html);
        this.putDataToStore(data);
        this.page = nextpage;
        });
        }catch(err){
            console.log(err);
        }
    };
    @action goToPage = async(i) => {
        if (i < 0 || i > this.total || i === this.currentPage) return;
        let nextPage = i;
        let html = await this._fetchHtmlFromHtml();
        runInAction(() => {
        this.isFetching = false;
        data = spider.parseComicList(html);
        this.putDataToStore(data);
        this.page = nextpage;
        });

    };

    _fetchHtmlFromUrl(url) {
        return new Promise((resolve, reject) => {
            const URL = url;
            fetch(URL).then(response => {
                if (response.status == 200) {
                    return response.text();
                } else {
                    reject('error:' + response.status);
                }
            }).then(htmlData => {
                if (htmlData) {
                    resolve(htmlData);
                } else {
                    reject('获取页面失败');
                }
            }).catch(error => {
                reject('error');
            });
        });
    };

    _fetchDataFromUrl = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    return null;
                }
            }).then(responseData => {
                if (responseData) {
                    resolve(responseData)
                } else {
                    reject('请求出错！')
                }
            }).catch(error => {
                console.log(`Fetch evaluating list error: ${error}`)
                reject('网络出错！')
            })
        });
    }
}
function fetchHtml(url) {
    return new Promise().then
}