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

chokidar.watch(srcPath).on('all', function(event,path){
	md2html(srcPath,function(){
		bs.reload();
	});
});