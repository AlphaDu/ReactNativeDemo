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
    page: 1,
    total_page: 0
};
function load(context){
    let data ={};
    data.title =parser$title(context);

}
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
function parser$rating(context) {
    let inner = cheerio('[id="rating_label"]', context).text();
    return inner.split(" ")[1];
}
function parser$page(context) {
    let subContext = cheerio('td[class="ptds"]', context).html();
    return cheerio('a', subContext).text();
}
function parser$total_page(context) {
    let total = 0;
    let subContext = cheerio('table[class="ptb"]', context).html();
    cheerio('a', subContext).each((index, ele) => {
        let inner = cheerio(ele).text();
        if(!isNaN(parseInt(inner))) {
            total ++;
        }
    });
    console.log("total" + total);
    return total;
}
function parser$g_id(context){
    let regrex = /var\sgid\s=\s([a-z0-9]+);/g;
    let res = regrex.exec(context);
    return res[1]

}
function parser$g_token(context){
    let regrex = /var\stoken\s=\s"([a-z0-9]+)";/g;
    let res = regrex.exec(context);
    return res[1]
}
function parser$tags(context){
    let subContext = cheerio('div[id="taglist"]',context).html();
    let tags = {};
    cheerio('tr',subContext).each((index,element)=>{
        let label = cheerio('td[class="tc"]',element).text();
        let valueContext = cheerio('td:not([class])',element).html();
        let values = [];
        cheerio('a',valueContext).each((index,element)=>{
            values.push(cheerio(element).text().replace(/[\n\s]+/," "));
        });
        tags[label] = values;
    });
    return tags;
}
function parseComicDetail(){
    fs.readFile('./testdetail.html', "utf-8", (err, fd) => {
        console.log(parser$g_id(fd));
        console.log(parser$g_token(fd));
    });

}
parseComicDetail();