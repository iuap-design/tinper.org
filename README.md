# tinper官网说明

### 待开发工作

- 官网主要内容补充：
  - uba,react,sparrow文档适配处理
  - react插件线上部署测试
  - 移动端样式
  - 案例页需要增加内容
  - uba,sparrow增加内容,文档梳理
  - 官网整体排查更改样式,链接等
- 官网待优化
  - 官网首页及定制页头尾没有完全抽离，目前后续维护有不足
  - SUMMARY.md,README目前还在src目录下需要单独维护，待改进
  - 维护文档补充



### 整体说明

未采用`hexo`,`jeykll`等第三方博客系统，原因如下：

- 样式`.styl`文件采用模板语法，不利于维护
- 模板多为`blog`列表形式，可选范围小
- 模板修改需要学习模板引擎（多为后端模板引擎语法），操作复杂
- 增加功能有局限性
- 不方便扩展或直接使用`neoui`框架内容
- 多官网需要多仓库管理

借鉴`hexo`，根据`tinper`1主4子官网业务需求，做了单一仓库，合理目录管理的输出机制：

- 支持多文件形态(md & 模板引擎)输出静态页
- 最大程度复用`iuap-design`文档
- 支持模板扩展
- 原生使用neoui

### 完成情况

- 实现目前业务需求的输出机制
- 实现官网主体内容部署
- 完成子库文档迁移整合
- 实现neoui 页面demo效果展示

### 目录结构

| 名称       | 内容         | 备注                   |
| -------- | ---------- | -------------------- |
| assets   | 静态及第三方资源   | 存放样式&图片&JS文件         |
| bin      | 执行文件       | 用于md文档转换命令           |
| conf     | webIDE依赖文件 | 待迁移                  |
| data     | 页面渲染需要的数据  |                      |
| dist     | 输出目录       |                      |
| download | 定制下载输出目录   |                      |
| layout   | 页面模板       |                      |
| partial  | 页面公用部分(头尾) |                      |
| src      | 源文件        | 存放md，html等未渲染文件      |
| entry.js | 定制下载入口文件   |                      |
| snippets | 原始md及示例    | 存放md及示例html,js,css片段 |

### 官网机制说明

官网按照以下顺序输出最终页面：

1. `snippets`存放md和实例文档，可执行合并等其他处理，输出合并后文档到src文件夹下

   实现以上功能，执行:

   ```
   npm run docs
   ```

   ​

2. `src`文件用于存放官网静态页面源文件，包含如md文档，html文件，通过执行：

   * md文档转为html格式
   * html加载资源
     * html加载layout布局，加载partial中的公共头尾
     * html读取`data`文件下数据
   * html执行渲染 

   实现以上功能，执行：

   ```
   npm run mark
   ```
   ​

3. 查看演示效果

   ```
   node server/app.js
   或者
   npm run reload
   ```

   ​


### 官网编辑说明

* 所有md文档的初始片段均存放于`snippets`下，可在此文件按照以下说明进行编辑删除组件。

  * 按照最终网站展示目录进行存放，以neoui为例，导航包含三部分，故目录结构：

    ```
    snippets/neoui
    |── component
    |── global
    |── plugin
    ```

  * 单一组件文档需要按照以下目录：

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

    * base.md ：组件的基本描述

    * demo： 文件夹存放组件的示例，多个示例创建子集目录如有次序，请以数字开头进行排序，方便脚本筛选次序，以正确顺序展示示例

    * 1-base：单一示例，根据示例情况，可以创建对应片段，注意

      > 要求后缀名为md,html,css,js，文件名不做要求，建议统一采用上述语义化文件名

  * 输出：如编辑过程需要输出到src目录下查看md和实例合并后的输出结构，可通过**在tinper.org仓库的根目录下**执行以下命令，即可在`src`目录下查看输出`合并后的md文档`:

    ```
    npm run docs
    ```





- 官网文档及内容页面均存放于`src`目录下，合理按照官网内容层级分配。可增删html或md文件
  - md文档：增加md文档，需要在同一目录下的`SUMMARY.md`增加对应md文档链接
  - html：html文件可在`layout`选择所需模板或自行创建模板
- 默认开发分支：
  - `dev`分支
- 官网线上分支：
  - `release`分支

### 输出流程

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

