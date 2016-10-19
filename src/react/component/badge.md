# 徽章 bee-badge

用来醒目的展示新的或未读的信息条目

## 使用

```js
import { Badge } from 'tinper-bee';
ReactDOM.render(
    <div>
        <div>
            <Badge color="primary">a</Badge>
        </div>
    </div>,
    document.getElementById('target'));
```



## API

| 参数        | 说明                                       | 类型     | 默认值  |
| --------- | ---------------------------------------- | ------ | ---- |
| color     | one of: `primary` `success` `info` `error`  `warning` `dark` | string | ''   |
| className | 增加额外的class                               | string | ''   |