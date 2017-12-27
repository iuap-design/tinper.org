var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');
var envPath = process.cwd();
var gapi = require('./g-api.js');
var cheerio = require('cheerio');
var marked = require('marked');
//要加载的changelog的仓库repo名
var repoNameArr = [
	'tinper-bee',
	'tinper-moy',
	'tinper-sparrow',
	'tinper-neoui',
	'tinper-bee-honeycomb',
	'tinper-webide',
	'tinper-uba',
	'YY-Code-Guide',
	'tdoc',
	'kero',
	'ynpm-tool',
];
//changelog.md文件分支名
var branch = {
	'tinper-uba': 'master',
	'ynpm-tool': 'master',
	'tdoc': 'master',
	'tinper-webide': 'master',
	'tinper-bee-honeycomb': 'master',
	'YY-Code-Guide': 'master',
};
var versionOverview = {};
//从github加载changelog.md文件,写入到src/log/下
for(var i in repoNameArr){
	(function(j){
		var repoName = repoNameArr[j];
		var dirPath = path.join(envPath, 'src/log/' + repoName);

		if (!fs.existsSync(dirPath) && repoName) {
			fs.mkdirSync(dirPath);
		}

		var branchName = branch[repoName] ? branch[repoName] : 'release';
		//只有蜂巢项目的owner是tinper-bee
		var owner = repoName == 'tinper-bee-honeycomb' ? 'tinper-bee' : 'iuap-design';
		var options = {
			owner: owner,
			repo: repoName,
			path: 'CHANGELOG.md',
			branch: branchName,
			callback: writeMD,
		}

		function writeMD (str) {
			var outPath = getResolvePath('../src/log/' + repoName + '/' + repoName + '.md');
			var content = JSON.parse(str).content;
			var parsedContent = Buffer.from(content, 'base64').toString('utf8');
			// var parsedContent = fse.readFileSync(`./src/log/${repoName}/${repoName}.md`, 'utf8');

			// versionOverview[repoName] = parseVersionList(parsedContent)[0];
			// fs.writeFileSync(
			// 	path.join(envPath, 'changelog/CHANGELOG-OVERVIEW.json'),
			// 	JSON.stringify(versionOverview)
			// );

			fs.writeFileSync(outPath, content, {encoding: 'base64'});
		}

		//解析md文件获取最新版本号
		function parseVersionList (mdStr) {
			var $ = cheerio.load(marked(mdStr));
			var	list = [];

			['h1', 'h2', 'h3'].map(function(target) {
				if ($(target).contents().length) {
					$(target).each(function(i, elem){
						var version = $(this).text().match(/[0-9]+\.[0-9]+\.[0-9]+/);
						if (repoName == 'tinper-sparrow') {
							console.log(version)
							console.log(mdStr)
						}
						version && list.push(version[0]);
					});
					return true;
				}
			})

			return list;
		}


		gapi.contents(options, writeMD);

		var assetsPath = path.join(envPath, 'src/log', repoName);

		fse.copySync(path.join(envPath, '/assets/css/log/index.css'), assetsPath + '/index.css');
		fse.copySync(path.join(envPath, '/assets/js/log/index.js'), assetsPath + '/index.js');
		fse.copySync(path.join(envPath, '/src/log/SUMMARY.md'), assetsPath + '/SUMMARY.md');
	})(i)
}