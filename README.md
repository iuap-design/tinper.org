[![logo](http://tinper.org/assets/images/tinperlogos32.png)](http://tinper.org)

---

[![GitHub closed issues](https://img.shields.io/github/issues-closed/badges/shields.svg)](https://github.com/iuap-design/tinper.org)

[中文文档](./README_CN.md)

## Introduction

`tinper.org` is `tinper` offical website，save documentation and examples。

> Online webIDE demo：[tinper-webide](https://github.com/iuap-design/tinper-webide)



## Features

`tinper.org`based on`hexo`,`jekyll` document structure，as `marked` markdown tool core, achieving the following：

* Support Markdown & Template to HTML

* Reuse Documention & Demo

* Support templates

* Support custom download

* Use `tinper-neoui`UI component


## Quickstart

#### Install

* Clone

  ```
  $ git clone git@github.com:iuap-design/tinper.org.git
  ```

* Install dependencies

  ```
  $ npm install
  ```


#### Usage 

* Output pages

  ```
  $ npm run dist
  ```

* Server

  ```
  $ node server/app
  or
  $ npm run dev
  ```

  ​

## Document

#### Menu

| Name            | Content                 | Note                                     |
| --------------- | ----------------------- | ---------------------------------------- |
| assets          | static resources        | style & jpeg & js files                  |
| bin             | execute                 | depend`_config.yml`                      |
| data            | render data             |                                          |
| dist            | dist menu               | all static pages                         |
| download        | custom package download |                                          |
| layout          | page template           | create template                          |
| partial         | public files            | create header & footer                   |
| src             | src files               | change html file                         |
| entry.js        | custom download entry   |                                          |
| snippets        | origin md file          |                                          |
| **_config.yml** | **config file**         | `bin/md2html.js`,`bin/mdconcat.js` depend __config.yml |

#### Website Output Introduction 

Output the order：

1. `snippets`：

   - md & demo files: Merging  to `src` directory
   - `SUMMARY`,`README`:Copy to src directory

   Finish the merge & copy, just in command line:

   ```
   npm run docs
   ```

2. `src`directory to store merged `md` files , orgin `html`，just to build：

   - `md` convert to `html`
   - `html` load public resources
     - load public header & footer
     - read `data`
   - html to render

   Execute：

   ```
   npm run mark
   ```

3. Show the demo:

   ```
   node server/app.js
   or
   npm run reload
   ```


#### Website Edit

- Origin `md` stored in `snippets`:

  - List as the final directory. ex. Neoui

    ```
    snippets/neoui
    |── component
    |── global
    |── plugin
    ```

  - Single component( with demo). ex `breadcrumb`，documentation need as the follow structure：

    ```
    snippets/neoui/component/breadcrumb
    ├── base.md
    └── demo
        ├── 1-base
        │   ├── widget.html // 1-base base html snippet, optional
        │   ├── widget.js // 1-base base js snippet, optional
        │   ├── widget.css // 1-base base css snippet, optional
        │   └── 说明.md //1-base base demo introduction
        ├── 2-base-icon
        │   ├── widget.css
        │   ├── widget.html
        │   └── 说明.md
        └── 3-base
            ├── widget.css
            ├── widget.html
            └── 说明.md
    ```

    menu introduction:

    - base.md ：base demo introduction

    - demo： store single or multi demos. demo need start with number for ordering

    - 1-base：single demo

      > The suffix name:md,html,css,js

  - Single component(without demo), directly create file ,not need to create directory

    ```
    snippets/neoui/component/
    ├── button.md
    ```

  - Out：Output to `src` directory:

    ```
    npm run docs
    ```



- `src`menu:
  - md：`SUMMARY.md` to match the directory other `md` file name
  - html：use default template or create custom template
- default develop branch：
  - `develop`
- website online branch：
  - `release`

#### Out Process

- dist

  ```
  $ npm run mark
  or
  $ node bin/index.js
  ```

  - md convert html
  - html render
  - output dist directory

- debug:

  ```
  $ npm run reload
  or
  $ node bin/reload.js
  ```

  - listen 8002 port
  - automatic reload browser

- deploy:

  ```
  $ npm run deploy
  ```


#### Warn

- !!! snippets create directory，Need create directory with the navigation name.
- Template `{{include ./header}}`,start with`.` relative path，dont contain suffix name.




## Contributing

#### PR code

[CONTRIBUTING.md](./CONTRIBUTING.md)

#### Website Chat Group

527124070



## Licence

[MIT](./LICENSE)