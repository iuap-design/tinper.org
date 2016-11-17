# Grid表格控件

表格控件将数据以表格的方式进行展示，同时提供了排序、交换列、数字列、复选、合计、自定义渲染、修改等复杂功能，满足了复杂场景下数据展示的需求。

# 插件依赖

```
<!--css-->
<link rel="stylesheet" href="//design.yyuap.com/static/uui/latest/css/font-awesome.css">
<link rel="stylesheet" href="//design.yyuap.com/static/uui/latest/css/u.css">
<link rel="stylesheet" href="//design.yyuap.com/static/uui/latest/css/grid.css">

<!--js-->
<script src="//design.yyuap.com/static/jquery/jquery-1.9.1.min.js"></script>
<script src="//design.yyuap.com/static/uui/latest/js/u-polyfill.js"></script>
<script src="//design.yyuap.com/static/knockout/knockout-3.2.0.debug.js"></script>
<script src="//design.yyuap.com/static/uui/latest/js/u.js"></script>
<script src="//design.yyuap.com/static/uui/latest/js/u-grid.js"></script>
```



# 如何使用

1、创建div

```
<div class="grid-body">
    <div class="grid" id="grid-comp1"></div>
</div>
```

2、创建column对象

```
var colu = [{
     field: "id",
    title: "id"
}, {
    field: "pid",
    title: "pid"
}, {
    field: "column1",
    title: "column1"
}, {
    field: "column2",
    title: "column2"
}, {
    field: "column3",
    title: "column3"
}
];
```

3、创建数据信息

```
var data1 = {
    values: [{
        column1: "11",
        column2: "12",
        column3: "13",
        id: '0',
        pid: ''
    }, {
        column1: "21",
        column2: "22",
        column3: "23",
        id: '1',
        pid: '0'
    }, {
        column1: "31",
        column2: "32",
        column3: "33",
        id: '3',
        pid: '1'
    }
    ]
};
```

4、创建表格控件
​    

```
$("#grid-comp1").grid({
    dataSource: data1,
    id: 'case-g1',
    editable: true,
    keyField: 'id',
    columnmenu: false,
    parentKeyField: 'pid',
    columns: colu
});
```



