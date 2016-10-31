# bee-form-control

用 `<FormControl>` 来代替 `<input>`, `<textarea>`, and `<select>`

## 使用

```js
import FormControl from 'tinper-bee';
ReactDOM.render(
    <div>
        <FormControl />
        <br>
        <FormControl placeholder="input placeholder" defaultValue="default value" />
        <br/>
        <FormControl type="checkbox" />
    </div>,
    document.getElementById('target'));
```

test

## API

| 参数        | 说明                                       | 类型     | 默认值  |
| --------- | ---------------------------------------- | ------ | ---- |
|type|类型(`text` `submit`,'checkbox',...详情http://www.w3school.com.cn/html5/att_input_type.asp)|string|'input'|