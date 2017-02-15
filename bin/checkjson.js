const fs = require('fs');
const path = require('path');
const scssPath = path.resolve(__dirname, '../node_modules/tinper-neoui/scss/ui');
const jsPath = path.resolve(__dirname, '../node_modules/tinper-neoui/js');

// 获取插件中文名
const neouiJson = require('./neoui.json');
const neouiJsonStyle = neouiJson.stylePlugin;
const neouiJsonJs = neouiJson.jsPlugin;
const neoModule = neouiJson.es6;
const koModule = neouiJson.ko;

var styleAry, jsAry, i;
i = 0;
styleAry = [];
jsAry = [];

/**
 * neoui-mobdatetimepicker是neoui-datetimepicker的手机适应组件，ko中没有
 * 其他组件是因为只有ui组件，没有对应的ko组件
 * @type {Array}
 */
var jsKoAry=['neoui-collapse','neoui-mobdatetimepicker','neoui-autocomplete','neoui-button',
            'neoui-clockpicker','neoui-combobox','neoui-data-table','neoui-dialog',
            'neoui-layout.md','neoui-layout.nav','neoui-loader','neoui-loading',
            'neoui-menu','neoui-message','neoui-navmenu','neoui-refer','neoui-slidePanel',
            'neoui-tabs','neoui-tooltip','neoui-validate'],//js有，ko中没有
            /**
             * keroa-ckeditor暂时搁置
             * keroa-grid对应于tinper-neoui-grid仓库,所以ui组件中没有对应的
             * keroa-tree对应于tinper-neoui-tree仓库，所以ui组件中没有对应的
             * @type {Array}
             */
    koJsAry=['keroa-ckeditor','keroa-grid','keroa-tree'];//ko中有，js中没有

/**
 * 校验json和node_modules中的资源是否存在
 */


fs.readdir(scssPath, function(err, scssFiles) {
    scssFiles.forEach(function(scssFile) {
        var fileName = scssFile.replace(/\.scss/, '');
        styleAry.push(fileName);

    });
    fs.readdir(jsPath, function(err, jsFiles) {
        jsFiles.forEach(function(jsFile) {
            var fileName = jsFile.replace(/\.js/, '');
            jsAry.push(fileName);

        });
        /**
         * panel1:校验stylePlugin参数
         */
        for (var key in neouiJsonStyle) {
            if ((styleAry+' ').indexOf(key) == -1) {
                console.log('stylePlugin参数错误: stylePlugin中的' + key + '在node_modules中没找到');
                i++;
            }
        }
        /**
         * panel2:校验jsPlugin参数
         */
        for (var key in neouiJsonJs) {
            if ((jsAry+' ').indexOf(key) == -1) {
                console.log('jsPlugin参数错误: jsPlugin中的' + key + '在node_modules中没找到');
                i++;
            }
        }
        /**
         * panel3:校验es6参数
         */
        for (var key in neouiJsonJs) {
            var pluginModule = neoModule[key];
            if (!pluginModule) {
                console.log('es6参数错误: jsPlugin中的' + key + '在es6中没有找到对应的');
                i++;
            }
        }
        /**
         * panel4:校验ko参数
         */
        for (var key in neouiJsonJs) {
            var koName = 'keroa-' + key.substr(6);
            var koObj = koModule[koName];
            if (!koObj) {
                if ((jsKoAry+' ').indexOf(key) == -1) {
                    console.log('ko参数错误: jsPlugin中的' + key + '在ko中没有找到对应的');
                    i++;
                }
            }
        }
        for (var key in koModule) {
            var koName = 'neoui-' + key.substr(6);
            if (!neouiJsonJs[koName]) {
                if ((koJsAry+' ').indexOf(key) == -1) {
                    console.log('ko参数错误: ko中的' + key + '在jsPlugin中没有找到对应的');
                    i++;
                }
            }
        }

        if (i == 0) {
            console.log('检查完毕，所有参数符合条件！');
        }
    });
});
