# bee-pagination

用于内容过多，分页显示内容

Pagination组件内部集成了子组件PaginationButton.PaginationButton并不暴露给用户。


## API

|参数|说明|类型|默认值|
|---|----|---|------|
|items|总页数|number|''|
|activePage|哪一页是激活状态|number|''|
|onSelect|切换页的方法|func |''|
|maxButton|显示最多页数按钮|number|''|
|pre|显示上一页按钮|bool|false|
|next|显示下一页按钮|bool|''|
|first|显示第一页按钮|bool|false|
|last|显示最后一页按钮|bool|last|
|ellipsis|显示省略按钮|bool|false|
|boundaryLinks|显示边界按钮|bool|false|
|gap|按钮之间有间隔|bool|false|
|noBorder|不显示按钮边框|bool|false|
|size|按钮大小oneOf:lg,sm,''|string|''|


## 案例