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
var sumFile = ymlConfig.snip_sum;
var srcFile = ymlConfig.source;
var readFile = ymlConfig.snip_index;
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
  // `navPath` finished to exec `docPath` func.
  docPath: ['navPath', function(cb){
      for(key in navObj){
        // dir：/Users/AYA/Desktop/work/tinper.org/snippets/neoui/component
        // 最后的回调使用到了此dir
        navObj[key].forEach(function(dir, index){
          var DIR = dir;
          async.auto({
            //获取组件列表
            kits: function(cb){
                fs.readdir(dir, function(err,kits){
                    kits = ut.rmdot(kits);

                    var copymdAry = kits.filter(function(kit){
                        return /\.md$/.test(kit)
                    })
                    // console.log(copymdAry)
                    // ignore Summary && README
                    var newkits = kits.filter(function(kit){
                        return !(/\.md$/.test(kit))
                    })

                    /**
                     * 判断`.md`是否与文件件重名,报错
                     */
                     var repeater = copymdAry.filter(function(ele){
                         var basename = ele.replace(/\.md$/,'');
                         return (newkits.indexOf(basename) === -1) ? null : basename;
                     })

                     function RepeatError(ary){
                         var repeatMenu = path.basename(dir);
                         console.log('%s目录下\n%s\n文件重复,请手动处理\n',repeatMenu,ary)
                     }
                     if(repeater.length != 0){
                         throw new RepeatError(repeater);
                     }



                    /**
                     * copy 根目录下md文档（包括SUMMARY & README）
                     * 使用到全局变量: sumFile,readFile,snipConfig,srcFile
                     */
                    var markCopy = function(dir, kits, file){
                        var fillindex = kits.indexOf(file);
                        if(fillindex != -1){
                            var copySnippet = path.join(dir, file);
                            var copySrc = copySnippet.replace(snipConfig,srcFile);
                            var data = fs.readFileSync(copySnippet,'utf-8');
                            fse.ensureFileSync(copySrc);
                            fs.writeFileSync(copySrc,data,'utf-8');
                            // console.log("copySnippet:",copySnippet,"...copySrc",copySrc)
                        }
                    }
                    copymdAry.forEach(function(file){
                        markCopy(DIR,kits,file);
                    })

                    cb(null, newkits);
                    // kits value = [ breadcrumb','buttongroup','dropdown','tree' ...]

                })
            },
            // 读取单一组件内容
            readkit: ['kits',function(ele,cb){
                // ele为上一级返回的对象,key值为上一fun函数的函数名
                // {kits:[ breadcrumb','buttongroup','dropdown','tree' ...]}
                // 需要执行ele.kits
                var kits = ele.kits;
                var snipBase = ymlConfig.snip_base
                var snipDemo = ymlConfig.snip_demo
              // kit: 组件文件夹,如 button | navbar | ...
              kits.forEach(function(kit, index){
                // 最后的回调使用到了此kit变量
                var KIT = kit;

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
                          // kpath: 单一demo路径.
                          // 进行读取排序，合并
                          kpath = path.join(kitpath, kfile)

                          fs.readdir(kpath, function(err, files){
                              var files = ut.rmdot(files).sort();

                              // mapSeries顺序执行以上 sort结果
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

                                      // react js代码
                                      var beeScript = beeShow = [];

                                      var codeFun = function(data){
                                          return '<div class="examples-code"><pre><code>\r\n' + data + '</code></pre>\r\n</div>\r\n';
                                      }
                                      // 转义pre > code 下的html标签
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
                                          } else if(/\.jsx$/.test(filePath)){
                                                // .jsx用于代码显示
                                                fs.readFile(filePath, 'utf-8',function(err,data){
                                                    beeShow = codeHtmlFun(data);
                                                    cb(null,null)
                                                })
                                          } else if(/\.jsc$/.test(filePath)){
                                                // .jsc用于实际demo执行
                                                fs.readFile(filePath, 'utf-8',function(err,data){
                                                    beeScript = '\r\n<script>\r\n' + data + '\r\n</script>\r\n';
                                                    cb(null,null)
                                                })
                                          }

                                      },function(err,results){
                                            baseDemo ='\r\n' + demoMd + '\r\n' +
                                                demoHtml + '\r\n' + demoCss + '\r\n' + demoJs + '\r\n' + beeScript + '\r\n' +
                                                codeHtml + '\r\n' + codeCss + '\r\n' + codeJs + '\r\n' + beeShow + '\r\n';
                                            callback(null,baseDemo);
                                        })
                                        //遍历demo文件夹end

                                  })
                                  //end 示例文件夹遍历

                              }, function(err,results) {
                                  // 返回的数据以数组形式返回需要合并
                                  var data = results.join('\r\n');
                                  wholeback(null,data);
                              });

                          })

                      }
                  },function(err, results){
                      // 返回的数据以数组形式返回需要合并
                      var data = results.join('\r\n');

                      // 调用 `DIR` & `KIT`
                      var srcMdir = DIR.replace(snipConfig, srcFile)
                      // console.log("srcMdir:",srcMdir,"\nkit:",kit);
                      var outdir = path.join(srcMdir,`${KIT}.md`);
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
