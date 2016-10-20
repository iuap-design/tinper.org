var md2html = require('./md2html');
var path = require('path');
var browserSync = require('browser-sync');
var chokidar = require('chokidar');

var envPath = process.cwd();
var srcPath = path.join(envPath,'src');

var bs = browserSync.create();
bs.init({
	server: envPath,
	port: 8002,
	index: '/dist/index.html'
});

var srcFiles = path.join(envPath,'src/**/*');

// 此部分目前没有跑通
chokidar.watch(srcFiles).on('change', function(event,path){
	console.log('change');
	md2html(srcPath);
	bs.reload();
});