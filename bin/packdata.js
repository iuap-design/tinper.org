var fs = require('fs');
var path = require('path');
var buildJson = require('../data/package/build.json');
var dataJson = require('../data/package/data.json')

// 用于package定制数据合并
var concatStr = JSON.stringify(buildJson) + JSON.stringify(dataJson);
var concatJson = concatStr.replace('}{',',')

var jsonPath = path.join(process.cwd(),'data/package/index.json');
fs.writeFileSync(jsonPath, concatJson, 'utf-8')
