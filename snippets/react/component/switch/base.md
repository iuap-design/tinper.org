# 开关 bee-switch

两种状态切换的开关


## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|checked	|指定当前是否选中|	Boolean	|false|
|defaultChecked	|初始是否选中	|Boolean|	false |
|onChangeHandler	|变化时回调函数,自定义参照demo	|Function(checked:Boolean) |	
|checkedChildren	|选中时的内容	|React| Node |
|unCheckedChildren	|非选中时的内容	|React| Node	
|size|	大小设置，oneOf：`primary`,`success`,`info`,`dark`,`warning`|string|''|	
|colors| 颜色设置，oneOf：`sm`, `lg`,''|	string	|''|
