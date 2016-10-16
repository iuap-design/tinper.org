var fs = require('fs');
var fse = require('fs-extra');
var execSync = require('child_process').execSync;
var path = require('path');
var envPath = process.cwd();

var srcPath = path.join(envPath,'src');

var mdFun = function(srcPath) {

	fs.readdir(srcPath, function(err, sub){
		sub.forEach(function(subNum, index){
			var subPath = path.join(srcPath,subNum)
			var isDir = fs.statSync(subPath).isDirectory()
			if(isDir){
				// 目录则返回上级继续遍历
				mdFun(subPath);
			} else {
				// 处理md文档
				if(/\.md$/.test(subPath)){
					var lastDiv = subPath.lastIndexOf('/');
					var fullName = subPath.substr(++lastDiv)
					console.log(fullName);
					convertHtml(subPath,fullname)
				} else {

				}
			}
		})
	});

}


var convertHtml = function(path,name) {
	var oldCont = fs.readFileSync(path);
	var 
};

var fileFun = function() {

};

mdFun(srcPath);