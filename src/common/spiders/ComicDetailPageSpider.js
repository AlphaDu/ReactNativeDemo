/**
 * Created by AlphaDu on 2017/4/11.
 */
import  $ from 'cheerio'
export default function load(context){
    let data ={};
    data.title = parser$title(context)||'';
    data.title_jpn = parser$title_jpn(context)||'';
    data.cover = parser$cover(context)||'';
    data.links = parser$links(context) ||[];
    data.rating =parser$rating(context)||0;
    data.page = parser$page(context)||1;
    data.total_page = parser$total_page(context)||1;
    data.tags = parser$tags(context)||{};
    data.g_id = parser$g_id(context)||'';
    data.g_token =parser$g_token(context)||'';
    return data;
}
function parser$title(context) {
    return $('h1[id="gn"]', context).text();
}
function parser$title_jpn(context) {
    return $('h1[id="gj"]', context).text();
}
function parser$cover(context) {
    let thumbDiv = $('div[id="gd1"]', context).html();
    let regrex = /url\((.*)\)/g;
    let res = regrex.exec(thumbDiv);
    return res[1];
}
function parser$links(context) {
    let links = [];
    let linkDiv = $('div[class="gdtm"]', context).each(function (index, ele) {
        links.push($('a', ele).attr('href'));
    });
    return links;
}
function parser$rating(context) {
    let inner = $('[id="rating_label"]', context).text();
    return inner.split(" ")[1];
}
function parser$page(context) {
    let subContext = $('td[class="ptds"]', context).html();
    return $('a', subContext).text();
}
function parser$total_page(context) {
    let total = 0;
    let subContext = $('table[class="ptb"]', context).html();
    $('a', subContext).each((index, ele) => {
        let inner = $(ele).text();
        if(!isNaN(parseInt(inner))) {
            total ++;
        }
    });
    console.log("total" + total);
    return total;
}
function parser$tags(context){
    let subContext = $('div[id="taglist"]',context).html();
    let tags = {};
    $('tr',subContext).each((index,element)=>{
        let label = $('td[class="tc"]',element).text();
        let valueContext = $('td:not([class])',element).html();
        let values = [];
        $('a',valueContext).each((index,element)=>{
            values.push($(element).text().replace(/[\n\s]+/," "));
        });
        tags[label] = values;
    });
    return tags;
}
function parser$g_id(context){
    let regrex = /var\sgid\s=\s"([a-z0-9]+)";/;
    let res = regrex.exec(context);
    return res[1]

}
function parser$g_token(context){
    let regrex = /var\stoken\s=\s"([a-z0-9]+)";/;
    let res = regrex.exec(context);
    return res[1]
}