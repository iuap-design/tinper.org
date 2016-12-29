#### 定制下载文件说明

**下载目录**

```
u-polyfill.js // 针对ie8的补丁
u.js // 组件定制脚本
u.css // 样式文件
```



**如何使用**

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- ie8引入polyfill.js  -->
        <!--[if lt IE 9]>
            <script src="u-polyfill.js"></script>
        <![endif]-->
        <!-- 引入u.css -->
        <link rel="stylesheet" href="./u.css">
    </head>
    <body>

        <!-- 引入u.js -->
        <script src="./u.js"></script>
    </body>
</html>
```

