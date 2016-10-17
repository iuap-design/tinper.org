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
	fs.readdir(srcPath, function(err, sub){
		sub.forEach(function(subNum, index){
			var subPath = path.join(srcPath,subNum);
			var isDir = fs.statSync(subPath).isDirectory();
			if(isDir){
				// 目录则返回上级继续遍历
				mdFun(subPath);
			} else {
				// 处理文档
				var lastDiv = subPath.lastIndexOf('/');
				var fullName = subPath.substr(++lastDiv);
				var newPath;
				if(/\.md$/.test(subPath)){

					// md文档进行mark转html,再进行渲染
					newPath = subPath.replace('/src/','/dist/').replace(/\.md$/,'.html');
					markedFun(subPath,newPath,fullName);

				} else if(/\.html$/.test(subPath)){
					debugger
					// html文件copy到dist目录执行渲染
					copyFun(subPath,lastDiv,renderFun);

				} else if( fullName != '.DS_Store') {

					// 其他文件直接copy
					copyFun(subPath,lastDiv);

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
	var baseCont = fs.readFileSync(path.join(envPath,'layout/base.html'),'utf-8');
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
 * @param  {[type]} lastDiv [description]
 * @return {[type]}         [description]
 */
var copyFun = function(oldPath,lastDiv,callback) {
	newPath = oldPath.replace('/src/','/dist/');
	newDir = newPath.substring(0,lastDiv);
	
	// 执行gulp不能正确执行callback
	// gulp.task('copy', function() {
	// 	return gulp.src(oldPath).pipe(gulp.dest(newDir));
	// });
	// gulp.task('render',['copy'], function(){
	// 	// 注意判断callback是否存在
	// 	console.log("callback:",callback,",,newPath:",newPath);
	// 	if(callback){
	// 		console.log('callback执行');
	// 		callback(newPath);
	// 		console.log('callback执行完毕')
	// 	}
	// });
	// gulp.start('render');
	
	fse.copySync(oldPath,newPath);
	if(callback){
		callback(newPath);
	}
};

/**
 * 模板引擎渲染
 * @param  {[type]} newPath [description]
 * @return {[type]}         [description]
 */
var renderFun = function(newPath) {
	var fileIndex = newPath.lastIndexOf('/');
	var fullName = newPath.substr(++fileIndex);
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