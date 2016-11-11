# Grid 属性API

### ﻿id

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

### cancelFocus

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

### showHeader

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

### showNumCol

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

### multiSelect

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

### columnMenu

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>是否显示表头操作按钮，通过表头操作按钮可以动态设置数据列是否显示。是表示显示表头操作按钮，false表示不显示表头操作按钮</td>
    </tr>
</table>

### canDrag

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

### maxHeaderLevel

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>integer</td>
    	  <td>1</td>
    	  <td>表头的最高层级，用于计算表头区的高度。目前只支持最大为2</td>
    </tr>
</table>

### overWidthHiddenColumn

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

### sortable

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

### showSumRow

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

### canSwap

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

### showTree

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

### autoExpand

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

### needTreeSort

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>树表形式下是否需要对传入数据进行排序，次设置是为了优化性能。如果传入数据是无序的则设置为true，如果可以保证先传入父节点后传入子节点则设置为false提高性能。目前只支持为false的情况</td>
    </tr>
</table>

### editable

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>false</td>
    	  <td>是否支持编辑功能，true表示支持编辑功能，false表示不支持编辑功能</td>
    </tr>
</table>

### editType

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>string</td>
    	  <td>default</td>
    	  <td>设置编辑方式，default表示在数据行上进行编辑，form表示在单独的form区域进行编辑</td>
    </tr>
</table>
