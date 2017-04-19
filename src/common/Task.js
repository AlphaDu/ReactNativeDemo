/**
 *
 * Created by AlphaDo on 2017/4/19.
 */
import {ImageEditor, ImageStore} from 'react-native'
const CROP_DATA={};
class ImagesDownloadTask {
    constructor () {
        //{url:isDownload?true:false}
        this.taskPool={};
        //总任务状态 0：未开始，-1，暂停，1，下载中，2，下载完成。
        this.status = 0 ;
        this.isPause=false;
        this.listener={
            onPause: [],
            onStart: [],
            onFinish: [],
            onCancel: [],
            onInit: []
        }
    }

    cancel () {

    }
    getProgressInfo(){
        let total = 0;
        let succeed = 0;
        let failed = 0;
        for(let url in this.taskPool){
            if (this.taskPool.hasOwnProperty(url)){
                if(this.taskPool[url] == 1){

                }else if (this.taskPool[url] == -1 ){

                }
            }
        }
    }
    addEventListner (evt, callBack) {
        switch ( evt ) {
            case 'onPause':
                this.listener.onPause.push(callBack);
                break;
            case 'onStart':
                this.listener.onStart.push(callBack);
                break;
            case 'onFinish':
                this.listener.onFinish.push(callBack);
                break;
            case 'onCancel':
                this.listener.onCancel.push(callBack);
                break;
            case 'onInit':
                this.listener.onInit.push(callBack);
                break;
            default:
                return;
        }
    }

    continue () {

    }



    pause () {
        if(this.status === 1)
            this.status = -1;
    };
    async start () {
        for (let url in this.taskPool) {
            if (this.taskPool.hasOwnProperty(url) &&this.taskPool[url] == 0){
                try {
                    let storeUrl=await _downloadImageToStore(url);
                    this.taskPool[url] = 1;
                } catch (error) {
                    this.taskPool[url]= -1
                }
            }
        }
    }

    init () {
        let pageUrls=getPageUrlsFromDetailPage(url);
        let taskQueue=new Array(16);
        pageUrls.forEach((pageUrl) => {
            let imgUrl=getImageUrlFromPageUrl(url);
            //-1下载失败，0未下载， 1下载成功
            taskQueue[imgUrl]=0
        })
    }

    _updateProgress () {

    }
}
function getPageUrlsFromDetailPage (url) {

}
function getImageUrlFromPageUrl (url) {
    let html=fetchHtmlFromUrl(url);
    let imgUrl=parser$image_url(html);
    return imgUrl
}
function fetchHtmlFromUrl (url) {

}
function _downloadImageToStore (url) {
    "use strict";
    return new Promise((resolve, reject) => {
        ImageEditor.cropImage(url, CROP_DATA,
            (localUrl) => {
                resolve(localUrl);
            },
            (error) => {
                reject(error);
            });
    });
}

function initStorage () {
    "use strict";

}
function keyGen (gid, gtoken) {
    "use strict";
    return 'i' + gid + 't' + gtoken
}
