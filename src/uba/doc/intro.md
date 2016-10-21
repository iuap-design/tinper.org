# uba使用

## uba介绍:

uba是一个集合并、压缩、模板生成、打包及发布为一体的前端application开发工具，指令简单易用，生成项目结构明朗清晰，同时内部集成强大的tinper前端组件库，可快速搭建起一个前端项目。

## 全局安装uba

    npm install uba -g
执行 uba 或 uba -h 或 uba --help,查看 uba 所提供的指令

    uba
![alt text][id]

[id]: /assets/images/docs/order_list.png "指令集"
执行list指令查看可用模板

    uba list
![alt text][id1]

[id1]: /assets/images/docs/uba_list.png "指令集"
选择以iuap为模板,初始化项目
​    
    uba init iuap web01
![alt text][id2]

[id2]: /assets/images/docs/uba_init.png "指令集"
uba init 为 uba 的指令之一,负责初始化web工程,iuap 为 uba-template 的多套模板之一, web01 为项目名称

进入 web01 文件夹,安装依赖

    cd web01
    npm install
web01的目录结构如下

![alt text][id3]

[id3]: /assets/images/docs/file_tree.png "指令集"
启动开发模式

    uba server
浏览器访问 localhost:3000 后可以看到生成的模板页面

![alt text][id4]

[id4]: /assets/images/docs/iuap.png "指令集"

执行打包指令，会在项目中新建一个 build（名字可配置） 文件夹，文件会装在其中

    uba build
![alt text][id5]

[id5]: /assets/images/docs/uba_build.png "指令集"

* [uba-template 配置](uba-template.md)