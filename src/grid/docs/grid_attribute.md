# Grid 属性API

## ﻿id

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>string</td>
    	  <td>grid</td>
    	  <td>表格控件的标识</td>
    </tr>
</table>

## cancelFocus

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>第二次点击行是否取消focus效果。true表示取消focus效果，false表示不取消focus效果</td>
    </tr>
</table>

## cancelSelect

<table>
    <tr>
        <td>类型</td>
          <td>默认值</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>boolean</td>
          <td>false</td>
          <td>第二次点击行是否取消select效果。true表示取消select效果，false表示不取消select效果</td>
    </tr>
</table>

## showHeader

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>是否显示表头。true表示显示表头，false表示不显示表头</td>
    </tr>
</table>

## showNumCol

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>是否显示数字列。true表示显示数字列，false表示不显示数字列</td>
    </tr>
</table>

## multiSelect

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>是否显示复选框以支持复选功能。true表示显示复选框，false表示不显示复选框</td>
    </tr>
</table>

## columnMenu

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>是否显示表头操作按钮，通过表头操作按钮可以动态设置数据列是否显示。true表示显示表头操作按钮，false表示不显示表头操作按钮</td>
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
    	  <td>是否支持拖动表头以修改数据列宽度。true表示支持拖动功能，false表示不支持拖动功能</td>
    </tr>
</table>



## maxHeaderLevel

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>integer</td>
    	  <td>1</td>
    	  <td>多级表头情况下，表头的最高层级。目前只支持最大为2</td>
    </tr>
</table>

## overWidthHiddenColumn

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>表格的整体宽度不足以显示所有数据列时是否自动隐藏超出部分的数据列。true表示超出时自动隐藏，false表示超出时不自动隐藏</td>
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
    	  <td>是否支持点击表头进行排序功能。true表示支持排序功能，false表示不支持排序功能</td>
    </tr>
</table>

## showSumRow

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>是否支持合计功能以显示合计行。true表示支持合计功能，false表示不支持合计功能</td>
    </tr>
</table>

## canSwap

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>是否支持拖动表头以交换数据列的位置。true表示支持交换功能，false表示不支持交换功能</td>
    </tr>
</table>

## showTree

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>是否支持以树表形式进行展示。true表示支持树表功能，false表示不支持树表功能</td>
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
    	  <td>true</td>
    	  <td>树表形式展示时是否默认展开所有节点。true表示默认展开所有节点，false表示默认不展开节点</td>
    </tr>
</table>

## needTreeSort

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>树表形式下是否需要对传入数据进行排序，此设置是为了优化性能。如果传入数据是无序的则设置为true，如果可以保证先传入父节点后传入子节点则设置为false提高性能。目前只支持为false的情况</td>
    </tr>
</table>

## needLocalStorage

<table>
    <tr>
        <td>类型</td>
          <td>默认值</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>boolean</td>
          <td>false</td>
          <td>是否使用前端缓存，使用前端缓存的情况会在浏览器保存数据列的宽度、是否显示、位置等信息，再次进入页面会按照上次的状态进行显示。true表示使用前端缓存,false表示不使用前端缓存</td>
    </tr>
</table>

## noScroll

<table>
    <tr>
        <td>类型</td>
          <td>默认值</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>boolean</td>
          <td>false</td>
          <td>是否显示滚动条。如果数据列宽度中存在百分比的设置则此参数自动修改为true。true表示不显示滚动条，数据列的宽度会根据整体宽度重新计算,false表示按照默认显示，如果列宽度超过整体宽度则显示滚动条</td>
    </tr>
</table>

## contentSelect

<table>
    <tr>
        <td>类型</td>
          <td>默认值</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>boolean</td>
          <td>true</td>
          <td>点击内容区是否执行选中逻辑，单选情况下则此参数修改为true。true表示执行选中逻辑,false表示不执行选中逻辑</td>
    </tr>
</table>

## contentFocus

<table>
    <tr>
        <td>类型</td>
          <td>默认值</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>boolean</td>
          <td>true</td>
          <td>点击内容区是否执行focus逻辑。true表示执行focus逻辑,false表示不执行focus逻辑</td>
    </tr>
</table>

## showEditIcon

<table>
    <tr>
        <td>类型</td>
          <td>默认值</td>
          <td>说明</td>
    </tr>
    <tr>
          <td>boolean</td>
          <td>false</td>
          <td>数据列可修改情况下是否显示编辑图标。true表示显示编辑图标,false表示不显示编辑图标</td>
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
    	  <td>false</td>
    	  <td>是否支持编辑功能。true表示支持编辑功能，false表示不支持编辑功能</td>
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
    	  <td>string</td>
    	  <td>default</td>
    	  <td>设置编辑方式。default表示在数据行上进行编辑，form表示在单独的form区域进行编辑</td>
    </tr>
</table>
