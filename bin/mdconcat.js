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
                  // kitfiles:单一组件合集，包括base.md及文件夹demo
                  var kitfiles = ut.rmdot(kitfiles);

                  async.map(kitfiles, function(kfile, wholeback){
                      var kpath;
                      var baseMd = null;


                      if(kfile === snipBase){
                          // kpath: base.md路径,读取基本内容
                          kpath = path.join(kitpath, kfile)
                          fs.readFile(kpath,'utf-8',function(err,data){
                              baseMd = data;
                              wholeback(null, baseMd);
                          })
                      } else if(kfile === snipDemo){
                          kpath = path.join(kitpath, kfile)

                          fs.readdir(kpath, function(err, files){
                              var files = ut.rmdot(files).sort();

                              async.mapSeries(files, function(exfile, callback) {
                                  var exPath = path.join(kpath, exfile);

                                  //start 示例文件夹遍历
                                  fs.readdir(exPath, function(err,files){
                                      // files为最终层级文件，如.html .md .css .js
                                      var files = ut.rmdot(files);
                                      var baseDemo = [];
                                      var demoMd = [];
                                      var demoHtml = [];
                                      var demoCss = [];
                                      var demoJs = [];
                                      var codeHtml = [];
                                      var codeCss = [];
                                      var codeJs = [];
                                      var codeFun = function(data){
                                          return '<div class="examples-code"><pre><code>\r\n' + data + '</code></pre>\r\n</div>\r\n';
                                      }
                                      var codeHtmlFun = function(data){
                                          return '<div class="examples-code"><pre><code>\r\n' + data.replace(/\</g,'&lt;') + '</code></pre>\r\n</div>\r\n';
                                      }

                                      //遍历demo文件夹start

                                      async.map(files,function(item,cb){
                                          var filePath = path.join(exPath,item);

                                          if(/\.md$/.test(filePath)){
                                                fs.readFile(filePath, 'utf-8',function(err,data){
                                                      demoMd = data;
                                                      cb(null,null)
                                                })
                                          } else if(/\.html$/.test(filePath)){
                                                fs.readFile(filePath, 'utf-8',function(err,data){
                                                      demoHtml = '<div class="example-content">' + data + '</div>\r\n';
                                                      codeHtml = codeHtmlFun(data);
                                                      cb(null,null)
                                                })
                                          } else if(/\.css$/.test(filePath)){
                                                fs.readFile(filePath, 'utf-8',function(err,data){
                                                      demoCss = '<div class="example-content ex-hide"><style>\r\n' + data + '\r\n</style></div>';
                                                      codeCss = codeFun(data);
                                                      cb(null,null)
                                                })
                                          } else if(/\.js$/.test(filePath)){
                                                fs.readFile(filePath, 'utf-8',function(err,data){
                                                      demoJs = '\r\n<script>\r\n' + data + '\r\n</script>\r\n';
                                                      codeJs = codeFun(data);
                                                      cb(null,null)
                                                })
                                          }

                                      },function(err,results){
                                            baseDemo ='\r\n' + demoMd + '\r\n' + demoHtml + '\r\n' + demoCss + '\r\n' + demoJs + '\r\n'
                                                + codeHtml + '\r\n' + codeCss + '\r\n' + codeJs + '\r\n';
                                            callback(null,baseDemo);
                                        })
                                        //遍历demo文件夹end

                                  })
                                  //end 示例文件夹遍历

                              }, function(err,results) {
                                  var data = results.join('\r\n');
                                  wholeback(null,data);
                              });

                          })

                      }
                  },function(err, results){
                      var data = results.join('\r\n');
                      var srcFile = ymlConfig.source;
                      var srcMdir = dir.replace(snipConfig, srcFile)
                      //   console.log("srcMdir:",srcMdir,"\nkit:",kit);
                      var outdir = path.join(srcMdir,`${kit}.md`);
                      var results = results.join('\r\n');
                      fse.ensureFile(outdir,function(){
                          fs.writeFile(outdir,results,'utf-8')
                      });

                  })

                })
              })

            }]

          })
        })
      }
  }]

})
