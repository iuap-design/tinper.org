var fs = require('fs');
var fse = require('fs-extra');
var execSync = require('child_process').execSync;
var path = require('path');
var envPath = process.cwd();

var srcPath = path.join(envPath,'src');

fs.readdir(srcPath, function(err, sub){
	sub.forEach(function(subNum, index){
		console.log(subNum);
		console.log(index);
	})
});
