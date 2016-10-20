var md2html = require('./md2html');
var path = require('path');

var envPath = process.cwd();
var srcPath = path.join(envPath,'src');
md2html(srcPath);