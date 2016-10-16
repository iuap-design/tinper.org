var fs = require('fs');
var fse = require('fs-extra');
var template = require( 'art-template' );
var execSync = require('child_process').execSync;
var path = require('path');
var envPath = process.cwd();
console.log(envPath)
var marked = require('marked');
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
					var fullName = subPath.substr(++lastDiv);
					var newPath = subPath.replace('/src/','/dist/').replace(/\.md$/,'.html');
					markedFun(subPath,newPath,fullName)
				} else {

				}
			}
		})
	});

}

var markedFun = function(oldPath,newPath,fullName) {
	var oldCont = fs.readFileSync(oldPath,'utf-8');
	var markedCont = marked(oldCont);
	var baseCont = fs.readFileSync(path.join(envPath,'layout/base.html'),'utf-8')
	var markedHtml
	if(fullName !== 'SUMMARY.md'){
		markedHtml = baseCont.replace('<%Content%>',markedCont);
	} else {
		markedHtml = markedCont;
	}
	// console.log(markedHtml);
	fse.ensureFileSync(newPath);
	fs.writeFile(newPath, markedHtml,function(err){
		renderFun(newPath);
	});
};

var renderFun = function(newPath) {
	var fileName = newPath.lastIndexOf('/')
	var isMenu = newPath.substr(++fileName);
	var data = {};
	var temp = newPath.replace(/\.html$/,'')
	if(isMenu != 'SUMMARY.html'){
		var renders = template(temp,data);
		fs.writeFileSync(newPath, renders);
	}
};

mdFun(srcPath);
// renderFun('/Users/liwei/Desktop/o/work/tinper.org/dist/neoui/component/breadcrumb.html')