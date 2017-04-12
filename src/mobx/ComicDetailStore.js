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
export default class ComicDetailStore {
    @observable title = "";
    @observable title_jpn = "";
    @observable cover = "";
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

    @action loadDataFromUrl = async(url) => {
        let html = await this._fetchHtmlFromUrl(url);
        runInAction(() => {
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
            this.combinedUrlToPreviewsUrl(data.merged_imgs);

        });


    };

    @action combinedUrlToPreviewsUrl = (urls) => {
        let res = [];
        urls.forEach((url) => {
            let arr = this.cutPreview(url);
            res.concat(arr);
        });
        console.log(res);
        return res;
    };

    @computed
    get cellData() {
        let datas = [];
        for (let i = 0; i < this.links.length; i++) {
            datas.push({
                preview: this.previews[i],
                link: this.links[i]
            })
        }
        return datas
    }

    @computed
    get Num() {
        return this.previews.length;
    }

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
    }

    @action cutPreview(url) {
        const blockUrls = [];
        const onSuccess = (str) => {
            runInAction(()=>{
                this.previews.push(str);
            })
        };
        const onError = (err) => {
            console.log(err)
        };
        Image.getSize(url, (width, height) => {
            let blockNum = parseInt(width / 100);
            for (let i = 0; i < blockNum; i++) {
                ImageEditor.cropImage(url, {offset: {x: 100 * i, y: 0}, ...cropData}, onSuccess, onError);
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
