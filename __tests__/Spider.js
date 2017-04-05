/**
 *
 * Created by AlphaDu on 2017/3/31.
 */
let fs = require("fs");
let cheerio = require("cheerio");
const spiders = {};
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

function  getTotalPage (context){
    var regrex  = /Jump\sto\spage:\s\(1-(\d+)\)/g ;
    let s =  regrex.exec(context);
    return s[1];
}

spiders.parseComicList = function (context) {
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
    commonlistdata.total = getTotalPage(context);
    commonlistdata.currentPage = tmpPage.slice(tmpPage.length/2) -1;
    $('[class*="gtr"]').each(function (i, ele) {
        console.log(i);
        let type = typeParser(ele);

        let date = publishDateParser(ele);

        let name = nameParser(ele);

        let uploader = uploaderParser(ele);

        let cover = coverUrlParser(ele);

        commonlistdata.list.push({
            cate: type,
            date: date,
            title: name,
            uploader: uploader,
            cover: cover
        })
    });

    console.log(commonlistdata);

};

fs.readFile("./test.html","utf-8",(err,fd)=>spiders.parseComicList(fd));

