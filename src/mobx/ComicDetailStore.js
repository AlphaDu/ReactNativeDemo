/**
 * Created by AlphaDu on 2017/3/31.
 */
const host = 'https://exhentai.org/?';
import spider from '../common/spider'
import {observable, computed, action, runInAction} from 'mobx'
import {Image, ImageEditor,ImageStore} from 'react-native'
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
    @observable author = "";
    @observable uploaderDate = "";
    @observable length = 0;
    @observable previews = [];
    @observable torrents = [];
    @observable g_id = '';
    @observable g_token = '';
    @pbservable tags = [];
    constructor(pageUrl){

    }
    combinedUrlToPreviewsUrl(urls) {
        urls.forEach((url) => {
            this.previews.concat(this.cutPreview(url));
        });
    }
    getNum() {
        return this.previews.length;
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
                ImageEditor.cropImage(url, {offset: {x: 100 * i, y: 0}, ...cropData}())
            }
        });
        return blockUrls;
    }
    cleanImageCache() {
        for (let i = 0; i < this.previews.length; i ++) {
            ImageStore.removeImageForTag(this.previews[i]);
        }
    }
}
