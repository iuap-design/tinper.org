<a name="3.2.1"></a>
<h2 class="logtit"> V3.2.1 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.2.1.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2017-4-25)</i></h2>

<div class="down_info">
<h3>场景下载</h3>
<ul>
<li ><p>仅包含ui组件:<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/tinper-neoui-3.2.1.zip"><i class="icon uf uf-downloadd logicon"></i></a>企业级前端UI框架，包含全局样式、CSS组件、JavaScript插件，并且提供丰富的字体图标<a target="blank" href="http://docs.tinper.org/neoui/">----文档地址</a></p></li><li ><p>包含UI组件和kero组件:<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/neoui-kero-3.2.1.zip"><i class="icon uf uf-downloadd logicon"></i></a>包含前端UI框架以及多维数据模型<a target="blank" href="http://docs.tinper.org/moy/kero-begin.html#起步">----文档地址</a></p></li><li ><p>仅包含前端请求:<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/kero-fetch-3.2.1.zip"><i class="icon uf uf-downloadd logicon"></i></a>基于kero，涉及到与服务器交互时的封装方法<a target="blank" href="http://docs.tinper.org/moy/kero-fetch.html">----文档地址</a></p></li></ul>
</div>

### Bug Fixes

* 解决focus为最后一行，删除最后一行之后重新设置为新的最后一行时无法生效的问题 ([f3d0d77](https://github.com/iuap-design/kero/commit/f3d0d77))

* 单选、下拉、多选getShowValue获取不到值 ([860f4c1](https://github.com/iuap-design/neoui-kero/commit/860f4c1))

* 解决clockpickler组件第一次选择00:00无法存储数据的问题 ([0df9705](https://github.com/iuap-design/neoui-kero/commit/0df9705))

* 解决tree通过datatable删除数据时报错的问题 ([12c2900](https://github.com/iuap-design/neoui-kero/commit/12c2900))

* 解决grid中输入时无法通过鼠标滑动选择 ([54d7aa8](https://github.com/iuap-design/tinper-neoui-grid/commit/54d7aa8))

* 解决grid超过10列之后交换最后一列导致显示错误的问题 ([01592de](https://github.com/iuap-design/tinper-neoui-grid/commit/01592de))

* 解决表格全选操作之后翻页需要点击2次才能执行全选操作 ([2eae2b9](https://github.com/iuap-design/tinper-neoui-grid/commit/2eae2b9))

### Features

* addSimpleData增加参数控制是否选中第一行 ([2aa0a3f](https://github.com/iuap-design/kero/commit/2aa0a3f))

* datatable、row文档完善属性说明 ([0c30e86](https://github.com/iuap-design/kero/commit/0c30e86))

* datatable增加resetAllValue、resetValueByRow，row增加setStatus、resetValue用以支持重置数据的业务需求 ([5b13898](https://github.com/iuap-design/kero/commit/5b13898))

* resetAllValue增加判断状态，如果为新增则删除此数据，如果为删除则新增此数据，如果为更新则还原数据 ([b868324](https://github.com/iuap-design/kero/commit/b868324))

* 优化子表获取字段逻辑，没有当前行的情况下获取第一行 ([f077032](https://github.com/iuap-design/kero/commit/f077032))

* 增加API getRowsByIndices ([170e590](https://github.com/iuap-design/kero/commit/170e590))

* grid增加filterDataFun用于在新增数据之前进行过滤 ([3799a5a](https://github.com/iuap-design/tinper-neoui-grid/commit/3799a5a))

* grid增加参数支持控制左右对齐 ([cb7c48c](https://github.com/iuap-design/tinper-neoui-grid/commit/cb7c48c))

* grid支持多级表头 ([e3dc21b](https://github.com/iuap-design/tinper-neoui-grid/commit/e3dc21b))

* grid组件支持动态设置固定列 ([30ef645](https://github.com/iuap-design/tinper-neoui-grid/commit/30ef645))

* 优化grid编辑时只重绘当前编辑单元格，不再重绘整行数据 ([a0e6d84](https://github.com/iuap-design/tinper-neoui-grid/commit/a0e6d84))

* 合计行支持在第一行显示，同时优化多级表头样式 ([48efee1](https://github.com/iuap-design/tinper-neoui-grid/commit/48efee1))

* 增加参数rowHeight、sumRowHeight、headerHeight用于控制行高 ([b9406b8](https://github.com/iuap-design/tinper-neoui-grid/commit/b9406b8))

* 树表情况下增加不同的class以区分不同层级的节点 ([a5f1da2](https://github.com/iuap-design/tinper-neoui-grid/commit/a5f1da2))

* tree插入数据的时候增加指定index处理 ([d9db726](https://github.com/iuap-design/tinper-neoui-tree/commit/d9db726))

<a name="3.2.0"></a>
<h2 class="logtit"> V3.2.0 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.2.0.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2017-3-28)</i></h2>

<div class="down_info">
<h3>场景下载：</h3>
<ul>
<li ><p>仅包含ui组件:<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/tinper-neoui-3.2.0.zip"><i class="icon uf uf-downloadd logicon"></i></a>企业级前端UI框架，包含全局样式、CSS组件、JavaScript插件，并且提供丰富的字体图标----<a target="blank" href="http://docs.tinper.org/neoui/">文档地址</a></p></li>
<li ><p>包含UI组件和kero组件:<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/neoui-kero-3.2.0.zip"><i class="icon uf uf-downloadd logicon"></i></a>包含前端UI框架以及多维数据模型----<a target="blank" href="http://docs.tinper.org/moy/kero-begin.html#起步">文档地址</a></p></li>
<li ><p>仅包含前端请求:<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/kero-fetch-3.2.0.zip"><i class="icon uf uf-downloadd logicon"></i></a>基于kero，涉及到与服务器交互时的封装方法----<a target="blank" href="http://docs.tinper.org/moy/kero-fetch.html">文档地址</a></p></li>
<!-- <li ><p>浏览器兼容:<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/tinper-neoui-polyfill-3.2.0.zip"><i class="icon uf uf-downloadd logicon"></i></a>让一些低级的浏览器支持最新的es5的一些特性----<a target="blank" href="http://docs.tinper.org/moy/IE.html">文档地址</a></p></li> -->
<!-- <li ><p>前端基础库:<a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/tinper-sparrow-3.2.0.zip"><i class="icon uf uf-downloadd logicon"></i></a>一些常用的基础方法，如操作cookie等----<a target="blank" href="http://docs.tinper.org/sparrow/">文档地址</a></p></li> -->
</ul>
</div>

### Bug Fixes
* 下拉组件由隐藏切换为显示时显示存在问题 ([51f6340](https://github.com/iuap-design/tinper-neoui/commit/51f6340))

* 币种组件不再显示币种效果 ([70dac96](https://github.com/iuap-design/neoui-kero/commit/70dac96))

* 解决grid超过10列之后交换最后一列导致显示错误的问题 ([01592de](https://github.com/iuap-design/tinper-neoui-grid/commit/01592de9c7e388f7c8845e5426ad8f4cbd86bae0))

### Features


* dialog组件新增拖拽功能 ([08b18a1](https://github.com/iuap-design/tinper-neoui/commit/08b18a1))

* addSimpleData增加参数控制是否选中第一行 ([2aa0a3f](https://github.com/iuap-design/kero/commit/2aa0a3f66c3febe2c068de9ca462c86109e66e73))

* 优化子表获取字段逻辑，没有当前行的情况下获取第一行 ([f077032](https://github.com/iuap-design/kero/commit/f077032542d9a20556ea18609f25804090df48cd))

* datatable、row文档完善属性说明 ([0c30e86](https://github.com/iuap-design/kero/commit/0c30e86a8e3bb7aff5a8ce14f668762698898519))

* 树表情况下增加不同的class以区分不同层级的节点 ([a5f1da2](https://github.com/iuap-design/tinper-neoui-grid/commit/a5f1da2abd5694a35c20e21e0e1e8db9bd356627))

* grid支持多级表头 ([e3dc21b](https://github.com/iuap-design/tinper-neoui-grid/commit/e3dc21bdc80f21500a03a83cad269912390c5bdc))

* 优化grid组件添加function的方式 ([230af94](https://github.com/iuap-design/tinper-neoui-grid/commit/230af94b757476e273a9a95b4a2612f00235a116))

* grid组件使用comboRender及radioRender时可以直接在column上定义datasource ([2cbbe2a](https://github.com/iuap-design/neoui-kero/commit/2cbbe2a))

* 优化grid编辑时只重绘当前编辑单元格，不再重绘整行数据 ([a0e6d84](https://github.com/iuap-design/tinper-neoui-grid/commit/a0e6d84116eb4e5b935f13f3cca9dd899b685f1a))

* grid增加参数支持控制左右对齐 ([			cb7c48c](https://github.com/iuap-design/tinper-neoui-grid/commit/cb7c48cbf5e0a821ecf924e59d4e6023b32b82ea))

* neoui-kero支持按照组件产出对应的js文件以方便项目使用 ([f0bc2b9](https://github.com/iuap-design/neoui-kero/commit/f0bc2b9))

* 输入组件支持placeholder属性 ([9d67ed0](https://github.com/iuap-design/neoui-kero/commit/9d67ed0))

<a name="3.1.27"></a>
<h2 class="logtit"> V3.1.27 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.27.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2017-2-23)</i></h2>

### Features

* 添加自动生成changelog ([332f820](https://github.com/iuap-design/compox/commit/332f820))

* adapter层setValue增加beforeSetValue调用，方便组件个性化设置 ([44706df](https://github.com/iuap-design/neoui-kero/commit/44706df))

* 对框架进行升级，新增源码仓库compox、compox-util、kero-fetch、neoui-kero、neoui-kero-mixin ([880cb40](https://github.com/iuap-design/neoui-kero/commit/880cb40))

* grid增加参数fixedFloat可设置固定列在左侧还是右侧 ([9c31d26](https://github.com/iuap-design/tinper-neoui-grid/commit/9c31d26))



<a name="3.1.23"></a>
<h2 class="logtit"> V3.1.23 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.23.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2017-1-19)</i></h2>

### Bug Fixes
* float、time设置值 ([e03c349](https://github.com/iuap-design/kero-adapter/commit/e03c349))

* grid中字段为float时编辑问题、月日控件多次赋值问题、tree中onclick问题 ([297dbc8](https://github.com/iuap-design/kero-adapter/commit/297dbc8))

* checkbox 在ie9下无钩钩图标 ([480debf](https://github.com/iuap-design/tinper-neoui/commit/480debf))

* grid close事件 ([cc979bc](https://github.com/iuap-design/tinper-neoui-grid/commit/cc979bc))

* 兼容ie修改hide这些方法 ([8202e90](https://github.com/iuap-design/tinper-neoui-grid/commit/8202e90))


<a name="3.1.22"></a>
<h2 class="logtit"> V3.1.22 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.22.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2017-1-12)</i></h2>

### Bug Fixes
* 多语datetimepicker-月份中英文切换 ([e7935b0](https://github.com/iuap-design/tinper-neoui/commit/e7935b0))

* 字体图标兼容 ([46b6105](https://github.com/iuap-design/tinper-neoui/commit/46b6105))

<a name="3.1.21"></a>
<h2 class="logtit"> V3.1.21 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.21.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2017-1-6)</i></h2>

### Bug Fixes
* addrows在单页面中多次触发 ([144ab18](https://github.com/iuap-design/tinper-neoui-grid/commit/144ab18))

* 优化columnMenu区域文字的点击处理逻辑 ([06bbe55](https://github.com/iuap-design/tinper-neoui-grid/commit/06bbe55))

* tree 左侧图标不随着移动以及节点hover效果 ([80ee7b0](https://github.com/iuap-design/tinper-neoui-tree/commit/80ee7b0))

* 树hover的颜色选中的范围 ([0fd221f](https://github.com/iuap-design/tinper-neoui-tree/commit/0fd221f))

* 节点长度过长时显示省略号 ([6be2f47](https://github.com/iuap-design/tinper-neoui-tree/commit/6be2f47))

<a name="3.1.19"></a>
<h2 class="logtit"> V3.1.19 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.19.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-12-29)</i></h2>

### Bug Fixes
* 分页 ([b74aa28](https://github.com/iuap-design/neoui-kero/commit/b74aa28))

* 多语组件与datatable关联打通 ([a6a8e9a](https://github.com/iuap-design/neoui-kero/commit/a6a8e9a))

* 优化部分性能 ([d6feb24](https://github.com/iuap-design/tinper-neoui-grid/commit/d6feb24))

* 优化IE下树的展示 ([db173f0](https://github.com/iuap-design/tinper-neoui-tree/commit/db173f0))

<a name="3.1.18"></a>
<h2 class="logtit"> V3.1.18 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.18.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-12-22)</i></h2>

### Bug Fixes
* changelog样式 ([7079bde](https://github.com/iuap-design/neoui-kero/commit/7079bde))

* 云表单radio、单选框其他输入框disable设置 ([3717e56](https://github.com/iuap-design/neoui-kero/commit/3717e56))

* 表盘setValue ([2a4ac82](https://github.com/iuap-design/tinper-neoui/commit/2a4ac82))

<a name="3.1.17"></a>
<h2 class="logtit"> V3.1.17 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.17.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-12-15)</i></h2>

### Bug Fixes
* form情况下按照showFix展示 ([986f72f](https://github.com/iuap-design/neoui-kero/commit/986f72f))

* i18n & add json files & test example ([8f7a9e3](https://github.com/iuap-design/neoui-kero/commit/8f7a9e3))

* i18n demo ([fa27546](https://github.com/iuap-design/neoui-kero/commit/fa27546))

* IE8下不显示ripple组件 ([b66d88d](https://github.com/iuap-design/tinper-neoui/commit/b66d88d))

* tooltip不同位置显示效果 ([55c9754](https://github.com/iuap-design/tinper-neoui/commit/55c9754))

* 修正confirmdialog弹出框关闭后滚轮事件 ([d17948a](https://github.com/iuap-design/tinper-neoui/commit/d17948a))

* 日期icon点击不消除其他日历bug ([7e954bc](https://github.com/iuap-design/tinper-neoui/commit/7e954bc))

* 日期icon点击不消除其他日历bug ([1a9b7e0](https://github.com/iuap-design/tinper-neoui/commit/1a9b7e0))

* 日期点击前一个月后一个月当前时间；多次点击表盘不可用的问题 ([eb19ba2](https://github.com/iuap-design/tinper-neoui/commit/eb19ba2))

* 日期类型为date类型和loader与dialog混用冲突 ([052ffe3](https://github.com/iuap-design/tinper-neoui/commit/052ffe3))

* 日期组件点击确定的时候控制时间范围 ([9769c22](https://github.com/iuap-design/tinper-neoui/commit/9769c22))

<a name="3.1.16"></a>
<h2 class="logtit"> V3.1.16 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.16.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-12-8)</i></h2>

### Bug Fixes
* grid中checkbox值变时dataTable字段值不变 ([12011c8](https://github.com/iuap-design/neoui-kero/commit/12011c8))

* 表格中float类型在行之间切换编辑数据会错乱 ([7c302ad](https://github.com/iuap-design/neoui-kero/commit/7c302ad))

* 优化grid编辑下连续点击出错的问题 ([d8b35b6](https://github.com/iuap-design/tinper-neoui-grid/commit/d8b35b6))

* 优化不显示滚动条情况下动态改变宽度导致最后一列显示宽度超长的问题 ([3c3a452](https://github.com/iuap-design/tinper-neoui-grid/commit/3c3a452))

* 兼容子表的情况，避免json转字符串的情况出现死循环 ([361d04c](https://github.com/iuap-design/tinper-neoui-grid/commit/361d04c))

<a name="3.1.15"></a>
<h2 class="logtit"> V3.1.15 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.15.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-12-1)</i></h2>

### Bug Fixes
* 优化ztree选中之后更新至datatable会出现错误的情况 ([deb7f3f](https://github.com/iuap-design/neoui-kero/commit/deb7f3f))

* form形式下编辑样式问题以及合计情况下左侧边线显示问题 ([7f3339c](https://github.com/iuap-design/tinper-neoui-grid/commit/7f3339c))

* grid增加onBeforeValueChange处理 ([be4fee3](https://github.com/iuap-design/tinper-neoui-grid/commit/be4fee3))

<a name="3.1.14"></a>
<h2 class="logtit"> V3.1.14 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.14.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-11-29)</i></h2>

### Bug Fixes
* 翻页及pageSize改变时清空grid数据。datatable发生改变时设置silence为true。 ([cae6110](https://github.com/iuap-design/neoui-kero/commit/cae6110))

* radio选中错行 ([f350777](https://github.com/iuap-design/tinper-neoui/commit/f350777))

* 修正弹出层未传参数报错 ([47627fc](https://github.com/iuap-design/tinper-neoui/commit/47627fc))

* 按钮组样式问题 ([5862563](https://github.com/iuap-design/tinper-neoui/commit/5862563))

* 日期按钮显示样式 ([cdcbfe6](https://github.com/iuap-design/tinper-neoui/commit/cdcbfe6))

* 日期样式错乱 ([3a27404](https://github.com/iuap-design/tinper-neoui/commit/3a27404))

* 补充修正按钮组样式 ([0ab1e14](https://github.com/iuap-design/tinper-neoui/commit/0ab1e14))

* 点击也可拖拽bug ([47f7165](https://github.com/iuap-design/tinper-neoui-grid/commit/47f7165))

### Features
NaN

<a name="3.1.13"></a>
<h2 class="logtit"> V3.1.13 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.13.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-11-24)</i></h2>

### Bug Fixes
* 解决tree传递数据的时候除了id pid name，其他字段丢失的情况 ([db11473](https://github.com/iuap-design/neoui-kero/commit/db11473))

* tab键考虑onBeforeEditFun处理 ([fbbf509](https://github.com/iuap-design/tinper-neoui-grid/commit/fbbf509))

* 云彩—-可编辑时显示图标 ([a95c9b3](https://github.com/iuap-design/tinper-neoui-grid/commit/a95c9b3))

<a name="3.1.12"></a>
<h2 class="logtit"> V3.1.12 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.12.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-11-17)</i></h2>

<a name="3.1.9"></a>
<h2 class="logtit"> V3.1.9 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.9.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-11-16)</i></h2>

### Bug Fixes
* 日期组件支持对应特定行 ([fea8fe1](https://github.com/iuap-design/neoui-kero/commit/fea8fe1))

* 参照兼容之前的逻辑 ([d867879](https://github.com/iuap-design/tinper-neoui/commit/d867879))

<a name="3.1.8"></a>
<h2 class="logtit"> V3.1.8 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.8.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-11-15)</i></h2>

### Bug Fixes
* pro-IUAPDESIGN-104:友云采:grid左侧的复选框和编辑控件的显示不一致 ([ef520ed](https://github.com/iuap-design/neoui-kero/commit/ef520ed))

* pro-IUAPDESIGN-247:友云采：grid增加参数控制只改变ui不修改datatable ([576fc1d](https://github.com/iuap-design/neoui-kero/commit/576fc1d))

* pro-IUAPDESIGN-257:云表单:子表 选项单选后值没了 ([60c072b](https://github.com/iuap-design/neoui-kero/commit/60c072b))

* pro-IUAPDESIGN-69:营销物业管理：u-meta定义方式需要支持指定数据行 ([994e949](https://github.com/iuap-design/neoui-kero/commit/994e949))

* pro-IUAPDESIGN-75:云表单:gird增加landLine、phoneNumber ([77fa990](https://github.com/iuap-design/neoui-kero/commit/77fa990))

* u-meta定义可以对应主子表情况下对应特定行 ([f6aca86](https://github.com/iuap-design/neoui-kero/commit/f6aca86))

* 优化tree传入setting的处理 ([c7823fc](https://github.com/iuap-design/neoui-kero/commit/c7823fc))

* 创建编辑控件的时候增加editComp存储对应控件 ([018f4c3](https://github.com/iuap-design/neoui-kero/commit/018f4c3))

* 增加机制datatable通知grid时不再反向通知datatable ([c14321c](https://github.com/iuap-design/neoui-kero/commit/c14321c))

* 如果为booleanRender并且没有设置editType则设置此列为不可修改 ([e356222](https://github.com/iuap-design/neoui-kero/commit/e356222))

* 月日控件，grid required校验 ([c63bf10](https://github.com/iuap-design/neoui-kero/commit/c63bf10))

* 表格控件如果编辑方式为form则showfix为false ([34e6c61](https://github.com/iuap-design/neoui-kero/commit/34e6c61))

* monthdate ([2487e6d](https://github.com/iuap-design/tinper-neoui/commit/2487e6d))

### Features
NaN

<a name="3.1.7"></a>
<h2 class="logtit"> V3.1.7 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.7.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-11-10)</i></h2>

### Bug Fixes
* pro-IUAPDESIGN-106:友云采：模态框需要支持设置高度 ([534509d](https://github.com/iuap-design/tinper-neoui/commit/534509d))

* pro-IUAPDESIGN-88:友云采：日期控件选择确定之后会刷新页面 ([d486f8b](https://github.com/iuap-design/tinper-neoui/commit/d486f8b))

* pro-UAP-云表单:子表 选项单选和多选 在前几行选过值后，新增后几行时，填写界面弹出的下拉 前面已经选过的值时默认选中的状态 蓝色 ([4647227](https://github.com/iuap-design/tinper-neoui/commit/4647227))

* pro-IUAPDESIGN-101:友云采：grid中横向滚动时需要隐藏编辑控件 ([928fdf1](https://github.com/iuap-design/tinper-neoui-grid/commit/928fdf1))

* pro-IUAPDESIGN-105:云彩：grid排序图标需要修改 ([4d923aa](https://github.com/iuap-design/tinper-neoui-grid/commit/4d923aa))

* pro-IUAPDESIGN-274:数字营销：grid中u-grid-content-div这个div多加了一个overflow-x:hidden属性，导致表格内部的tips被遮盖 ([7f8c036](https://github.com/iuap-design/tinper-neoui-grid/commit/7f8c036))

* pro-IUAPDESIGN-41:云表单：grid提供在移动端的样式修改方案 ([8b08272](https://github.com/iuap-design/tinper-neoui-grid/commit/8b08272))

* pro-IUAPDESIGN-46:友云采：gird不出现左右滚动条（方案：px改为百分比） ([6c83f92](https://github.com/iuap-design/tinper-neoui-grid/commit/6c83f92))

* pro-IUAPDESIGN-50:友云采：grid表格数据不显示省略号（增加各行显示） ([b6a46ac](https://github.com/iuap-design/tinper-neoui-grid/commit/b6a46ac))

* pro-IUAPDESIGN-64:数字营销：grid增加参数控制点击content不触发Row选中 ([0a84f55](https://github.com/iuap-design/tinper-neoui-grid/commit/0a84f55))

* pro-IUAPDESIGN-89:友云采：grid没有数据的话下面的边线没有显示 ([bfa688f](https://github.com/iuap-design/tinper-neoui-grid/commit/bfa688f))

* pro-IUAPDESIGN-92:友云采：关联计算的数据在合计行的显示 ([f67aad8](https://github.com/iuap-design/tinper-neoui-grid/commit/f67aad8))

* pro-IUAPDESIGN-95:友云采：内容区点击之后第一次选中，第二次取消选中 ([b42059a](https://github.com/iuap-design/tinper-neoui-grid/commit/b42059a))

* pro-IUAPDESIGN-96:友云采：grid中取消选中之后的全选显示不对 ([eafb2dc](https://github.com/iuap-design/tinper-neoui-grid/commit/eafb2dc))

* pro-IUAPDESIGN-98:友云采：grid中title显示为id，renderType存在时取消td的title。 ([fe1160a](https://github.com/iuap-design/tinper-neoui-grid/commit/fe1160a))

* navbar单一输出插件问题 ([af7ec21](https://github.com/iuap-design/tinper-neoui/commit/af7ec21))

* neoui-navbar 样式 ([0fb57d8](https://github.com/iuap-design/tinper-neoui/commit/0fb57d8))

* 日期组件增加hide方法 ([870985b](https://github.com/iuap-design/tinper-neoui/commit/870985b))

* 选项多选选择较多时，卡片显示... 数据显示不完整，鼠标落上时 应显示tips,显示完整数据 ([bc4e89b](https://github.com/iuap-design/tinper-neoui/commit/bc4e89b))

* grid设置宽度为百分比情况下，优化拖拽、交换列等操作 ([1fe2a0b](https://github.com/iuap-design/tinper-neoui-grid/commit/1fe2a0b))

* 优化onRowDelete传入参数 ([f33f189](https://github.com/iuap-design/tinper-neoui-grid/commit/f33f189))

* 优化tab操作，如果下一列不可以编辑则跳过 ([4a4ed18](https://github.com/iuap-design/tinper-neoui-grid/commit/4a4ed18))

* 优化多行显示情况下的编辑组件显示 ([2e6888d](https://github.com/iuap-design/tinper-neoui-grid/commit/2e6888d))

* 修改先在datatable中选中grid中显示状态不对的问题 ([f2d1769](https://github.com/iuap-design/tinper-neoui-grid/commit/f2d1769))

* 关闭时增加判断editComp的comp是否存在hide方法，如果存在执行hide ([7461d52](https://github.com/iuap-design/tinper-neoui-grid/commit/7461d52))

* 只有editType为from的情况下才会滚动时关闭编辑 ([3da1661](https://github.com/iuap-design/tinper-neoui-grid/commit/3da1661))

* 增加判断优化页签中的grid在切换的过程中会重绘问题 ([c6b9eb4](https://github.com/iuap-design/tinper-neoui-grid/commit/c6b9eb4))

* 增加参数noScroll控制grid不显示滚动条 ([a20304f](https://github.com/iuap-design/tinper-neoui-grid/commit/a20304f))

* 数据为空时选中header的复选框 ([b03a69f](https://github.com/iuap-design/tinper-neoui-grid/commit/b03a69f))

* 编辑关闭的时候调用editComp的hide方法 ([c521972](https://github.com/iuap-design/tinper-neoui-grid/commit/c521972))

* 解决grid中tab不可用的问题 ([dbe89df](https://github.com/iuap-design/tinper-neoui-grid/commit/dbe89df))

* 解决可编辑情况下tree的叶子节点首列编辑后会显示icon ([33e2ada](https://github.com/iuap-design/tinper-neoui-grid/commit/33e2ada))

### Features
NaN

NaN

<a name="3.1.6"></a>
<h2 class="logtit"> V3.1.6 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.6.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-11-3)</i></h2>

### Bug Fixes
* pro-IUAPDESIGN-104:友云采:grid左侧的复选框和编辑控件的显示不一致 ([ef520ed](https://github.com/iuap-design/neoui-kero/commit/ef520ed))

* pro-IUAPDESIGN-247:友云采：grid增加参数控制只改变ui不修改datatable ([576fc1d](https://github.com/iuap-design/neoui-kero/commit/576fc1d))

* pro-IUAPDESIGN-257:云表单:子表 选项单选后值没了 ([60c072b](https://github.com/iuap-design/neoui-kero/commit/60c072b))

* pro-IUAPDESIGN-69:营销物业管理：u-meta定义方式需要支持指定数据行 ([994e949](https://github.com/iuap-design/neoui-kero/commit/994e949))

* pro-IUAPDESIGN-75:云表单:gird增加landLine、phoneNumber ([77fa990](https://github.com/iuap-design/neoui-kero/commit/77fa990))

* pro-IUAPDESIGN-106:友云采：模态框需要支持设置高度 ([534509d](https://github.com/iuap-design/tinper-neoui/commit/534509d))

* pro-IUAPDESIGN-88:友云采：日期控件选择确定之后会刷新页面 ([d486f8b](https://github.com/iuap-design/tinper-neoui/commit/d486f8b))

* pro-IUAPDESIGN-101:友云采：grid中横向滚动时需要隐藏编辑控件 ([928fdf1](https://github.com/iuap-design/tinper-neoui-grid/commit/928fdf1))

* pro-IUAPDESIGN-105:云彩：grid排序图标需要修改 ([4d923aa](https://github.com/iuap-design/tinper-neoui-grid/commit/4d923aa))

* pro-IUAPDESIGN-41:云表单：grid提供在移动端的样式修改方案 ([8b08272](https://github.com/iuap-design/tinper-neoui-grid/commit/8b08272))

* pro-IUAPDESIGN-46:友云采：gird不出现左右滚动条（方案：px改为百分比） ([6c83f92](https://github.com/iuap-design/tinper-neoui-grid/commit/6c83f92))

* pro-IUAPDESIGN-50:友云采：grid表格数据不显示省略号（增加各行显示） ([b6a46ac](https://github.com/iuap-design/tinper-neoui-grid/commit/b6a46ac))

* pro-IUAPDESIGN-64:数字营销：grid增加参数控制点击content不触发Row选中 ([0a84f55](https://github.com/iuap-design/tinper-neoui-grid/commit/0a84f55))

* pro-IUAPDESIGN-89:友云采：grid没有数据的话下面的边线没有显示 ([bfa688f](https://github.com/iuap-design/tinper-neoui-grid/commit/bfa688f))

* pro-IUAPDESIGN-92:友云采：关联计算的数据在合计行的显示 ([f67aad8](https://github.com/iuap-design/tinper-neoui-grid/commit/f67aad8))

* pro-IUAPDESIGN-95:友云采：内容区点击之后第一次选中，第二次取消选中 ([b42059a](https://github.com/iuap-design/tinper-neoui-grid/commit/b42059a))

* pro-IUAPDESIGN-96:友云采：grid中取消选中之后的全选显示不对 ([eafb2dc](https://github.com/iuap-design/tinper-neoui-grid/commit/eafb2dc))

* pro-IUAPDESIGN-98:友云采：grid中title显示为id，renderType存在时取消td的title。 ([fe1160a](https://github.com/iuap-design/tinper-neoui-grid/commit/fe1160a))

* 优化tree传入setting的处理 ([c7823fc](https://github.com/iuap-design/neoui-kero/commit/c7823fc))

* 创建编辑控件的时候增加editComp存储对应控件 ([018f4c3](https://github.com/iuap-design/neoui-kero/commit/018f4c3))

* 增加机制datatable通知grid时不再反向通知datatable ([c14321c](https://github.com/iuap-design/neoui-kero/commit/c14321c))

* navbar单一输出插件问题 ([af7ec21](https://github.com/iuap-design/tinper-neoui/commit/af7ec21))

* neoui-navbar 样式 ([0fb57d8](https://github.com/iuap-design/tinper-neoui/commit/0fb57d8))

* 日期组件增加hide方法 ([870985b](https://github.com/iuap-design/tinper-neoui/commit/870985b))

* 选项多选选择较多时，卡片显示... 数据显示不完整，鼠标落上时 应显示tips,显示完整数据 ([bc4e89b](https://github.com/iuap-design/tinper-neoui/commit/bc4e89b))

* 优化onRowDelete传入参数 ([f33f189](https://github.com/iuap-design/tinper-neoui-grid/commit/f33f189))

* 优化多行显示情况下的编辑组件显示 ([2e6888d](https://github.com/iuap-design/tinper-neoui-grid/commit/2e6888d))

* 修改先在datatable中选中grid中显示状态不对的问题 ([f2d1769](https://github.com/iuap-design/tinper-neoui-grid/commit/f2d1769))

* 增加参数noScroll控制grid不显示滚动条 ([a20304f](https://github.com/iuap-design/tinper-neoui-grid/commit/a20304f))

* 编辑关闭的时候调用editComp的hide方法 ([c521972](https://github.com/iuap-design/tinper-neoui-grid/commit/c521972))

* 解决grid中tab不可用的问题 ([dbe89df](https://github.com/iuap-design/tinper-neoui-grid/commit/dbe89df))

### Features
NaN

NaN

<a name="3.1.5"></a>
<h2 class="logtit"> V3.1.5 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.5.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-11-1)</i></h2>

### Bug Fixes
* pro-IUAPDESIGN-104:友云采:grid左侧的复选框和编辑控件的显示不一致 ([ef520ed](https://github.com/iuap-design/neoui-kero/commit/ef520ed))

* pro-IUAPDESIGN-247:友云采：grid增加参数控制只改变ui不修改datatable ([576fc1d](https://github.com/iuap-design/neoui-kero/commit/576fc1d))

* pro-IUAPDESIGN-69:营销物业管理：u-meta定义方式需要支持指定数据行 ([994e949](https://github.com/iuap-design/neoui-kero/commit/994e949))

* pro-IUAPDESIGN-75:云表单:gird增加landLine、phoneNumber ([77fa990](https://github.com/iuap-design/neoui-kero/commit/77fa990))

* pro-IUAPDESIGN-106:友云采：模态框需要支持设置高度 ([534509d](https://github.com/iuap-design/tinper-neoui/commit/534509d))

* pro-IUAPDESIGN-88:友云采：日期控件选择确定之后会刷新页面 ([d486f8b](https://github.com/iuap-design/tinper-neoui/commit/d486f8b))

* pro-IUAPDESIGN-101:友云采：grid中横向滚动时需要隐藏编辑控件 ([928fdf1](https://github.com/iuap-design/tinper-neoui-grid/commit/928fdf1))

* pro-IUAPDESIGN-105:云彩：grid排序图标需要修改 ([4d923aa](https://github.com/iuap-design/tinper-neoui-grid/commit/4d923aa))

* pro-IUAPDESIGN-41:云表单：grid提供在移动端的样式修改方案 ([8b08272](https://github.com/iuap-design/tinper-neoui-grid/commit/8b08272))

* pro-IUAPDESIGN-46:友云采：gird不出现左右滚动条（方案：px改为百分比） ([6c83f92](https://github.com/iuap-design/tinper-neoui-grid/commit/6c83f92))

* pro-IUAPDESIGN-50:友云采：grid表格数据不显示省略号（增加各行显示） ([b6a46ac](https://github.com/iuap-design/tinper-neoui-grid/commit/b6a46ac))

* pro-IUAPDESIGN-64:数字营销：grid增加参数控制点击content不触发Row选中 ([0a84f55](https://github.com/iuap-design/tinper-neoui-grid/commit/0a84f55))

* pro-IUAPDESIGN-89:友云采：grid没有数据的话下面的边线没有显示 ([bfa688f](https://github.com/iuap-design/tinper-neoui-grid/commit/bfa688f))

* pro-IUAPDESIGN-92:友云采：关联计算的数据在合计行的显示 ([f67aad8](https://github.com/iuap-design/tinper-neoui-grid/commit/f67aad8))

* pro-IUAPDESIGN-95:友云采：内容区点击之后第一次选中，第二次取消选中 ([b42059a](https://github.com/iuap-design/tinper-neoui-grid/commit/b42059a))

* pro-IUAPDESIGN-96:友云采：grid中取消选中之后的全选显示不对 ([eafb2dc](https://github.com/iuap-design/tinper-neoui-grid/commit/eafb2dc))

* pro-IUAPDESIGN-98:友云采：grid中title显示为id，renderType存在时取消td的title。 ([fe1160a](https://github.com/iuap-design/tinper-neoui-grid/commit/fe1160a))

* 优化tree传入setting的处理 ([c7823fc](https://github.com/iuap-design/neoui-kero/commit/c7823fc))

* navbar单一输出插件问题 ([af7ec21](https://github.com/iuap-design/tinper-neoui/commit/af7ec21))

* neoui-navbar 样式 ([0fb57d8](https://github.com/iuap-design/tinper-neoui/commit/0fb57d8))

* 选项多选选择较多时，卡片显示... 数据显示不完整，鼠标落上时 应显示tips,显示完整数据 ([bc4e89b](https://github.com/iuap-design/tinper-neoui/commit/bc4e89b))

* 优化onRowDelete传入参数 ([f33f189](https://github.com/iuap-design/tinper-neoui-grid/commit/f33f189))

* 修改先在datatable中选中grid中显示状态不对的问题 ([f2d1769](https://github.com/iuap-design/tinper-neoui-grid/commit/f2d1769))

* 增加参数noScroll控制grid不显示滚动条 ([a20304f](https://github.com/iuap-design/tinper-neoui-grid/commit/a20304f))

* 解决grid中tab不可用的问题 ([dbe89df](https://github.com/iuap-design/tinper-neoui-grid/commit/dbe89df))


<a name="3.1.4"></a>
<h2 class="logtit"> V3.1.4 <a class="u-button u-button-floating loglink" href="//design.yyuap.com/static/download/iuap-design-3.1.4.zip"><i class="icon uf uf-downloadd logicon"></i></a> <i class="logdate">(2016-10-27)</i></h2>

### Bug Fixes
* pro-IUAPDESIGN-104:友云采:grid左侧的复选框和编辑控件的显示不一致 ([ef520ed](https://github.com/iuap-design/neoui-kero/commit/ef520ed))

* pro-IUAPDESIGN-69:营销物业管理：u-meta定义方式需要支持指定数据行 ([994e949](https://github.com/iuap-design/neoui-kero/commit/994e949))

* pro-IUAPDESIGN-106:友云采：模态框需要支持设置高度 ([534509d](https://github.com/iuap-design/tinper-neoui/commit/534509d))

* pro-IUAPDESIGN-88:友云采：日期控件选择确定之后会刷新页面 ([d486f8b](https://github.com/iuap-design/tinper-neoui/commit/d486f8b))

* pro-IUAPDESIGN-101:友云采：grid中横向滚动时需要隐藏编辑控件 ([928fdf1](https://github.com/iuap-design/tinper-neoui-grid/commit/928fdf1))

* pro-IUAPDESIGN-41:云表单：grid提供在移动端的样式修改方案 ([8b08272](https://github.com/iuap-design/tinper-neoui-grid/commit/8b08272))

* pro-IUAPDESIGN-46:友云采：gird不出现左右滚动条（方案：px改为百分比） ([6c83f92](https://github.com/iuap-design/tinper-neoui-grid/commit/6c83f92))

* pro-IUAPDESIGN-50:友云采：grid表格数据不显示省略号（增加各行显示） ([b6a46ac](https://github.com/iuap-design/tinper-neoui-grid/commit/b6a46ac))

* pro-IUAPDESIGN-64:数字营销：grid增加参数控制点击content不触发Row选中 ([0a84f55](https://github.com/iuap-design/tinper-neoui-grid/commit/0a84f55))

* pro-IUAPDESIGN-89:友云采：grid没有数据的话下面的边线没有显示 ([bfa688f](https://github.com/iuap-design/tinper-neoui-grid/commit/bfa688f))

* pro-IUAPDESIGN-92:友云采：关联计算的数据在合计行的显示 ([f67aad8](https://github.com/iuap-design/tinper-neoui-grid/commit/f67aad8))

* pro-IUAPDESIGN-95:友云采：内容区点击之后第一次选中，第二次取消选中 ([b42059a](https://github.com/iuap-design/tinper-neoui-grid/commit/b42059a))

* pro-IUAPDESIGN-96:友云采：grid中取消选中之后的全选显示不对 ([eafb2dc](https://github.com/iuap-design/tinper-neoui-grid/commit/eafb2dc))

* pro-IUAPDESIGN-98:友云采：grid中title显示为id，renderType存在时取消td的title。 ([fe1160a](https://github.com/iuap-design/tinper-neoui-grid/commit/fe1160a))

* 优化tree传入setting的处理 ([c7823fc](https://github.com/iuap-design/neoui-kero/commit/c7823fc))

* 选项多选选择较多时，卡片显示... 数据显示不完整，鼠标落上时 应显示tips,显示完整数据 ([bc4e89b](https://github.com/iuap-design/tinper-neoui/commit/bc4e89b))

* 修改先在datatable中选中grid中显示状态不对的问题 ([f2d1769](https://github.com/iuap-design/tinper-neoui-grid/commit/f2d1769))

* 增加参数noScroll控制grid不显示滚动条 ([a20304f](https://github.com/iuap-design/tinper-neoui-grid/commit/a20304f))

### Features
NaN
