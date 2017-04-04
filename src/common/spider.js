/**
 *
 * Created by AlphaDu on 2017/3/31.
 */

const spider = {};
function typeParser(context) {
    return cheerio('img[class="ic"]', context).attr("alt");
}
function publishDateParser(context) {
    return cheerio('[class="itd"]', ele).html();
}
function nameParser(context) {
    return cheerio('a[href*="https://exhentai.org/g/"]', ele).text();
}
function levelParser(context) {

}
function uploaderParser(context) {
    return cheerio('a[href*=uploader]', context).text();
}
function coverUrlParser(context) {
    let innertxt = cheerio('div[class="it2"]', context).text();
    let suffix = innertxt.split('~')[2];
    return "https://exhentai.org/" + suffix
}

function listInfoParser() {

}
let commiclistdata = {};
function typeParser(context) {
    return cheerio('img[class="ic"]', context).attr("alt");
}
function publishDateParser(context) {
    return cheerio('[class="itd"]', context).html();
}
function nameParser(context) {
    return cheerio('a[href*="https://exhentai.org/g/"]', context).text();
}

function uploaderParser(context) {
    return cheerio('a[href*=uploader]', context).text();
}
function coverUrlParser(context) {
    let innertxt = cheerio('div[class="it2"]', context).text();
    let suffix = innertxt.split('~')[2];
    return "https://exhentai.org/" + suffix
}
spider.parseComicList = function (context) {
    let commonlistdata = {
        isLegal: false,
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
        let type = typeParser(ele);

        let date = publishDateParser(ele);

        let name = nameParser(ele);

        let uploader = uploaderParser(ele);

        let cover = coverUrlParser(ele);

        commonlistdata.list.push({
            type: type,
            date: date,
            name: name,
            uploader: uploader,
            cover: cover
        })
    });
    console.log(commonlistdata);
    return commonlistdata16
};

export default  spider;