# 快速上手

Iuap Design React 致力于提供给程序员愉悦快速的开发体验


>标准开发

>兼容性

>自行构建

>按需加载

>配置主题和字体

>小甜点

在开始之前，推荐学习 <a href="http://facebook.github.io/react">React</a> 和 <a href="http://www.nodeclass.com/api/ECMAScript6.html">ES2016</a>

# 标准开发

实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。 我们提供了一套 npm + webpack 的开发工具链来辅助开发，下面我们用一个简单的实例来说明。

## 获取tinper-bee

- 直接动github获取我们的源码

```

git clone git@github.com:iuap-design/tinper-bee.git

```
- 使用npm安装

```
	npm install --save tinper-bee	

```

- 使用CDN

```
```
当前tinper-bee框架的版本 0.0.1

## 目录及文件说明

```

│
├─assets
│      base.css
│      component.css
│
├─build
│      tinper-bee.js
│      tinper-bee.min.js
│
└─


```
## 开始使用

以`button`为例子

```

import { Button } from 'tinper-bee';

ReactDOM.render(<Button />, mountNode);


```
## 参与讨论和开发

如在使用过程中遇到任何问题，可以在[这里](https://github.com/iuap-design/tinper-bee/issues)提交issue反馈；

或者直接fork代码到你的github仓库，提交pull request给我们。

有紧急问题可以直接邮件给我（Email：guoyff@yonyou.com）


## 开发及构建

开发者可以一起参与为 tinper-bee 贡献代码，同时也可以基于 tinper-bee 进行二次开发或封装插件。

[tinper-bee](https://github.com/tinper-bee)

### 目录结构

```
bower.json
CHANGELOG.md
CONTRIBUTING.md
build/
assets/
docs/
gulpfile.js
package.json
README.md

```
