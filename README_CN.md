[![logo](http://tinper.org/assets/images/tinperlogos32.png)](http://tinper.org)

---

[![GitHub closed issues](https://img.shields.io/github/issues-closed/badges/shields.svg)](https://github.com/iuap-design/tinper.org)

[English Document](./README.md)

## 介绍

`tinper.org`是`tinper`框架的官网仓库，用于存放`tinepr`相关文档及示例。

> 在线webIDE示例查看，可移至此仓库查看：[tinper-webide](https://github.com/iuap-design/tinper-webide)



## 功能

`tinper.org`借鉴静态博客网站生成工具`hexo`,`jekyll`文档结构，在底层第三方`marked`核心基础上扩展了功能开发：

* 支持多文件形态(md & 模板引擎)输出静态页

* 最大程度复用文档示例

* 支持模板及扩展

* 支持定制下载

* 原生使用`tinper-neoui`组件库

  ​

## 快速上手

#### Install 安装

* clone仓库

  ```
  $ git clone git@github.com:iuap-design/tinper.org.git
  ```

* 安装依赖

  ```
  $ npm install
  ```


#### Usage 使用 

* 页面输出

  ```
  $ npm run dist
  ```

* 起服务

  ```
  $ node server/app
  或
  $ npm run dev
  ```

  ​

## 文档

#### 目录结构

| 名称              | 内容         | 备注                                      |
| --------------- | ---------- | --------------------------------------- |
| assets          | 静态及第三方资源   | 存放样式&图片&JS文件                            |
| bin             | 执行文件       | 注意需要依赖`_config.yml`配置                   |
| conf            | webIDE依赖文件 | 待迁移                                     |
| data            | 页面渲染需要的数据  |                                         |
| dist            | 输出目录       | 所有输出的静态页面                               |
| download        | 定制下载输出目录   |                                         |
| layout          | 页面模板       | 创建页面模板                                  |
| partial         | 页面公用部分(头尾) | 创建头尾                                    |
| src             | 源文件        | 所有html原文件在此目录下修改                        |
| entry.js        | 定制下载入口文件   |                                         |
| snippets        | 原始md及示例    | 所有md及示例在此目录下修改                          |
| **_config.yml** | **全局配置文件** | `bin/md2html.js`,`bin/mdconcat.js`依赖此配置 |

#### 官网机制说明

官网按照以下顺序输出最终页面：

1. `snippets`：

   - 存放md和实例文档:可执行合并等其他处理，输出合并后文档到`src`下
   - 存放目录`SUMMARY`(目录),`README`(首页):可执行拷贝输出到`src`下

   实现以上功能，执行:

   ```
   npm run docs
   ```

2. `src`文件用于存放官网静态页面源文件，包含合并后的md文档，html原文件，可执行：

   - md文档转为html格式
   - html加载公共资源
     - html加载layout布局，加载partial中的公共头尾
     - html读取`data`文件下数据
   - html执行渲染

   实现以上功能，执行：

   ```
   npm run mark
   ```

3. 查看演示效果

   ```
   node server/app.js
   或者
   npm run reload
   ```


#### 官网编辑说明

- 所有md文档的初始片段均存放于`snippets`下，可在此文件按照以下说明进行编辑删除组件。

  - 按照最终网站展示目录进行存放，以neoui为例，导航包含三部分，故目录结构：

    ```
    snippets/neoui
    |── component
    |── global
    |── plugin
    ```

  - 单一组件（有示例）如下例`breadcrumb`，文档需要按照以下目录：

    ```
    snippets/neoui/component/breadcrumb
    ├── base.md
    └── demo
        ├── 1-base
        │   ├── widget.html // 1-base 示例的html片段，如没有则无需创建此片段
        │   ├── widget.js // 1-base 示例的js片段，如没有则无需创建此片段
        │   ├── widget.css // 1-base 示例的css片段，如没有则无需创建此片段
        │   └── 说明.md //1-base 示例的基本描述
        ├── 2-base-icon
        │   ├── widget.css
        │   ├── widget.html
        │   └── 说明.md
        └── 3-base
            ├── widget.css
            ├── widget.html
            └── 说明.md
    ```

    目录说明

    - base.md ：组件的基本描述

    - demo： 文件夹存放组件的示例，多个示例创建子集目录如有次序，请以数字开头进行排序，方便脚本筛选次序，以正确顺序展示示例

    - 1-base：单一示例，根据示例情况，可以创建对应片段，注意

      > 要求后缀名为md,html,css,js，文件名不做要求，建议统一采用上述语义化文件名

  - 单一组件（没有示例），可以直接在组件目录创建对应的md文档即可,不需要创建文件夹

    ```
    snippets/neoui/component/
    ├── button.md
    ```

  - 输出：如编辑过程需要输出到src目录下查看md和实例合并后的输出结构，可通过**在tinper.org仓库的根目录下**执行以下命令，即可在`src`目录下查看输出`合并后的md文档`:

    ```
    npm run docs
    ```



- 官网文档及内容页面均存放于`src`目录下，合理按照官网内容层级分配。可增删html或md文件
  - md文档：增加md文档，需要在同一目录下的`SUMMARY.md`增加对应md文档链接
  - html：html文件可在`layout`选择所需模板或自行创建模板
- 默认开发分支：
  - `develop`分支
- 官网线上分支：
  - `release`分支

#### 输出流程

- 本地输出：项目根目录下执行

  ```
  $ npm run mark
  或
  $ node bin/index.js
  ```

  以上命令完成：

  - md转换为html，嵌入对应layout布局模板
  - html文件执行文件渲染，获取data数据
  - 输出最终dist目录

- 本地调试:

  ```
  $ npm run reload
  或
  $ node bin/reload.js
  ```

  以上命令：

  - 默认开启8002端口
  - `src`目录文件修改后，会自动执行输出并刷新浏览器

- 官网部署

  ```
  $ npm run deploy
  ```


#### 注意事项

- !!! snippets下创建子目录（即子站），需要创建下一及目录作为子站，否则会报错
- 使用模板引擎，需要注意`{{include ./header}}`,需要使用`.`开头相对路径，文件名不能加后缀



## Contributing 如何参与贡献

#### 如何提交代码

[CONTRIBUTING.md](./CONTRIBUTING.md)

#### 官方QQ群

527124070



## Licence 版权

[MIT](./LICENSE)