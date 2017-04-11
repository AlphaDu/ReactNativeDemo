/**
 * Created by AlphaDu on 2017/3/31.
 */
const host = 'https://exhentai.org/?';
import spider from '../common/spider'
import {observable, computed, action, runInAction} from 'mobx'
import {Image, ImageEditor, ImageStore} from 'react-native'
import load from '../common/spiders/ComicDetailPageSpider';
const cropData = {
    size: {
        width: 100,
        height: 140
    },
    displaySize: {
        width: 100,
        height: 140
    }
};
class ComicDetailStore {
    @observable title = "";
    @observable title_jpn = "";
    @observable cover = ""
    @observable author = "";
    @observable links = "";
    @observable rating = 0;
    @observable page = 0;
    @observable total_page = 0;
    @observable uploaderDate = "";
    @observable length = 0;
    @observable previews = [];
    @observable torrents = [];
    @observable g_id = '';
    @observable g_token = '';
    @observable tags = {};
    @observable isFetching = false;
    constructor(pageUrl) {
        this.loadDataFromUrl(pageUrl);
    }
    @action loadDataFromUrl = async(url)=>{
        let html = await this._fetchHtmlFromUrl(url);
        runInAction(()=>{
            //TODO
            let data = load(html);
            this.title = data.tite;
            this.title_jpn = data.title_jpn;
            this.cover = data.cover;
            this.links = data.links;
            this.rating = data.rating;
            this.page = data.page;
            this.total_page = data.total_page;
            this.tags = data.tags;
            this.g_id = data.g_id;
            this.g_token = data.g_token;
        });
    };

    combinedUrlToPreviewsUrl(urls) {
        urls.forEach((url) => {
            this.previews.concat(this.cutPreview(url));
        });
    }

    getNum() {
        return this.previews.length;
    }

    _fetchHtmlFromUrl(url) {
        return new Promise((resolve, reject) => {
            const URL = url;
            fetch(URL).then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    reject('error:' + response.status);
                }
            }).then(htmlData =>{
                if(htmlData){
                    resolve(htmlData);
                }else{
                    reject('获取页面失败');
                }
            }).catch(error=>{
                reject('error');
            });
        });
    }

    cutPreview(url) {
        const blockUrls = [];
        const onSuccess = (str) => {
            blockUrls.push(str)
        };
        const onError = (err) => {
            console.log(err)
        };
        Image.getSize(url, (width, height) => {
            let blockNum = parseInt(width / 100);
            for (let i = 0; i < blockNum; i++) {
                ImageEditor.cropImage(url, {offset: {x: 100 * i, y: 0}, ...cropData},onSuccess,onError);
            }
        });
        return blockUrls;
    }

    cleanImageCache() {
        for (let i = 0; i < this.previews.length; i++) {
            ImageStore.removeImageForTag(this.previews[i]);
        }
    }
}
