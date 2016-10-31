# bee-loading-state

组件常用于在按钮上加载状态

## 使用

```js
import Loadingstate from 'tinper-bee';
ReactDOM.render(
    <div>
        <Loadingstate loadingTime="4000" loadingText="loading...">Confirm</Loadingstate>
    </div>,
    document.getElementById('target'));
```

test

## API

| 参数        | 说明                                       | 类型     | 默认值  |
| --------- | ---------------------------------------- | ------ | ---- |
|loadingText|loading时显示内容|string|loading|
|loadingTime|loading的时间|number|300ms|