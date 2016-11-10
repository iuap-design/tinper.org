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

### onBeforeRowSelected

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行被选中之前触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
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

### onRowSelected

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行被选中时触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
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

### onBeforeRowUnSelected

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行取消选中之前触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
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

### onRowUnSelected

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行取消选中时触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
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

### onBeforeAllRowSelected

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在所有数据行被选中之前触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
    </tr>
    <tr>
    	  <td>rowObjs</td>
    	  <td>所有数据行对象</td>
    </tr>
</table>

### onAllRowSelected

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在所有数据行被选中时触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
    </tr>
    <tr>
    	  <td>rowObjs</td>
    	  <td>所有数据行对象</td>
    </tr>
</table>

### onBeforeAllRowUnSelected

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在所有数据行被取消选中之前触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
    </tr>
    <tr>
    	  <td>rowObjs</td>
    	  <td>所有数据行对象</td>
    </tr>
</table>

### onAllRowUnSelected

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在所有数据行被取消选中时触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
    </tr>
    <tr>
    	  <td>rowObjs</td>
    	  <td>所有数据行对象</td>
    </tr>
</table>

### onBeforeRowFocus

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行触发focus之前触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
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

### onBeforeRowUnFocus

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行取消focus之前触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
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

### onRowUnFocus

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行取消focus时触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
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

### onDblClickFun

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行被双击时触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
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

### onValueChange

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据发生改变时触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
    </tr>
    <tr>
    	  <td>rowIndex</td>
    	  <td>数据行对应的index</td>
    </tr>
    <tr>
    	  <td>field</td>
    	  <td>数据改变对应的field</td>
    </tr>
    <tr>
    	  <td>oldValue</td>
    	  <td>数据改变之前的值</td>
    </tr>
    <tr>
    	  <td>newValue</td>
    	  <td>数据改变之后的值</td>
    </tr>
</table>

### onBeforeClickFun

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行触发click之前触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
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

### onBeforeEditFun

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行编辑操作之前触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
    </tr>
    <tr>
    	  <td>rowObj</td>
    	  <td>数据行对象</td>
    </tr>
    <tr>
    	  <td>rowIndex</td>
    	  <td>数据行对应的index</td>
    </tr>
    <tr>
    	  <td>colIndex</td>
    	  <td>数据列对应的index</td>
    </tr>
</table>

### onRowHover

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>在数据行hover时触发，调用时传入参数为object，object属性说明如下</td>
    </tr>
</table>

**object属性说明**

<table>
    <tr>
        <td>属性</td>
    	  <td >说明</td>
    </tr>
    <tr>
    	  <td>gridObj</td>
    	  <td>表格控件对象</td>
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

### afterCreate

<table>
    <tr>
        <td>类型</td>
    	  <td>默认值</td>
    	  <td>说明</td>
    </tr>
    <tr>
    	  <td>function</td>
    	  <td>null</td>
    	  <td>表格创建完成之后触发，调用时无传入参数</td>
    </tr>
</table>

## column属性

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

