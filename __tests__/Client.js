/**
 * Created by AlphaDu on 2017/3/30.
 */
let fs = require('fs');
let cheerio = require('cheerio');
const username = 'kuijjhdggy';
const password = 'chjityydsb811';
function login (username,password){
    new Promise((success,failed) => {
       fetch(url)
    });
}
fs.readFile('./test.html', "utf-8", (err, fd) => {
    const result = {
        currentPage: 0,
        commicList: [],
        listInfo: '',

    };
    let $ = cheerio.load(fd);
    console.log($('table.itg').html());
///pageinfo
    pageLabel = $('p[class="ip"]').text();
    //currentpage
    currentPage = $("td[class=]").text();
//list
    $('[class*="gtr"]').each(function (i, ele) {
        console.log(i);
        let type = typeParser(ele);
        console.log(type);
        let date = cheerio('[class="itd"]', ele).html();
        console.log(date);
        let name = cheerio('a[href*="https://exhentai.org/g/"]', ele).text();
        console.log(name.trim());
        let uploader = cheerio('a[href*=uploader]', ele).text();
        console.log(uploader);
        let cover = coverUrlParser(ele);
        console.log(cover);
    });

});
function detailPageParser(context) {
    const result = {
        coverUrl: '',
        name: '',
        title: '',
        author: '',
        uploaderTime: '',
        previews: []
    }
}
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