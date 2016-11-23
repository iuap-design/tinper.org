# bee-alert

为用户操作定向的做提示。根据信息类型不同提供相应的以背景颜色区分的alert。若需背景颜色加深需加`dark`类。


## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|className|类名|string||
|colors|oneOf:`info` `news` `success` `danger` `warning`|string|`warning`|
|controlLabel|关闭按钮文字|string||
|onDismiss|关闭alert触发的方法|func||


## 案例