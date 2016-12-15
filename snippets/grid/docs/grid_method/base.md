# Grid 方法API

## ﻿setRequired

**说明**

编辑模式化设置某列是否必输

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>field</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>需要设置的数据列对应的field</td>
    </tr>
    <tr>
    	  <td>value</td>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>true表示设置为必输，false表示设置为非必输</td>
    </tr>
</table>



## getColumnAttr

**说明**

获取field对应的column对象属性

**返回值**

对应的属性值

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>attr</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>属性名称</td>
    </tr>
    <tr>
    	  <td>field</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>column对应的field</td>
    </tr>
</table>

## getColumnByField

**说明**

根据field获取column对象

**返回值**

对应的column对象

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>field</td>
    	  <td>stirng</td>
    	  <td>true</td>
    	  <td>需要获取的column对象对应的field</td>
    </tr>
</table>

## getIndexOfColumn

**说明**

获取column对象的index

**返回值**

对应的index

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>column</td>
    	  <td>object</td>
    	  <td>true</td>
    	  <td>column对象</td>
    </tr>
</table>

## getVisibleIndexOfColumn

**说明**

获取column对象在显示的数据列中的index

**返回值**

对应的index

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>column</td>
    	  <td>object</td>
    	  <td>true</td>
    	  <td>column对象</td>
    </tr>
</table>

## getNextVisibleInidexOfColumn

**说明**

获取column后面第一个显示列所在第几列

**返回值**

对应的index

**参数说明**

<table>
    <tr>
        <td>参数</td>
          <td>类型</td>
          <td>是否必须</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>column</td>
          <td>object</td>
          <td>true</td>
          <td>column对象</td>
    </tr>
</table>

## setColumnVisibleByColumn

**说明**

通过column对象设置某列是否显示

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>column</td>
    	  <td>object</td>
    	  <td>true</td>
    	  <td>column对象</td>
    </tr>
    <tr>
    	  <td>visible</td>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>true表示设置为显示，false表示设置为不显示</td>
    </tr>
</table>

## setColumnVisibleByIndex

**说明**

通过index设置某列是否显示

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>index</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>数据列对应的index</td>
    </tr>
    <tr>
    	  <td>visible</td>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>true表示设置为显示，false表示设置为不显示</td>
    </tr>
</table>

## setCoulmnWidthByField

**说明**

通过field属性设置数据列宽度

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
          <td>类型</td>
          <td>是否必须</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>field</td>
          <td>string</td>
          <td>true</td>
          <td>所需修改数据对应的field</td>
    </tr>
    <tr>
          <td>newWidth</td>
          <td>string</td>
          <td>true</td>
          <td>所需修改数据的新宽度的数值</td>
    </tr>
</table>

## setCoulmnWidth

**说明**

通过coulmn对象设置宽度

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
          <td>类型</td>
          <td>是否必须</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>column</td>
          <td>object</td>
          <td>true</td>
          <td>column对象</td>
    </tr>
    <tr>
          <td>newWidth</td>
          <td>string</td>
          <td>true</td>
          <td>所需修改数据的新宽度的数值</td>
    </tr>
</table>

## setDataSource

**说明**

设置表格控件的数据信息

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>dataSource</td>
    	  <td>object</td>
    	  <td>true</td>
    	  <td>数据信息。</td>
    </tr>
</table>

**示例**



    gridObj.setDataSource({
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
        }]
    });
## setDataSourceFun1

**说明**

设置表格控件的数据信息与setDataSource传入格式不同

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>dataSource</td>
    	  <td>object</td>
    	  <td>true</td>
    	  <td>数据信息。</td>
    </tr>
</table>

**示例**



	gridObj.setDataSourceFun1({
		fields:['column1','column2','column3','column4','column5','column6'],
			values:[
			["cl1","1","cl3","cl4","cl5","cl6"],
			["cl12","2","cl32","cl42","cl52","cl62"],
			["cl13","3","cl33","cl43","cl53","cl63"],
			["cl14","4","cl34","cl44","cl54","cl64"],
			["cl15","5","cl35","cl45","cl55","cl65"],
			["cl16","6","cl36","cl46","cl56","cl66"]
			]
	});
## addOneRow

**说明**

添加一行数据

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>row</td>
    	  <td>object</td>
    	  <td>true</td>
    	  <td>数据信息</td>
    </tr>
    <tr>
    	  <td>index</td>
    	  <td>integer</td>
    	  <td>false</td>
    	  <td>需要插入数据的位置</td>
    </tr>
</table>

**示例**



	gridObj.addonerow({
	        "column1": "value1",
	        "column2": "value2",
	        "column3": "value3"
	    },1);
## addRows

**说明**

添加多行数据

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>rows</td>
    	  <td>array</td>
    	  <td>true</td>
    	  <td>数据信息</td>
    </tr>
    <tr>
    	  <td>index</td>
    	  <td>integer</td>
    	  <td>false</td>
    	  <td>需要插入数据的位置</td>
    </tr>
</table>

**示例**



	gridObj.addRows([{
	        "column1": "value1",
	        "column2": "value2",
	        "column3": "value3"
	    },{
	        "column1": "value11",
	        "column2": "value22",
	        "column3": "value33"
	    }],1);
## deleteOneRow

**说明**

删除某条数据

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>index</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>需要删除数据对应的index</td>
    </tr>
</table>

## deleteRows

**说明**

删除多条数据

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>indexs</td>
    	  <td>array</td>
    	  <td>true</td>
    	  <td>需要删除数据的index组成的数组</td>
    </tr>
</table>

## updateRow

**说明**

修改某行数据

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>index</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>被修改行的index</td>
    </tr>
    <tr>
    	  <td>row</td>
    	  <td>object</td>
    	  <td>true</td>
    	  <td>修改之后的数据信息</td>
    </tr>
</table>

**示例**



	gridObj.updateRow(1,{
	        "column1": "value1",
	        "column2": "value2",
	        "column3": "value3"
	    });
## updateValueAt

**说明**

修改某个单元格的数据

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>rowIndex</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>所需修改数据对应的行号</td>
    </tr>
    <tr>
    	  <td>field</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>所需修改数据对应的field</td>
    </tr>
    <tr>
    	  <td>value</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>修改之后的数据</td>
    </tr>
    <tr>
    	  <td>force</td>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>true表示不管数据是否发生改变，都执行update操作，false表示只有数据改变时才执行update操作</td>
    </tr>
</table>

## setRowSelect

**说明**

设置某行选中

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>rowIndex</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>选中行对应的index</td>
    </tr>
</table>

## setRowUnselect

**说明**

取消某行的选中状态

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>rowIndex</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>取消选中行对应的index</td>
    </tr>
</table>

## setAllRowSelect

**说明**

设置所有行选中

**返回值**

无 

## setAllRowUnSelect

**说明**

设置所有行取消选中

**返回值**

无 

## getSelectRows

**说明**

获取所有选中行

**返回值**

所有选中行对象

## getSelectRowsIndex

**说明**

获取所有选中行对应的inex

**返回值**

所有选中行index

## setRowFocus

**说明**

设置某行为focus状态

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>rowIndex</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>focus行对应的index</td>
    </tr>
</table>

## setRowUnFocus

**说明**

取消某行的focus状态

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>rowIndex</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>取消focus行对应的index</td>
    </tr>
</table>

## getFocusRow

**说明**

获取focus行对象

**返回值**

focus行对象

## getFocusRowIndex

**说明**

获取focus行对应的index

**返回值**

focus行对应的index

## getAllRows

**说明**

获取所有行对象

**返回值**

所有行对象

## getRowByIndex

**说明**

根据行号获取行对象

**返回值**

行号对应的行对象

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>index</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>需要获取的行对象对应的index</td>
    </tr>
</table>

## getRowIndexByValue

**说明**

根据value值获取行号

**返回值**

查找到的行号

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>field</td>
    	  <td>stirng</td>
    	  <td>true</td>
    	  <td>value值对应的field</td>
    </tr>
    <tr>
    	  <td>value</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>value值</td>
    </tr>
</table>

## getChildRowIndex

**说明**

树表展示下根据row对象获取此row下所有子元素的rowIndex

**返回值**

查找到的行号

**参数说明**

<table>
    <tr>
        <td>参数</td>
          <td>类型</td>
          <td>是否必须</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>row</td>
          <td>object</td>
          <td>true</td>
          <td>grid中的row对象</td>
    </tr>
</table>

## getColumnByVisibleIndex

**说明**

获取显示的第N列的column对象

**返回值**

查找到的行号

**参数说明**

<table>
    <tr>
        <td>参数</td>
          <td>类型</td>
          <td>是否必须</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>index</td>
          <td>integer</td>
          <td>true</td>
          <td>需要查找的列在所有显示列中的序号</td>
    </tr>
</table>

## setRenderType

**说明**

设置某列的renderType属性

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>field</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>设置renderType属性数据列对应的field</td>
    </tr>
    <tr>
    	  <td>renderType</td>
    	  <td>function</td>
    	  <td>true</td>
    	  <td>新的renderType</td>
    </tr>
</table>

## setShowHeader

**说明**

设置是否显示表头

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>showHeader</td>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>true表示设置为显示表头，false表示设置为不显示表头</td>
    </tr>
</table>

## setColumnPrecision

**说明**

设置数据列的精度

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>field</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>需要设置的数据列对应的field</td>
    </tr>
</table>

## setMultiSelect

**说明**

设置是否显示复选框

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>multiSelect</td>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>true表示显示复选框，false表示不显示复选框</td>
    </tr>
</table>

## setShowNumCol

**说明**

设置是否显示数字列

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>showNumCol</td>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>true表示显示数字列，false表示不显示数字列</td>
    </tr>
</table>

## setEditType

**说明**

设置某列的editType属性

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>field</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>设置editType属性数据列对应的field</td>
    </tr>
    <tr>
    	  <td>editType</td>
    	  <td>function</td>
    	  <td>true</td>
    	  <td>新的editType</td>
    </tr>
</table>

## setEditable

**说明**

设置是否支持编辑功能

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>editable</td>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>true表示支持编辑功能，false表示不支持编辑功能</td>
    </tr>
</table>

## setGridEditType

**说明**

设置编辑方式

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>newEditType</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>default表示在数据行上进行编辑，form表示在单独的form区域进行编辑</td>
    </tr>
</table>

## setGridEditTypeAndEditRow

**说明**

设置编辑方式同时出发对应单元格的编辑

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>newEditType</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>default表示在数据行上进行编辑，form表示在单独的form区域进行编辑</td>
    </tr>
    <tr>
    	  <td>rowIndex</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>单元格对应的行号</td>
    </tr>
    <tr>
    	  <td>colIndex</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>单元格对应的列号</td>
    </tr>
</table>

## expandNode

**说明**

树表形式下通过value展开某个节点

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>keyValue</td>
    	  <td>string</td>
    	  <td>true</td>
    	  <td>需要展开节点的keyField对应的数值</td>
    </tr>
</table>

## expandNodeByIndex

**说明**

树表形式下通过index展开某个节点

**返回值**

无

**参数说明**

<table>
    <tr>
        <td>参数</td>
    	  <td>类型</td>
    	  <td>是否必须</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>rowIndex</td>
    	  <td>integer</td>
    	  <td>true</td>
    	  <td>需要展开节点的index</td>
    </tr>
</table>

