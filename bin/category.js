const fs = require('fs');
const path = require('path');
const scssPath = path.resolve(__dirname,'../node_modules/tinper-neoui/scss/ui');
const jsPath = path.resolve(__dirname, '../node_modules/tinper-neoui/js');

// 获取插件中文名
const neouiJson = require('./neoui.json');
const neouiJsonStyle = neouiJson.stylePlugin;
const neouiJsonJs = neouiJson.jsPlugin;
const neouiJsonTheme = neouiJson.theme;

var stylePlugin, jsPlugin, styleAry, jsAry;
stylePlugin = [];
styleAry = [];
jsAry = [];

fs.readdir(scssPath, function(err, scssFiles) {
	scssFiles.forEach(function(scssFile){
		var fileName = scssFile.replace(/\.scss/,'');
		styleAry.push(fileName);

	});
	fs.readdir(jsPath, function(err, jsFiles){
		jsFiles.forEach(function(jsFile){
			var fileName = jsFile.replace(/\.js/,'');
			jsAry.push(fileName);

		});

		// css插件集合: stylePlugin
		styleAry.forEach(function(styleMatch) {
			var matchResult = jsAry.indexOf(styleMatch)
			if(matchResult == -1) {
				stylePlugin.push(styleMatch);
			}
		});

		// js插件集合: jsPlugin
		jsPlugin = jsAry;
		var aryRemove = function(ary,ele) {
			var indexNum = ary.indexOf(ele);
			if(ele != -1) {
				ary.splice(indexNum, 1);
			}
			return ary;
		};
		aryRemove(jsPlugin,'index');

		// 写入package/data/index.json

		// 数据整体包含:头部 + 内容 + 底部
		// 数据头部
		var dataHeadAry =['{'];

		/**
		 * panel1:主题color内容
		 */
		var themeHead = ['    "theme":{'];
		var themeAry   = ['        "list":[',];
		for(var ti=0,theLen = neouiJsonTheme.length; ti < theLen; ti++){
			var tiStr;
			var tiStrVal = JSON.stringify(neouiJsonTheme[ti]);
			// console.log(tiStrVal);
			ti < theLen -1 ? tiStr = `            ${tiStrVal},`: tiStr = `            ${tiStrVal}`;
			themeAry.push(tiStr);
		}
		var themeEndAry = [
			'        ]',
			'    },',
		];
		var panelTheme = themeHead.concat(themeAry,themeEndAry);

		/**
		 * panel2:勾选面板内容
		 */
		var checkHead = ['    "mod":{'];

		// polyfill start
		var polyDataAry = [
			'        "polyfill": {',
			'            "title": "IE8 Polyfill模块",',
			'            "description": "用于兼容ie8,包含respond,html5,及框架基础函数支持",',
			'            "catlog": "polyselect",',
			'            "list":[',
			'                {"name":"Polyfill模块","file":"u-polyfill"}',
			'            ]',
			'        },',
		];
		// polyfill end

		// css plugin start
		var styleDataAry = [
			'        "neocss": {',
			'            "title": "CSS组件",',
			'            "description": "CSS组件描述",',
			'            "catlog": "cssselect",',
			'            "list":[',
		];
		for(var si = 0, sLen = stylePlugin.length; si < sLen; si ++) {
			var siStr;
			var siName = neouiJsonStyle[stylePlugin[si]];
			si < sLen - 1 ? siStr = `                {"name":"${siName}","file":"${stylePlugin[si]}"},` : siStr = `                {"name":"${siName}","file":"${stylePlugin[si]}"}`;
			styleDataAry.push(siStr);
		}
		var styleEndAry = [
			'            ]',
			'        },',
		];
		var styleDataConcat = styleDataAry.concat(styleEndAry);
		// css plugin end

		// js start
		var jsDataAry = [
			'        "neojs": {',
			'            "title": "JS组件",',
			'            "description": "JS组件描述",',
			'            "catlog": "jsselect",',
			'            "list":[',
		];
		//老版js插件解析代码
		// for(var ji = 0, jLen = jsPlugin.length; ji < jLen; ji ++) {
		// 	var jiStr;
		// 	var jsName = neouiJsonJs[jsPlugin[ji]];
		// 	ji < jLen - 1 ? jiStr = `                {"name":"${jsName}","file":"${jsPlugin[ji]}"},` : jiStr = `                {"name":"${jsName}","file":"${jsPlugin[ji]}"}`;
		// 	jsDataAry.push(jiStr);
		// }
		//新版js插件解析代码
		for(var key in neouiJsonJs) {
			var jiStr;
			var jsName = neouiJsonJs[key];
			jiStr = `                {"name":"${jsName}","file":"${key}"},`;
			jsDataAry.push(jiStr);
		}
		jsDataAry[jsDataAry.length-1] = jsDataAry[jsDataAry.length-1].substring(0,jsDataAry[jsDataAry.length-1].length-1);
		var jsEndAry = [
			'            ]',
			'        },',
		];
		var jsDataConcat = jsDataAry.concat(jsEndAry);
		// js end

		// tree
		var treeDataAry = [
			'        "tree": {',
			'            "title": "Tree",',
			'            "description": "树",',
			'            "catlog": "treeselect",',
			'            "list":[',
			'                {"name":"树","file":"tree"}',
			'            ]',
			'        },'
		];

		// grid
		var gridDataAry = [
			'        "grid": {',
			'            "title": "Grid",',
			'            "description": "表格",',
			'            "catlog": "gridselect",',
			'            "list":[',
			'                {"name":"表格","file":"grid"}',
			'            ]',
			'        },'
		];

		// kero
		var adapterDataAry = [
			'        "kero": {',
			'            "title": "Kero",',
			'            "description": "前端数据模型",',
			'            "catlog": "adselect",',
			'            "list":[',
			'                {"name":"前端数据模型","file":"kero"},',
			'                {"name":"http请求封装","file":"kero-fetch"}',
			'            ]',
			'        }'
		];

		var checkEnd = ['    }'];
		var panelCheck = checkHead.concat(polyDataAry, styleDataConcat, jsDataConcat, treeDataAry, gridDataAry, adapterDataAry, checkEnd);

		// 数据底部
		var dataEndAry = ['}'];

		// 合并所有数据
		var totalConcat = dataHeadAry.concat(panelTheme, panelCheck, dataEndAry).join('\n');

		// 写入文件
		var packDir = path.resolve(__dirname, '../data/package');
		try{
			fs.statSync(packDir).isDirectory();
		}catch(err){
			fs.mkdirSync(packDir);
		}

		var indexPath = path.resolve(__dirname,'../data/package/build.json')
		fs.writeFileSync(indexPath, totalConcat, 'utf-8');

	});
});
