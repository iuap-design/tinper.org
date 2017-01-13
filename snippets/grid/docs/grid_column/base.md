# Grid 列属性API

## ﻿field

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>string</td>
    	  <td>null</td>
    	  <td>数据列对应的field</td>
    </tr>
</table>

## width

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>integer</td>
    	  <td>200</td>
    	  <td>数据列显示的宽度，可支持百分比和数字两种方式。百分比情况下则内容区不显示滚动条。</td>
    </tr>
</table>

## sortable

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>数据列是否支持排序。true表示支持排序，false表示不支持排序</td>
    </tr>
</table>

## canDrag

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>数据列是否支持拖动修改宽度。true表示支持拖动，false表示不支持拖动</td>
    </tr>
</table>

## fixed

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>是否为固定列。true表示此列为固定列，在表头前面固定显示，false，表示此列不为固定列</td>
    </tr>
</table>

## visible

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>是否显示。true表示此列进行显示，false表示此列不进行显示</td>
    </tr>
</table>

## canVisible

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>是否可以通过表头功能设置数据列是否显示。true表示可以通过表头设置是否显示，false表示不可以通过表头设置是否显示</td>
    </tr>
</table>

## sumCol

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>表格支持合计功能时，是否计算合计。true表示需要计算合计，false表示不需要计算合计</td>
    </tr>
</table>

## editable

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>表格支持修改过程时，数据列是否可以修改。true表示可以进行修改，false表示不可以进行修改</td>
    </tr>
</table>

## editFormShow

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>在表格以form形式编辑时，数据列是否显示，此参数用于支持form编辑模式下可对未显示的数据列进行编辑。true表示显示，false表示不显示</td>
    </tr>
</table>

## autoExpand

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>数据列宽度是否需要自动扩展，只有最后一列需要设置为true。true表示自动扩展，false表示不自动扩展</td>
    </tr>
</table>

## renderType

<table>
    <tr>
        <td>类型</td>
          <td>默认值</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>function</td>
          <td>null</td>
          <td>数据列的渲染方式，通过function创建数据列对应的编辑控件</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
          <td >说明</td>
    </tr>
    <tr>
          <td>value</td>
          <td>单元格对应的value值</td>
    </tr>
    <tr>
          <td>element</td>
          <td>单元格渲染时，组件提供的顶层div，自定义渲染内容在此div下进行渲染</td>
    </tr>
    <tr>
          <td>gridObj</td>
          <td>表格控件对象</td>
    </tr>
    <tr>
          <td>row</td>
          <td>单元格所在行对应的行对象，可获取所在行其他列信息</td>
    </tr>
    <tr>
          <td>gridCompColumn</td>
          <td>单元格对应的列对象，可获取所在列的配置信息</td>
    </tr>
    <tr>
          <td>rowIndex</td>
          <td>单元格所在行的index</td>
    </tr>
</table>

## editType

<table>
    <tr>
        <td>类型</td>
          <td>默认值</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>function</td>
          <td>null</td>
          <td>数据列的编辑方式，通过function创建数据列对应的编辑控件</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
          <td >说明</td>
    </tr>
    <tr>
          <td>value</td>
          <td>单元格对应的value值</td>
    </tr>
    <tr>
          <td>element</td>
          <td>单元格编辑时，组件提供的顶层div，自定义编辑内容在此div下进行编辑</td>
    </tr>
    <tr>
          <td>gridObj</td>
          <td>表格控件对象</td>
    </tr>
    <tr>
          <td>field</td>
          <td>数据列对应的field</td>
    </tr>
    <tr>
          <td>rowObj</td>
          <td>数据行对象</td>
    </tr>
    <tr>
          <td>rowIndex</td>
          <td>数据行对应的index</td>
    </tr>
</table>

## dataType

<table>
    <tr>
        <td>类型</td>
          <td>默认值</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>string</td>
          <td>String</td>
          <td>数据列的数据类型，支持：String, Date, Datetime, Int, Float</td>
    </tr>
</table>

## format

<table>
    <tr>
        <td>类型</td>
          <td>默认值</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>string</td>
          <td>String</td>
          <td>数据列显示时的格式化方式。目前只对日期类型进行处理，例如：YYYY-MM-DD、YYYY-MM-DD hh:mm:ss</td>
    </tr>
</table>

## headerLevel

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>integer</td>
    	  <td>1</td>
    	  <td>header的层级，目前只支持最大2级</td>
    </tr>
</table>

## hiddenLevel

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>integer</td>
    	  <td>1</td>
    	  <td>当表格属性overWidthHiddenColumn为true时，自动隐藏的优先级，数值越大，宽度不足时优先显示</td>
    </tr>
</table>



# 示例
