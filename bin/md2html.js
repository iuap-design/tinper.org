var fs = require('fs');
var fse = require('fs-extra');
var template = require( 'art-template' );
var execSync = require('child_process').execSync;
var path = require('path');
var gulp = require('gulp');
var marked = require('marked');
var yaml = require('js-yaml');

/**
 * tinper基本配置获取
 * reData:模板渲染数据集合
 */
var envPath = process.cwd();
console.log(envPath);
var ymlPath = path.join(envPath,'_config.yml');
var tinper = yaml.safeLoad(fs.readFileSync(ymlPath, 'utf8'));
var REData = tinper.data;


var srcPath = path.join(envPath,'src');
var mdFun = function(srcPath) {
	// console.log('srcPath--'+srcPath);
	fs.readdir(srcPath, function(err, sub){
		sub.forEach(function(subNum, index){
			var subPath = path.join(srcPath,subNum);
			var isDir = fs.statSync(subPath).isDirectory();
			if(isDir){
				// 目录则返回上级继续遍历
				mdFun(subPath);
			} else {
				// 处理文档
				// var lastDiv = subPath.lastIndexOf('/');
				// var fullName = subPath.substr(++lastDiv);
				var fullName = path.basename(subPath);
				var newPath;
				if(/\.md$/.test(subPath)){

					// md文档进行mark转html,再进行渲染
					newPath = subPath.replace('src','dist').replace(/\.md$/,'.html');
					markedFun(subPath,newPath,fullName);

				} else if(/\.html$/.test(subPath)){
					// html文件copy到dist目录执行渲染
					copyFun(subPath,renderFun);
				} else if( fullName != '.DS_Store') {
					// 其他文件直接copy
					copyFun(subPath);
				} 
			}
		});
	});
};

/**
 * md转html
 * @param  {[type]} oldPath  [description]
 * @param  {[type]} newPath  [description]
 * @param  {[type]} fullName [description]
 * @return {[type]}          [description]
 */
var markedFun = function(oldPath,newPath,fullName) {
	var oldCont = fs.readFileSync(oldPath,'utf-8');
	var markedCont = marked(oldCont);
	
	// 待优化 - 遍历layout文件夹
	// layout default content
	var baseCont = fs.readFileSync(path.join(envPath,'layout/menu.html'),'utf-8');
	
	var markedHtml;
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

/**
 * 复制文档
 * @param  {[type]} oldPath [description]
 */
var copyFun = function(oldPath,callback) {
	newPath = oldPath.replace('src','dist');
	
	// 测试此处fse不能执行异步
	fse.copySync(oldPath,newPath);
	if(callback){
		callback(newPath);
	}
	
};

/**
 * 模板引擎渲染
 */
var renderFun = function(newPath) {
	var newPath = path.resolve(newPath);
	// ‘/’获取filename存在缺陷
	// var fileIndex = newPath.lastIndexOf('/');
	// var fullName = newPath.substr(++fileIndex);
	var fullName = path.basename(newPath);
	// 待优化- 先上线功能
	var dataAry = Object.keys(REData);
	var data;
	for (var i=0; i<dataAry.length; i++){
		fullName == dataAry[i] ? data=require(REData[dataAry[i]]) : data={}
	}
	var temp = newPath.replace(/\.html$/,'')
	if(fullName != 'SUMMARY.html'){
		var renders = template(temp,data);
		fs.writeFileSync(newPath, renders);
	}
};

mdFun(srcPath);
// renderFun('/Users/liwei/Desktop/o/work/tinper.org/dist/neoui/component/breadcrumb.html')