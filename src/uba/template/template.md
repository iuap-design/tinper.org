#uba-template文档
uba-template 是一个集成了timper组件库的开源模板,是uba前端开发工具的重要组成部分

##安装方式
首先需要全局安装 [uba](uba.md)
​    
    npm install uba -g

##使用姿势

###快速生成一个项目

执行uba的指令

    uba list
    uba init iuap web01
会在当前目录下生成一个以 iuap 为模板的 web项目 web01
进入web01,并安装依赖

    cd web01
    npm install
    uba server
然后打开浏览器,输入localhost:3000可以看到生成的项目效果

###生成一个页面

执行uba的生成页面指令,生成一个页面,暂且就叫 mypage

    uba page mypage
这步操作会在web01/src/containers中生成一个mypage文件夹,在mypage文件夹下,有可以直接使用的脚本及页面

    index.js
    index.html
    index.css
那么如何将mypage的页面
在web01/src/config下有一个router.js,是全局的路由配置文件
​    
    require(['director', '../components/home/home'], function(director, home) {

        home();

        var router = new director.Router();

        router.on('/page1', function() {
            require('../containers/page1/index')();
        });
        router.on('/page2', function() {
            require('../containers/page2/index')();
        });
        router.on('/page3', function() {
            require('../containers/page3/index')();
        });
        router.on('/page4', function() {
            require('../containers/page4/index')();
        });
        router.on('/page5', function() {
            require('../containers/page5/index')();
        });
        router.on('/page6', function() {
            require('../containers/page6/index')();
        });
    
        router.init();
    });

将我们刚刚生成的mypage配置到最下方 (page1~page6只是例子,可以删除的)
​    
    require(['director', '../components/home/home'], function(director, home) {

        home();

        var router = new director.Router();

        router.on('/page1', function() {
            require('../containers/page1/index')();
        });
        router.on('/page2', function() {
            require('../containers/page2/index')();
        });
        router.on('/page3', function() {
            require('../containers/page3/index')();
        });
        router.on('/page4', function() {
            require('../containers/page4/index')();
        });
        router.on('/page5', function() {
            require('../containers/page5/index')();
        });
        router.on('/page6', function() {
            require('../containers/page6/index')();
        });
        router.on('/mypage',function() {
            require('../containers/mypage/index')(); //此处的index指的是mypage文件夹下的index.js并非index.html
        })
        router.init();
    });

然后让我们回过头,再看一下web01/src/containers/mypage/index.js中的内容

    require('./index.css');
    require('./index.less');
    var pageHtml = require('./index.html');
    module.exports = function () {
    
        //此处的'.page-container'是src目录下的index.html中的一个div也就是页面最后加载的位置
        //此行代码将mypage目录下的index.html挂到src目录下的index.html中className为page-container节点上
    
        document.querySelector('.page-container').innerHTML = pageHtml;
        
        //在此处书写逻辑代码jquery的$变量与timper的u变量为全局的,无须再次引入,可直接使用 enjoy it
    }

保存后,打开浏览器输入localhost:3000/#mypage即可看到我们生成的mypage下index.html的内容

