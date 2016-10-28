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
	index: '/dist/index.html',
	reloadDelay: 1500
});

var srcFiles = path.join(envPath,'src/**/*');
var distFiles = path.join(envPath,'dist/**/*');

chokidar.watch(srcFiles).on('change', function(event,path){
		console.log('change');
		md2html(srcPath,function(){
			console.log('convert finish,browser start to refresh');
			bs.reload();
	});

});
