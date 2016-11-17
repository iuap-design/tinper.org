# Grid 列属性API

### ﻿field

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

### width

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>integer</td>
    	  <td>200</td>
    	  <td>数据列显示的宽度</td>
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
    	  <td>数据列是否支持排序。true表示支持排序，false表示不支持排序</td>
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
    	  <td>数据列是否支持拖动修改宽度。true表示支持拖动，false表示不支持拖动</td>
    </tr>
</table>

### fixed

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

### visible

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

### canVisible

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

### sumCol

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

### editable

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

### editFormShow

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>boolean</td>
    	  <td>true</td>
    	  <td>在表格以form形式编辑时，数据列是否显示。true表示显示，false表示不显示</td>
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
    	  <td>false</td>
    	  <td>数据列宽度是否需要自动扩展，只有最后一列需要设置为true。true表示自动扩展，false表示不自动扩展</td>
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
    	  <td>function</td>
    	  <td>null</td>
    	  <td>数据列的编辑方式，通过function创建数据列对应的编辑控件</td>
    </tr>
</table>

### headerLevel

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

### hiddenLevel

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
