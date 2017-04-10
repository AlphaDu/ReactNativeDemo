/**
 * Created by AlphaDu on 2017/4/10.
 */
let fs = require("fs");
let cheerio = require("cheerio");
const res = {
    g_id: '',
    g_token: '',
    archiver_key: '',
    title: '',
    title_jpn: '',
    category: '',
    thumb: '',
    uploader: '',
    posted: '',
    filecount: '',
    rating: 0,
    tags: {},
    links: [],
    combinedPreviews: [],
    page:1,
    total_page:0
};
let parseComicDetail = function () {
    fs.readFile('./testdetail.html', 'utf-8', (err, fd) => {
        let $ = cheerio.load(fd);
        console.log(parser$title(fd));
        console.log(parser$title_jpn(fd));
        console.log(parser$cover(fd));
        parser$links(fd);
        parser$rating(fd);
    });

};

function parser$title(context) {
    return cheerio('h1[id="gn"]', context).text();
}
function parser$title_jpn(context) {
    return cheerio('h1[id="gj"]', context).text();
}
function parser$cover(context) {
    let thumbDiv = cheerio('div[id="gd1"]', context).html();
    let regrex = /url\((.*)\)/g;
    let res = regrex.exec(thumbDiv);
    return res[1];
}
function parser$links(context) {
    let links = [];
    let linkDiv = cheerio('div[class="gdtm"]', context).each(function (index, ele) {
        links.push(cheerio('a', ele).attr('href'));
    });
    return links;
}
function parser$rating(context){
    let inner = cheerio('[id="rating_label"]',context).text();
    return inner.split(" ")[1];
}
function parser$page(context){

}
parseComicDetail();