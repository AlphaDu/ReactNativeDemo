/**
 *
 * Created by AlphaDu on 2017/3/31.
 */
import cheerio from 'cheerio'
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
    return cheerio('a[href*="uploader"]', context).text();
}
function coverUrlParser(context) {
    let innertxt = cheerio('div[class="it2"]', context).text();
    let suffix = innertxt.split('~')[2];
    return "https://exhentai.org/" + suffix
}
function parser$current_page(context) {
    let subContext = cheerio('td[class="ptds"]', context).html();
    let res = cheerio('a[href*="exhentai"]', subContext).text();
    return res - 1;
}
function parser$link(context) {
    let subCtx = cheerio('div[class="it5"]', context).html();
    return cheerio(subCtx).attr('href');

}
spider.parseComicList = function (context) {
    let commonlistdata = {
        isLegal: false,
        currentPage: 0,
        total: 0,
        list: [],
    };

    let $ = cheerio.load(context);
    ///pageinfo
    commonlistdata.total = $('p[class="ip"]').text();
    //currentpage
    let tmpPage = $('td[class="ptds"]').text();
    commonlistdata.currentPage = parser$current_page(context);

    $('[class*="gtr"]').each(function (i, ele) {
        console.log(i);
        let type = typeParser(ele);

        let date = publishDateParser(ele);

        let title = nameParser(ele);

        let uploader = uploaderParser(ele);

        let cover = coverUrlParser(ele);
        let link = parser$link(ele);
        commonlistdata.list.push({
            type: type,
            date: date,
            title: title,
            uploader: uploader,
            cover: cover,
            link: link
        })
    });
    console.log(commonlistdata);
    return commonlistdata
};

export default  spider;