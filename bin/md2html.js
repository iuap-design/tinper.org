/**
 * Module : 用模板引擎转换页面
 * Author : 胡玥(huyueb@yonyou.com)
 * Date	  : 2017-02-21
 */

var fs = require('fs');
var fse = require('fs-extra');
var template = require( 'art-template' );
var execSync = require('child_process').execSync;
var path = require('path');
var gulp = require('gulp');
var marked = require('marked');
var yaml = require('js-yaml');
var ut = require('./utool.js')

/**
 * 模板引擎设置项：
 * cache: 关闭模板引擎渲染缓存，否则无法执行 npm run reload
 * openTag,closeTag: 修改开关标签，支持react组件'{{}}'
 */
template.config('cache',false);
template.config('openTag','{{{');
template.config('closeTag','}}}');

/**
 * tinper基本配置获取
 * envPath:根目录所在的绝对路径
 */

var envPath = process.cwd();
var ymlPath = path.join(envPath,'_config.yml');
var ymlConfig = yaml.safeLoad(fs.readFileSync(ymlPath, 'utf8'));
var MDLAYOUT = ymlConfig.md_layout;

var srcPath = path.join(envPath,'src');
var mdFun = function(srcPath,callback) {
	fs.readdir(srcPath, function(err, sub){
		var sub = ut.rmdot(sub);
		sub.forEach(function(subNum, index){
			var subPath = path.join(srcPath,subNum);
			var isDir = fs.statSync(subPath).isDirectory();
			if(isDir){
				// 目录则返回上级继续遍历
				mdFun(subPath);
			} else {
				// 处理文档
				var fullName = path.basename(subPath);
				var newPath;
				if(/\.md$/.test(subPath)){
					// md文档进行mark转html,再进行渲染
					newPath = subPath.replace('src','dist').replace(/\.md$/,'.html');
					markedFun(subPath,newPath,fullName);

				} else if(/\.html$/.test(subPath)){
					// html文件copy到dist目录执行渲染
					copyFun(subPath,renderFun);
				} else {
					// 其他文件直接copy
					copyFun(subPath);
				}
			}
		});
		if(callback){
			callback();
		}
	});
};

/**
 * md转html方法
 * @param  {[type]} oldPath  [description]
 * @param  {[type]} newPath  [description]
 * @param  {[type]} fullName [description]
 * @return {[type]}          [description]
 */
var markedFun = function(oldPath,newPath,fullName) {
	var oldCont = fs.readFileSync(oldPath,'utf-8');
	var markedCont = marked(oldCont);

	// 获取md所属目录
	var splitPath = oldPath.split(path.sep)
	var catIndex = splitPath.length - 3;
	var cataMenu = splitPath[catIndex];

	// 读取layout,后续优化为缓存,或本级处理单一目录
	var baseCont;
	if(MDLAYOUT[cataMenu]){
		baseCont = fs.readFileSync(path.join(envPath, 'layout', MDLAYOUT[cataMenu]),'utf-8');
	} else {
		baseCont = fs.readFileSync(path.join(envPath, 'layout', MDLAYOUT.default), 'utf-8');
	}

	// 填充layout
	var markedHtml;
	if(fullName !== 'SUMMARY.md'){
		markedHtml = baseCont.replace('<%Content%>',markedCont);
	} else {
		markedHtml = markedCont.replace(/\.md/g,'.html').replace(/<li>(\S*)<ul>/g,`<li><span>$1</span><ul>`);
	}
	// console.log(markedHtml);

	// 输出待渲染html文件
	fse.ensureFileSync(newPath);
	fs.writeFile(newPath, markedHtml,function(err){
		renderFun(newPath);
	});
};

/**
 * 复制文档方法
 * @param  {[type]} oldPath [description]
 */
var copyFun = function(oldPath,callback) {
	//将src路径切换到dist
	newPath = oldPath.replace('src','dist');

	// 测试此处fse不能执行异步
	fse.copySync(oldPath,newPath);
	if(callback){
		callback(newPath);
	}

};

var dirFun = function(baseDir) {
	var dirs = fs.readdirSync(baseDir);
	var dirAry = [];
	dirs.forEach(function(subNum, index) {
		var subPath = path.join(baseDir,subNum);
		var isDir = fs.statSync(subPath).isDirectory();
		if(isDir){
			dirAry.push(subPath);
		}
	});
	return dirAry;
};

var DATABASE = path.join(envPath, 'data');
var DATAARY = dirFun(DATABASE);
// [ '/Users/AYA/Desktop/work/tinper.org/data/neoui',
//   '/Users/AYA/Desktop/work/tinper.org/data/package',
//   '/Users/AYA/Desktop/work/tinper.org/data/react',
//   '/Users/AYA/Desktop/work/tinper.org/data/uba' ]
/**
 * 模板引擎渲染
 */
var renderFun = function(newPath) {
	var newPath = path.resolve(newPath);
	// var dirName = path.dirname(newPath);
	var dirData = newPath.replace('dist','data');
	// /Users/AYA/Desktop/work/tinper.org/data/react/component/form-group.html

	var fullName = path.basename(newPath);

	var data={};
	/**
	 * DATAARY: data目录下存放的文件夹
	 * dataFile：DATAARY下文件夹匹配+index.json路径
	 * dirData: 文件不包含名称的路径，且目录的dist改为data.dirData是dataFile的超集
	 * 通过条件判断：1）dirData包含DATTARY[i]字段 2）dataFile是否存在
	 * 均成立后require文件，否则data={};
	 */
	for(var i=0; i<DATAARY.length; i++) {
		var dataFile = path.join(DATAARY[i],'index.json');
		if(dirData.indexOf(DATAARY[i]) != -1 && fs.existsSync(dataFile)){
			data = require(dataFile);
			break;
		}

	}
	/**
	 * 当发现是根目录下dist下的index.html中时，
	 * 需要拼接来自changelog/CHANGELOG-ALL.json中的version和date字段，
	 * 用于在官网首页显示最新版本号和更新时间
	 */
	if(newPath.indexOf('dist/index.html')!= -1){
		var data_index = require(envPath+'/changelog/CHANGELOG-ALL.json');
		if(data_index && data_index.versions && data_index.versions.length > 0){
			data['version'] = data_index.versions[0].version;
			data['date'] = data_index.versions[0].date;
		}
	}

	// 此部分后续需要增加配置API
	var isDefault = ymlConfig.data_default;
	if( isDefault ) {
		var temp = newPath.replace(/\.html$/,'')
		if(fullName != 'SUMMARY.html'){
			var renders = template(temp,data);
			// 增加active样式
			renders = renders.replace(`href="${fullName}"`,`href="${fullName}" class="active"`);
			// 去除代码高亮换行bug
			renders = renders.replace(/<code>\s/g,'<code>');
			fs.writeFileSync(newPath, renders);
		}
	}
};
module.exports = mdFun;
