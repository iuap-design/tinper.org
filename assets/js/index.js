var productData = [
    {
        title: 'React<br>开发解决方案',
        product: [
            { url: "https://github.com/uba-templates/template-iuap-react-solution/blob/master/docs/index.md", isEnable: true, ename: "tinper-react", name: "开发框架" },
            { url: "https://github.com/mirrorjs/mirror/blob/master/README_zh.md", isEnable: true, ename: "Mirror", name: "应用框架" },
            { url: "http://bee.tinper.org/", isEnable: true, ename: "tinper-bee", name: "组件库" },
            { url: "", isEnable: false, ename: "Libra", name: "移动端组件库" },
            { url: "", isEnable: false, ename: "bee-app-comp", name: "应用组件库" },
            { url: "https://github.com/nolanlawson/optimize-js", isEnable: true, ename: "optimize", name: "性能优化方案" }
        ]
    },
    {
        title: 'Moy<br>开发解决方案',
        product: [
            { url: "https://github.com/iuap-design/create-moy-app", isEnable: true, ename: "creact-moy-app", name: "脚手架工具" },
            { url: "http://docs.tinper.org/neoui/", isEnable: true, ename: "neoui", name: "前端ui框架" },
            { url: "http://docs.tinper.org/moy/kero-begin.html", isEnable: true, ename: "kero", name: "模型框架" },
            { url: "http://docs.tinper.org/moy/kero/cascader.html", isEnable: true, ename: "moy-component", name: "组件库" }
        ]
    },
    {
        title: '工具和效率',
        product: [
            { url: "http://docs.tinper.org/uba/", isEnable: true, ename: "tinper-uba", name: "前端工程化工具" },
            { url: "https://github.com/iuap-design/tdoc/blob/master/README.md",isEnable: true, ename: "tinper-tdoc", name: "静态文档网站生成" },
            { url: "https://github.com/iuap-design/ynpm-tool/blob/master/README.md", isEnable: true,ename: "ynpm", name: "Node镜像服务" },
            { url: "https://github.com/iuap-design/blog/issues/194",isEnable: true, ename: "tinper-spriter", name: "图片处理" },
            { url: "https://github.com/iuap-design/YY-Code-Guide", isEnable: true,ename: "YY-Code-Guide", name: "开发规范" },
        ]
    },
    {
        title: '静态资源',
        product: [
            { url: "http://docs.tinper.org/neoui/global.html#图标", isEnable: true, ename: "tinper-icons", name: "图标字体库" },
            { url: "/dist/cdn/index.html", isEnable: true, ename: "tinper-cdn", name: "公共CDN资源" }
        ]
    },
    {
        title: '服务',
        product: [
            { url: "http://tinper.org/webide/#/demos/ui/button", isEnable: true, ename: "tinper-webide", name: "示例系统" },
            { url: "https://github.com/iuap-design/iuap-insight", isEnable: true, ename: "iuap-insight", name: "端到端数据上报" },
            { url: "http://docs.tinper.org/uba/", isEnable: false, ename: "tinper-mock", name: "在线数据mock服务" },
            { url: "http://design.yyuap.com/designer/", isEnable: true, ename: "tinper-designer", name: "可视化开发服务" },
            { url: "http://design.yyuap.com/mall/", isEnable: true, ename: "tinper-store", name: "模板商城" },
        ]
    },
    {
        title: '基础类库',
        product: [
            { url: "http://docs.tinper.org/sparrow/", isEnable: true, ename: "sparrow.js", name: "基础类库" },
            { url: "http://docs.tinper.org/uba/", isEnable: false, ename: "Yreact", name: "轻量版React" }
        ]
    },
    {
        title: 'YRN',
        product: [
            { url: "http://docs.tinper.org/uba/", isEnable: false, ename: "tinper-RN", name: "移动应用框架" }
        ]
    },
], parentTag = $('#tinper_family'), tagHtml = "";
productData.forEach(function (item) {
    var lh = item.title.indexOf('br') > -1 ? "tinper_flag_line" : "";
    tagHtml += ' <div class="tinper_list"><div class="tinper_flag ' + lh + '">' + item.title + '</div><div class="tinper_item"><ul>';
    item.product.forEach(function (i,index) {
        console.log(i.name+'网址为：'+i.url)
        var url = i.isEnable ? i.url : 'javascript:;',
            clickEven = !(i.isEnable) ? "pruduct_link" : "",
            Enable = !(i.isEnable) ? "noEnable" : "";
        tagHtml += '<a href="' + url + '" data-type="' + i.isEnable + '" class="' + clickEven + '"><li class="'+Enable+'"><div>' + i.ename + '</div><div>' + i.name + '</div></li></a>';
    })
    tagHtml += '</ul></div></div>';
});
parentTag.html(tagHtml);
$('body').on('click', '.pruduct_link', function () {
    alert('正在建设中');
    // $('.tinper_tips').css({ width: '100%', height: '100%' });
});
// $('body').on('click', '.tinper_tips', function () {
//     $('.tinper_tips').css({
//         width: 0, height: 0
//     })
// })