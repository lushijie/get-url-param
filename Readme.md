
###Just a simple function!


```js
function getUrlParam(url,name){
    //todo
}
exports.getUrlParam=getUrlParam;

```

###demo
```js
var gurlp=require("gurlp");
var url="http://www.baidu.com/s=?ie=UTF-8&wd=mustache";
console.log(gurlp.getUrlParam(url,"ie"));//UTF-8
console.log(gurlp.getUrlParam(url,"noexist"));//null
```
