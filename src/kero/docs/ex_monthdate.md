# 月日选择

本例展示:月日UI控件绑定默认数据。

[试一试](http://tinper.org/webide/#/demos/kero/monthdate)


# API

## \# u-meta 属性

* type：`u-monthdate`

u-meta基础api请参考[这里](http://tinper.org/dist/kero/docs/moduleapi.html)

相关内容：

[基础月日控件](http://tinper.org/dist/neoui/plugin/monthdate.html)


## MonthDate

本例实现如下效果：

* 绑定默认数据
* 实现UI交互



<div class="example-content"><!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
-->
<div class="" u-meta='{"id":"t1","type":"u-monthdate","data":"dt1","field":"f1"}'>
    <input class="u-input"/>
</div></div>



<script>
 var app, viewModel;
 viewModel = {
     dt1: new u.DataTable({
         meta: {
             f1: {},
             f2: {}
         }
     }),
 }
/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
 app = u.createApp({
     el: 'body',
     model: viewModel
 });
// 创建空行,绑定默认值
 var r = viewModel.dt1.createEmptyRow();
 r.setValue('f1', "12-11");
</script>

<div class="ex-code-par"><button  class="u-button u-button-block u-button-accent margin-top-15 codeOptBtn" ><i class="uf uf-arrow-down"></i>查看代码</button><div class="examples-code"><pre><code>
&lt;!-- 
	HTML
	u-meta:框架特有标记，框架通过识别此标记创建对应UI组件，以及进行数据绑定 
	id,type.data,field为必选项
	id:创建组件唯一标识
	type:创建组件对应的类型
	data:指定数据模型中的数据集
	field:绑定数据集中对应的字段
-->
&lt;div class="" u-meta='{"id":"t1","type":"u-monthdate","data":"dt1","field":"f1"}'>
    &lt;input class="u-input"/>
&lt;/div></code></pre>
</div>


<pre class="examples-code"><code>
 var app, viewModel;
 viewModel = {
     dt1: new u.DataTable({
         meta: {
             f1: {},
             f2: {}
         }
     }),
 }
/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
 app = u.createApp({
     el: 'body',
     model: viewModel
 });
// 创建空行,绑定默认值
 var r = viewModel.dt1.createEmptyRow();
 r.setValue('f1', "12-11");</code></pre>

</div>