/**
 * Created by AlphaDu on 2017/3/31.
 */
const host = 'https://exhentai.org/?';
import spider from '../common/spider'
import {observable, computed, action, runInAction} from 'mobx'
class ComicListStore {
    @observable total = 0;
    @observable currentPage = 0;
    @observable comiclist = [];
    @observable tags = [];
    @observable cates = [];
    @observable isFetching = false;
    @observable isLegal = false ;
    @observable isConnect = false ;
    @observable errorMsg = '';
    constructor(){
       this.initPage();
    }
    @action initPage = async(tags, cates) => {
        try{
            this.isFetching = true;
            let html = await this._fetchDataFromUrl(host);
            this.isFetching = false;
            this.isConnect = true;
            let result = spider.parseComicList();
            this.isLegal = result.isLegal;
            if(!isLegal)
                    return null;

        }catch(err){
            this.errorMsg = err;
        }
    };

    @action nextPage = async() => {
        this.page ++;

    };
    @action prePage = async() => {
        this.page --;
    };
    @action toPage = async(i) => {
        let html =await _fetchDataFromUrl(host);
    };
    _fetchDataFromUrl = (url) =>{
      return new Promise((resolve,reject)=>{
          fetch(url).then(response =>{
              if(response.status == 200){
                  return response.json()
              }else{
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