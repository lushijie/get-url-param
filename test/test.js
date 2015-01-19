/* 
* @Author: lushijie
* @Date:   2015-01-08 19:10:43
* @Last Modified by:   lushijie
* @Last Modified time: 2015-01-19 13:20:54
* @Email email:lushijie1218@126.com
*/

var gurlp=require("../index.js");
var urlHref="http://www.baidu.com/s?ie=UTF-8&wd=nodejs";
var urlHref2="http://www.test.com/t=.html";
module.exports={
	"getUrlParam()":function(test){
		test.equal("UTF-8",gurlp.getUrlParam(urlHref,"ie"),"function getUrlParam test wrong");
		test.equal("nodejs",gurlp.getUrlParam(urlHref,"wd"),"function getUrlParam test wrong");
		test.equal(null,gurlp.getUrlParam(urlHref,"noexist"),"function getUrlParam test wrong");
		test.equal(null,gurlp.getUrlParam(urlHref2,"t"),"function getUrlParam test wrong");
		test.done();
	}
}	