/* 
* @Author: lushijie
* @Date:   2015-01-08 16:09:09
* @Last Modified by:   lushijie
* @Last Modified time: 2015-01-08 16:10:03
* @Email email:lushijie1218@126.com
*/
function getUrlParam(url,name){
    var aParams;
    if(url.indexOf(name+"=")!=-1){
        aParams=url.split("?")[1].split('&');
        for (i=0; i < aParams.length ; i++){
            if(aParams[i].split('=')[0]==name){
                return aParams[i].split('=')[1];
            }
        }
        return null;
    }
    return null;
}
exports.getUrlParam=getUrlParam;