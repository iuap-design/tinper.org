var template = require( 'art-template' );
var fs = require('fs');
var path = require('path');
var fse = require('fs-extra');
var data = {};

// artTemple：template的文件不能带后缀

var artRend = function(inPath,outPath) {
	fs.readdir(inPath, function(err,sub){
		sub.forEach(function(subName,index){
			var subDir = path.resolve(inPath,`./${subName}`)
			fs.stat(subDir, function(err,stats){
				if(stats.isDirectory()) {
					// console.log("subDir:",subDir);
					var subOut = path.resolve(outPath,`./${subName}`);
					rendDir(subName, subDir, subOut);
				} else if(stats.isFile()) {
					var subOut = outPath;
					rendFile(subName, subDir, subOut);
				}
			});
		});
	});
};

var rendDir = function(subName,subDir,subOut) {
	var subOut = subOut;
	fse.ensureDir(subOut, function(err){
		// console.log(subName,"subOut:",subOut,"subDir:",subDir);
		fs.readdir(subDir, function(err,subFiles){
			subFiles.forEach(function(subFile,index){
				var filePath = path.resolve(subDir,`./${subFile}`)
				fs.stat(filePath, function(err,stats){
					if(stats.isDirectory()){
						var subFileOut = path.resolve(subOut,`./${subFile}`);
						rendDir(subFile, filePath, subFileOut);
					} else if (stats.isFile()) {
						rendFile(subFile, filePath, subOut);
					}
				});
			});
		});	
	});
};

var rendFile = function(subName,subDir, subOut) {
	if(/\.html$/.test(subName)){
		var filePath = subDir.replace(/\.html$/g, '');
		var rendata = template(filePath, data);
		var outPath = path.resolve(subOut,`./${subName}`);
		fs.writeFileSync( outPath, rendata); 
	}
};

module.exports = artRend;
