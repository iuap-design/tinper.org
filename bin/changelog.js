var fs = require('fs');
var path = require('path');
var envPath = process.cwd();
var PKG = require('../package.json');

/**
 * version 调整
 */
var PKG_VERSION = PKG.version.split('.');
PKG_VERSION[PKG_VERSION.length-1]++;
var NEW_VERSION = PKG_VERSION.join('.');

/**
 * 修改package.json version版本信息
 */
// var packPath = path.resolve(envPath,'package.json');
// var readData = fs.readFileSync(packPath, 'utf-8');
// var result = readData.replace(/("version":\s*")(\d+.\d+.\d+)"/,`$1${NEW_VERSION}"`);
// fs.writeFileSync(packPath,result, 'utf-8');

/**
 * 命令执行
 */
// var execSync = require('child_process').execSync;
// var command = `git tag v${NEW_VERSION} && git push origin v${NEW_VERSION} && git add . && git commit -m 'build tag & CHANGELOG' && git push origin release`
// execSync(command);
