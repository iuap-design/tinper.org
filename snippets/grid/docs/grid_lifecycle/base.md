# Grid 生命周期API

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
