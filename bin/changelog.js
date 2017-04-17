var fs = require('fs');
var path = require('path');

function getResolvePath(p){
	return path.resolve(__dirname, p)
}

var prodNameArr = [
	'tinper-sparrow',
	'tinper-neoui',
	'kero',
	'neoui-kero',
	'tinper-neoui-grid',
	'tinper-neoui-tree',
	'tinper-neoui-polyfill',
	'compox',
	'compox-util',
	'kero-fetch',
	'neoui-kero-mixin'
];
var basePath = '../changelog/';
// 读取当前版本号对应的各仓库版本号
var jsonPath = getResolvePath(basePath + 'CHANGELOG-ALL.json');
if(fs.existsSync(jsonPath)){
  var JsonObj=JSON.parse(fs.readFileSync(jsonPath));
  var nowAllVersionObj = JsonObj.versions[0];
  var nowAllVersion = nowAllVersionObj['version'];
  var PKG_VERSION = nowAllVersion.split('.');
  PKG_VERSION[PKG_VERSION.length-1]++;
  var nextAllVersion = PKG_VERSION.join('.');
}

var proAllArr = [],otherAllArr = [],featAllArr = [];
var nowVersionObj = {
  "version":nextAllVersion
}
// 遍历源码仓库
for(var i in prodNameArr){
  var prodName = prodNameArr[i];
  var filePath = getResolvePath('../node_modules/' + prodName + '/CHANGELOG.md');
  // 读取仓库下的changelog文件
  if(fs.existsSync(filePath)){
    var dStr = fs.readFileSync(filePath,'utf-8');
    // 获取第一个a标签的内容
    var aArr = dStr.split('<a name="');
    if(aArr.length > 1){
      var firstA = aArr[1];
      var baseStr = '<a name="' + firstA;
      var nowVersion = firstA.substring(0,firstA.indexOf('"'));
      nowVersionObj[prodName] = nowVersion;
      // 判断当前版本号是否已经存在
      if(nowAllVersionObj[prodName] == nowVersion){

      }else{
        var beginIndex = baseStr.indexOf('### Bug Fixes');
				if(beginIndex > -1){
					// 存在fixes才执行后续处理
					beginIndex  += 13;
					var endIndex = baseStr.indexOf('### Features');
					if(endIndex == -1){
						endIndex = baseStr.length;
					}
					var sortStr = baseStr.substring(beginIndex,endIndex);
					var sortArr = sortStr.split('* ');

					for(var i in sortArr){
						var nowStr = sortArr[i];
						if(i > 0){
							if(nowStr.indexOf('pro-') == 0){
								proAllArr.push(nowStr);
							}else{
								otherAllArr.push(nowStr);
							}
						}
					}
				}
				// 处理feat
				var endIndex = baseStr.indexOf('### Features');
				if(endIndex > -1){
					featAllArr.push(baseStr.substring(endIndex + 12));
				}
      }
    }
  }
}
var dateObj = new Date();
var dateStr = dateObj.getFullYear() + '-' + (dateObj.getMonth()+ 1) + '-' +  dateObj.getDate();
nowVersionObj['date'] = dateStr;
// 写入changelogAll.json
JsonObj.versions.splice(0,0,nowVersionObj);
fs.writeFileSync(jsonPath,JSON.stringify(JsonObj));

// 写入changelog
var allFilePath = getResolvePath(basePath + 'CHANGELOG-ALL.md');
var oldStr = fs.readFileSync(allFilePath,'utf-8');
var proStr = '';
for(var i in proAllArr){
	var nowForStr = proAllArr[i];
	var lastIndex = nowForStr.lastIndexOf(')') + 1;
	nowForStr = nowForStr.substring(0, lastIndex);
	proStr += '* ' + nowForStr + '\r\n\r\n';
}
var otherStr = '';
for(var i in otherAllArr){
	var nowForStr = otherAllArr[i];
	var lastIndex = nowForStr.lastIndexOf(')') + 1;
	nowForStr = nowForStr.substring(0, lastIndex);
	otherStr += '* ' + nowForStr + '\r\n\r\n';
}

var featStr = '';
for(var i in featAllArr){
	var nowForStr = featAllArr[i];
	var lastIndex = nowForStr.lastIndexOf(')') + 1;
	nowForStr = nowForStr.substring(0, lastIndex);
	featStr += nowForStr + '\r\n\r\n';
}

var allStr = '<a name="' + nextAllVersion + '"></a>\r\n<h2 class="logtit"> ' + 'V'+ nextAllVersion + ' ' + '<a class="u-button u-button-floating loglink" href=' + '"//design.yyuap.com/static/download/iuap-design-'+ nextAllVersion + '.zip">' + '<i class="icon uf uf-downloadd logicon"></i></a> ' + '<i class="logdate">(' + dateStr + ')</i></h2>\r\n\r\n';
var version_array = nextAllVersion.split('.');
if(nextAllVersion&&version_array.length>1){
	if(version_array[0]>=3&&version_array[1]>=2){
		allStr +=
		'<div class="down_info">\r\n'+
			'<h3>场景下载</h3>\r\n'+
			'<ul>\r\n'+
				'<li ><p>仅包含ui组件:<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/tinper-neoui-'+ nextAllVersion + '.zip"><i class="icon uf uf-downloadd logicon"></i></a>企业级前端UI框架，包含全局样式、CSS组件、JavaScript插件，并且提供丰富的字体图标</p><a target="_blank" href="http://docs.tinper.org/neoui/">----文档地址</a></li>'+
				'<li ><p>包含UI组件和kero组件<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/neoui-kero-'+ nextAllVersion + '.zip"><i class="icon uf uf-downloadd logicon"></i></a>包含前端UI框架以及多维数据模型</p><a target="_blank" href="http://docs.tinper.org/moy/kero-begin.html#起步">----文档地址</a></li>'+
				'<li ><p>前端请求封装<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/kero-fetch-'+ nextAllVersion + '.zip"><i class="icon uf uf-downloadd logicon"></i></a>涉及到与服务器交互时的封装方法</p><a target="_blank" href="">----文档地址</a></li>'+
				// '<li ><p>IE8兼容<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/tinper-neoui-polyfill-'+ nextAllVersion + '.zip"><i class="icon uf uf-downloadd logicon"></i></a>针对IE8进行浏览器适配处理</p></li>'+
				// '<li ><p>前端基础库<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/tinper-sparrow-'+ nextAllVersion + '.zip"><i class="icon uf uf-downloadd logicon"></i></a>前端基础库</p><a target="_blank" href="http://docs.tinper.org/sparrow/">----文档地址</a></li>'+
			'</ul>\r\n'+
		'</div>\r\n';
	}
}
if(proStr || otherStr){
	allStr += '### Bug Fixes \r\n';
	allStr += proStr;
	allStr += otherStr;
}

if(featStr){
	allStr += '### Features \r\n';
	allStr += featStr;
}


var writeStr = allStr + oldStr;
fs.writeFile(allFilePath, writeStr, function(err){
	if(err){
		console.log('write err');
	}else{
		console.log('changeLog all write success');
	}
})
