var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');
var yaml = require('js-yaml');
var async = require('async');
var ut = require('./utool.js')
/**
 * 读取配置文件
 */
var envPath = process.cwd();
var ymlPath = path.join(envPath,'_config.yml');
var ymlConfig = yaml.safeLoad(fs.readFileSync(ymlPath, 'utf8'));
var snipConfig = ymlConfig.snip_dir;
var snipPath = path.join(envPath,snipConfig);
// ...tinper.org/snippets

/**
 * 判断输出文件夹是否存在
 */
var navObj = {};
// 遍历根目录snipPath
async.auto({
  /**
   * navPath获取子站目录路径，写入navObj
   * example
   * navObj =
      { neoui:
        [ '/Users/AYA/Desktop/work/tinper.org/snippets/neoui/component',
          '/Users/AYA/Desktop/work/tinper.org/snippets/neoui/global',
          '/Users/AYA/Desktop/work/tinper.org/snippets/neoui/plugin'
        ]
      }
   */
  navPath: function(cb) {
    fs.readdir(snipPath, function(err,dirs){
      var dirs = ut.rmdot(dirs);

      var getNav = function(dir,index){
        var dirPath = path.join(snipPath,dir);
        navObj[dir] = [];

        // 此处使用fs.readdir异步会造成问题
        // 需要理解以下问题:异步中如何异步完成后执行
        var navs = fs.readdirSync(dirPath);
        navs = ut.rmdot(navs);
        navs.map(function(nav){
          navObj[dir].push(path.join(dirPath,nav));
        })
      }

      dirs.forEach(getNav)
      cb(null)
    })
  },
  /**
   * docPath:获取单一组件（即文件夹内容），进行处理
   * 忽略SUMMARY.md
   */
  docPath: ['navPath', function(cb){
      for(key in navObj){
        // dir：/Users/AYA/Desktop/work/tinper.org/snippets/neoui/component
        navObj[key].forEach(function(dir, index){
          async.auto({
            //获取组件列表
            kits: function(cb){
              fs.readdir(dir, function(err,kits){
                kits = ut.rmdot(kits);

                // ignore Summary
                var sumfile = ymlConfig.snip_sum;
                var sumindex = kits.indexOf(sumfile);
                kits.splice(sumindex, 1)

                cb(null,kits)
              })
            },
            // 读取单一组件内容
            readkit: ['kits',function(ele,cb){
              var kits = ele.kits;
              var snipBase = ymlConfig.snip_base
              var snipDemo = ymlConfig.snip_demo

              // kit: 组件文件夹,如 button | navbar | ...
              kits.forEach(function(kit, index){
                var kitpath = path.resolve(dir, kit)

                fs.readdir(kitpath, function(err,kitfiles){
                  var kitfiles = ut.rmdot(kitfiles);
                  kitfiles.forEach(function(kfile, index){
                    var kpath;
                    var baseData = null;
                    var baseDemo = null;
                    if(kfile === snipBase){
                      // kpath: base.md路径,读取内容
                      kpath = path.join(kitpath, kfile)
                      fs.readFile(kpath,'utf-8',function(err,data){
                        baseData = data;
                      })
                    } else if(kfile === snipDemo) {
                      // kpath: demo路径,读取内容
                      kpath = path.join(kitpath, kfile)
                      console.log(kpath);
                      // fs.readdir(kpath, function(err, files){
                      //   var files = ut.rmdot(files).sort();
                      //   console.log(files);
                      // })
                      var filess = fs.readdirSync(kpath);
                      console.log(filess);
                    }
                  })
                })
              })

            }]



          })
        })
      }
  }]
  // logdir: ['loopdir',function(val,cb) {
  //   console.log('获取到的文件夹是:',val)
  // }]
})




/**
 * 读取base.md内容
 */


/**
 * 读取demo内容
 * 依次合并demo内容
 */

/**
 * 合并base.md 及 demo 内容
 * 输出合并后文件
 */
