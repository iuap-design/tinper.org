# bee-form-group

`FormGroup` 组件用来包裹像 `form control` `lable` `help text` `validate state`的元素

## 使用

```js
import FormGroup from 'tinper-bee';
import FormControl from 'tinper-bee';
ReactDOM.render(
    <div>
        <FormGroup> 
			<FormControl type="text" />
		</FormGroup>
    </div>,
    document.getElementById('target'));
```

test

## API

| 参数        | 说明                                       | 类型     | 默认值  |
| --------- | ---------------------------------------- | ------ | ---- |
|validationState|oneOf:`success` `error` `warning`|string|''|