# bee-input-group

InputGroup 是包装 `FormControl` `InputGroupButton` `InputGroupAddon`的元素，实际应用中 `InputGroupAddon` `InputGroupButton`被集成到InputGroup中使用，格式如：`InputGroup.Addon` `InputGroup.Button`。

## 使用

```js
import InputGroup from 'tinper-bee';
ReactDOM.render(
    <div>
        <InputGroup>
	 		<InputGroup.Addon>.00</InputGroup.Addon>
	        <FormControl type="text" />
	    </InputGroup>
	    <InputGroup>
	 		<InputGroup.Button>
	 			<Button>toggle</Button>
	 		</InputGroup.Button>
	        <FormControl type="text" />
	    </InputGroup>
    </div>,
    document.getElementById('target'));
```


## API

| 参数        | 说明                                       | 类型     | 默认值  |
| --------- | ---------------------------------------- | ------ | ---- |
|type|类型(`text` `submit`,'checkbox',...详情http://www.w3school.com.cn/html5/att_input_type.asp)|string|'input'|
