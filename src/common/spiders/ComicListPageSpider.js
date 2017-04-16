/**
 *
 * Created by AlphaDu on 2017/3/31.
 */
import cheerio from 'cheerio'
const spider = {};
function parser$type(context) {
    return cheerio('img[class="ic"]', context).attr("alt");
}
function parser$publishDate(context) {
    return cheerio('[class="itd"]', ele).html();
}
function parser$name(context) {
    return cheerio('a[href*="https://exhentai.org/g/"]', ele).text();
}
function parser$level(context) {

}
function parser$uploader(context) {
    return cheerio('a[href*=uploader]', context).text();
}
function parser$coverUrl(context) {
    let innertxt = cheerio('div[class="it2"]', context).text();
    let suffix = innertxt.split('~')[2];
    return "https://exhentai.org/" + suffix
}


let commiclistdata = {};
function parser$type(context) {
    return cheerio('img[class="ic"]', context).attr("alt");
}
function parser$publishDate(context) {
    return cheerio('[class="itd"]', context).html();
}
function parser$name(context) {
    return cheerio('a[href*="https://exhentai.org/g/"]', context).text();
}

function parser$uploader(context) {
    return cheerio('a[href*=uploader]', context).text();
}
function parser$coverUrl(context) {
    let innertxt = cheerio('div[class="it2"]', context).text();
    let suffix = innertxt.split('~')[2];
    return "https://exhentai.org/" + suffix
}
spider.parseComicList = function (context) {
    let commonlistdata = {
        currentPage:0,
        total:0,
        list: [],
    };

    let $ = cheerio.load(context);
    ///pageinfo
    commonlistdata.total = $('p[class="ip"]').text();
    //currentpage
    let tmpPage = $('td[class="ptds"]').text() ;
    commonlistdata.currentPage = tmpPage.slice(tmpPage.length/2) -1;
    $('[class*="gtr"]').each(function (i, ele) {
        console.log(i);
        let type = parser$type(ele);

        let date = parser$publishDate(ele);

        let title = parser$name(ele);

        let uploader = parser$uploader(ele);

        let cover = parser$coverUrl(ele);

        commonlistdata.list.push({
            type: type,
            date: date,
            title: title,
            uploader: uploader,
            cover: cover
        })
    });
    console.log(commonlistdata);
    return commonlistdata16
};

export default  spider;