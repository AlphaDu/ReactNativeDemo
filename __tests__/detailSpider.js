/**
 * Created by AlphaDu on 2017/4/10.
 */
let fs = require("fs");
let cheerio = require("cheerio");
const res = {
    g_id:'',
    g_token:'',
    archiver_key:'',
    title:'',
    title_jpn:'',
    category:'',
    thumb:'',
    uploader:'',
    posted:'',
    filecount:'',
    rating:0,
    tags:{},
    links:[]

};
let parseComicDetail = function(){
  fs.readFile('./testdetail.html','utf-8',(err,fd)=>{
      let $ = cheerio.load(fd);
      console.log(parser$title(fd));
      console.log(parser$title_jpn(fd));
      console.log(parser$cover(fd));
    });
};

function parser$title (context){
    return cheerio('h1[id="gn"]',context).text();
}
function parser$title_jpn(context){
    return cheerio('h1[id="gj"]',context).text();
}
function parser$cover(context){
    let thumbDiv = cheerio('div[id="gd1"]',context).html();
    let regrex = /url\((.*)\)/g;
    let res = regrex.exec(thumbDiv);
    return res[1];
}
parseComicDetail();