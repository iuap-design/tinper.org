# bee-RadioGroup


单选框组合

RadioGroup将Radio集成为自己的子组件。故API需注意。


## API


## RadioGroup.Radio

|参数|说明|类型|默认值|
|---|----|---|------|
|color|one of: `primary` `success` `info` `error`  `warning` `dark`|string|''|
|disabled|是否可用|bool|false|

## RadioGroup

|参数|说明|类型|默认值|
|---|----|---|------|
|onChange|暴露在外层的触发radio是否选中的方法|func|''|
|selectedValue|被选中的radio值|string|''|
|name|radio组名|string|''|
|Children|Radio子组件|obj|''|


## 案例