var fse = require('fs-extra');
var path = require('path');

/**
 * path
 */
var origin = path.resolve(__dirname, './node_modules/kero-adapter/CHANGELOG-ALL.md')
var dist = path.resolve(__dirname,'./snippets/log/docs/changelog.md')

/**
 * copy
 */
fse.copySync(origin, dist)
