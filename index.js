/*
* @Author: lushijie
* @Date:   2015-01-08 16:09:09
* @Last Modified by:   lushijie
* @Last Modified time: 2016-10-13 18:28:02
* @Email email:lushijie1218@126.com
*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.getURLParam = factory();
    }
}(this, function () {
    return function getURLParam(url,name){
        var aParams;
        if(url.indexOf("?")!=-1){
            var searchString=url.split("?")[1];
            if(searchString.indexOf(name+"=")!=-1){
                aParams=searchString.split('&');
                for (i=0; i < aParams.length ; i++){
                    if(aParams[i].split('=')[0]==name){
                        return aParams[i].split('=')[1];
                    }
                }
                return null;
            }
        }
        return null;
    }
}));
