/**
 *
 * Created by AlphaDu on 2017/4/2.
 */
const host ="https://exhentai.org/?";
const defaultSuffix = "f_doujinshi=on&f_manga=on&f_artistcg=on&f_gamecg=on&f_western=on&f_non-h=on&f_imageset=on&f_cosplay=on&f_asianporn=on&f_misc=on";
harmony = {
    getComicListUrl
};
function getComicListUrl(page=0,tags = ""){
    let result = '';
    if(page !=0)
        result  = host+ 'page=' + page;
    if(tags!="")
        result = result + "&f_search=" + tags.replace(" ","+");
    return result;
}
export default harmony;
