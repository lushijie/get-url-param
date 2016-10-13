/*
* @Author: lushijie
* @Date:   2016-10-13 17:14:40
* @Last Modified by:   lushijie
* @Last Modified time: 2016-10-13 18:29:39
*/
var assert = require('assert');
var getURLParam = require('..');

var url1="http://www.baidu.com/s?charset=UTF-8&env=node";
var url2="http://www.test.com/t=.html";

describe('getURLParam Function test', function () {
    it('should output correctly', function () {
        assert.equal(getURLParam(url1, "charset"), "UTF-8");
        assert.equal(getURLParam(url1, "env"), "node");
        assert.equal(getURLParam(url1, "XXX"), null);
        assert.equal(getURLParam(url2, "t"), null);
    });
});
