let cheerio = require("cheerio");
let fs = require("fs")
let spider = {}
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

        let title = nameParser(ele);

        let uploader = uploaderParser(ele);

        let cover = coverUrlParser(ele);

        commonlistdata.list.push({
            type: type,
            date: date,
            title: title,
            uploader: uploader,
            cover: cover
        })
    });
    console.log(commonlistdata);
    return commonlistdata
};
function parseComicDetail() {
    fs.readFile('./ting.html', "utf-8", (err, fd) => {
        console.log(spider.parseComicList(fd));
    });
}
parseComicDetail();
function parser$comiclist(context){
    let list = [];
    let subContext = cheerio('table[class="itg"]',contenxt).html();


}