# 开关 bee-switch

开关。

## 使用

```js
import { Switch } from 'tinper-bee';
React.render(
    <div>
            <Switch />
    </div>,
    document.getElementById('target'));
```



## API

|参数|说明|类型|默认值|
|---|----|---|------|
|checked	|指定当前是否选中|	Boolean	|false
|defaultChecked	|初始是否选中	|Boolean|	false
|onChangeHandler	|变化时回调函数,自定义参照demo	|Function(checked:Boolean)
|checkedChildren	|选中时的内容	|React| Node
|unCheckedChildren	|非选中时的内容	|React| Node
|size|	开关大小，可选值：'' small|	String	|''