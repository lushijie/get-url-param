# get-url-param


## Install

Install with `npm`:

```bash
$ npm install get-url-param --save
```


## &lt;script />

You can simply include get-url-param like this:
```html
<script src='[path of index.js]'></script>
```

## Usage

```javascript
var gurlp=require("gurlp");
var url="http://www.baidu.com/s=?ie=UTF-8&wd=mustache";
console.log(gurlp.getUrlParam(url,"ie"));//UTF-8
console.log(gurlp.getUrlParam(url,"noexist"));//null

```

## License

MIT
