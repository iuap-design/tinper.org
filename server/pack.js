var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');
var zip = require('gulp-zip');
var clean = require('gulp-clean');
var replace = require('gulp-replace');

// 获取Neoui es6模块依赖关系
var neojson = require('../bin/neoui.json');
var neoModule = neojson.es6;
var koModule = neojson.ko;

var zipPath;

var tinperTree = 'tinper-neoui-tree';
var tinperGrid = 'tinper-neoui-grid';
var tinperPoly = 'tinper-neoui-polyfill';
var tinperNeoui = 'tinper-neoui';
var readfile = '../custom/README.md';
var readmePath = path.resolve(__dirname,readfile);

var showError = function(err){
	 console.log( '\n错误文件:',err.file,'\n错误行数:',err.line,'\n错误信息:',err.message);
}

module.exports = function(data, self, cb){

	/**
	 * Poly Match: polyselect
	 * Neoui Match: neoselect  已作废
	 * CSS Match:cssselect
	 * JS Match: jsselect
	 */
	var dataJson = data;
	// console.log(dataJson);
	var basePath = '../node_modules/';

	/**
	 * polyfill定制部分
	 */
	var polyBasePath = path.resolve(__dirname, basePath + tinperPoly);
	var polyJs = '';

	if(dataJson.polyselect) {
		polyJs = polyBasePath + '/dist/u-polyfill.js';
	}
	gulp.task('poly', function(){
		if(polyJs){
			return gulp.src(polyJs)
				.pipe(gulp.dest(path.resolve(__dirname,'../download')));
		}
	});

	/**
	 * tree定制部分
	 */
	var treeBasePath = path.resolve(__dirname, basePath + tinperTree);
 	var treeJs = '',treeCss = '';
	if(dataJson.treeselect){
		treeJs = treeBasePath + '/dist/js/u-tree.js'
		treeCss = treeBasePath + '/dist/css/tree.css'
	}
	gulp.task('tree', function(){
		if(treeJs&&treeCss){
			gulp.src(treeJs)
				.pipe(gulp.dest(path.resolve(__dirname,'../download')));

			gulp.src(treeCss)
				.pipe(gulp.dest(path.resolve(__dirname,'../download')));
		}
	});

	/**
	 * grid定制部分
	 */
	var gridBasePath = path.resolve(__dirname, basePath + tinperGrid);
	var gridJs = '',gridCss = '';
	if(dataJson.gridselect){
		console.log("dataJson.gridselect:"+dataJson.gridselect)
		console.log("gridBasePath:"+gridBasePath)
		gridJs = gridBasePath + '/dist/js/u-grid.js'
		gridCss = gridBasePath + '/dist/css/grid.css'
	}
	gulp.task('grid', function(){
		if(gridJs&&gridCss){
			gulp.src(gridJs)
				.pipe(gulp.dest(path.resolve(__dirname,'../download')));

			gulp.src(gridCss)
				.pipe(gulp.dest(path.resolve(__dirname,'../download')));
		}
	});

	/**
	 * 模板颜色定制部分
	 */
	var dataColor = dataJson.themeColor;
	var corPath = path.resolve(__dirname, basePath + tinperNeoui +'/scss/core/minxin-themeColors.scss');
	var corData = fs.readFileSync(corPath, 'utf-8');
	var corNewData = corData.replace(/(\$color-primary: ).*(;)/g,`$1"${dataColor}"$2`);
	fs.writeFileSync(corPath,corNewData, 'utf-8');

	/**
	 * neoui定制部分
	 */
	// 数组填充
	var neouiBasePath = path.resolve(__dirname,basePath + tinperNeoui);
	var neouiCss =[];
	var neouiJs =[];

	if(dataJson.cssselect) {
		for (var ci=0; ci<dataJson.cssselect.length; ci++) {
			neouiCss.push(neouiBasePath + '/custom/' + dataJson.cssselect[ci] + '.css');
		}
	}
	if(dataJson.jsselect) {
		for (var ji=0; ji<dataJson.jsselect.length; ji++) {
			neouiCss.push(neouiBasePath + '/custom/' + dataJson.jsselect[ji] + '.css');
			neouiJs.push(neouiBasePath + '/js/' + dataJson.jsselect[ji] + '.js');
		}
		if(dataJson.adselect){
			// console.log('选择ko');
		}
	}

	// js内容
	var entryPath = path.resolve(__dirname,'../entry.js');
	var dataNeo = ["import {extend} from \'tinper-sparrow/src/extend\';"];
	var ex = {};

	var entryFun = function() {
		if(dataJson.jsselect){
			dataNeo.push("import {BaseComponent} from 'tinper-neoui/src/neoui-BaseComponent';import {u} from 'tinper-sparrow/src/index';import * as compox from 'compox/src/index';import * as compox_util from 'compox-util/src/index';")
			for(var i=0, neoLength = dataJson.jsselect.length; i < neoLength; i++ ) {
				var pluginModule = neoModule[dataJson.jsselect[i]];
				for (var key in pluginModule) {
					dataNeo.push(pluginModule[key]);
					ex[key] = key;
				}
			}
		}
	};
	entryFun();

	// kero内容
	var dataKo = [""];
	var koFun = function(){
		if(dataJson.adselect){
			console.log()
			for (var j = 0; j < dataJson.adselect.length; j++) {
				var adselect_ = dataJson.adselect[j];
				if(adselect_ == 'kero' && dataJson.jsselect) {
					dataKo.push("import {BaseAdapter} from 'neoui-kero/src/keroa-baseAdapter';");

					for(var i=0, neoLength = dataJson.jsselect.length; i < neoLength; i++ ) {
						var koName = 'keroa-' + dataJson.jsselect[i].substr(6);
						var koObj = koModule[koName];
						for(var key in koObj) {
							dataKo.push(koObj[key]);
							ex[key] = key;
						}
					}
					//当树组件被选择的时候加入keroa-tree这个ko组件
					if(dataJson.treeselect){
						koName = 'keroa-tree';
						koObj = koModule[koName];
						for(var key in koObj) {
							dataKo.push(koObj[key]);
							ex[key] = key;
						}
					}
					//当表格组件被选择的时候加入keroa-tree这个ko组件
					if(dataJson.gridselect){
						koName = 'keroa-grid';
						koObj = koModule[koName];
						for(var key in koObj) {
							dataKo.push(koObj[key]);
							ex[key] = key;
						}
					}
					dataKo.push("import {DataTable, u as kero} from 'kero/src/index';");
				}
				console.log(adselect_);
				if(adselect_ == 'kero-fetch'){
					dataKo.push("import * as kero_fetch from 'kero-fetch/src/index';");
				}
			}
		}
	};
	koFun();

	// 写入入口文件
	var dataImport = dataNeo.concat(dataKo).join('\n');
	fs.writeFileSync(entryPath,dataImport);
	var exBefore = '\nvar ex = ';
	var exStr = JSON.stringify(ex);
	var exAfter = [
		"\nextend(ex,window.u || {});",
		"window.u = ex;",
		"export {ex as u};"
	].join("\n");
	var exportStr = exBefore + exStr + exAfter;
	fs.appendFileSync(entryPath,exportStr);

	// 入口文件字符串替换
	var dataFsOrigin = fs.readFileSync(entryPath, 'utf-8');
	var dataFs = dataFsOrigin.replace(/:"([\w-]+)"/g,":$1");
	fs.writeFileSync(entryPath, dataFs);







	/**
	 * 取消在线编译
	 */
	// gulp.task('sass', function() {
	// 	return gulp.src(neouiCss)
	// 		.pipe(sass()).on('error', function(err){ showError(err) })
	// 		.pipe(concat('u.css'))
	// 		.pipe(gulp.dest(path.resolve(__dirname,'../download')))
	// });

	gulp.task('styleconcat',function(){
		return gulp.src(neouiCss)
		.pipe(concat('u.css'))
		.pipe(replace(/THEMETEST/g, dataColor))
		.pipe(gulp.dest(path.resolve(__dirname,'../download')))
	})

	// js部分
	gulp.task('webpack', ['styleconcat','poly','tree','grid'], function() {
		return gulp.src(path.resolve(__dirname, '../entry.js'))
			.pipe(webpack({
				module:{
					loaders:[
						{
							test: /(\.jsx|\.js)$/,
							loader: 'babel',
							exclude: /(bower_components)/
						}
					]
				},
				output:{
					filename:'u.js',
					libraryTarget:'umd',
					umdNamedDefine: true
				},
				resolve:{
					extensions: ['','.js','.jsx']
				},
				resolveLoader: {
					root: path.join(__dirname, "../node_modules")
				}
			})).on('error', function(err){ showError(err) })
			.pipe(gulp.dest(path.resolve(__dirname,'../download')));
	});

	var downFiles = path.resolve(__dirname, '../download/');
	// zip压缩
	gulp.task('zip', ['webpack'], function() {

		return gulp.src([downFiles + '/*.js', downFiles + '/*.css',readmePath])
			.pipe(zip('down.zip'))
			.pipe(gulp.dest(path.resolve(__dirname, '../download')));
	});

	gulp.task('clean',['zip'], function(){
		return gulp.src([downFiles + '/*.js', downFiles + '/*.css'])
			.pipe(clean());
	})

	gulp.start('clean', function(){
		zipPath = '/download/down.zip';
		console.log(zipPath);
		self.body = zipPath;
		cb(null,"");
	});
	// gulp.watch(path.resolve(__dirname, '../entry.js'), ['zip']);




};
