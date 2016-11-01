# 按钮 bee-button

按钮可用于一个交互操作。

## 使用

```js
import { Button } from 'tinper-bee';
import Button from 'bee-button';
React.render(
        <Button type="primary" size="lg" style={{color: '#000'}}>Button</Button>
        , document.getElementById('target'));
```

## API

| 参数        |                    说明                    |   类型   |    默认值 |
| :-------- | :--------------------------------------: | :----: | -----: |
| size      |      按钮大小(`large` `medium` `small`)      | string | medium |
| type      |         类型(`primary` `success`)          | string |     '' |
| shape     |          形状(`round` `squared`)           | string |     '' |
| disabled  |    是否禁用(`disabled` 或 `true` `false`)     | string |  false |
| className |                增加额外的class                | string |     '' |
| htmlType  | html dom 的 type 属性(`submit` `button` `reset`) | string | button |
| style     |                 style 属性                 | object |     '' |
