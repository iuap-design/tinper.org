

$(document).ready(function() {
    $('.u-hamburger').click(function() {
        var attrTarget = $(this).attr('data-target');
        var $targetDom = $(attrTarget);
        $(this).toggleClass("u-collapsed");
        $targetDom.toggleClass("in");

    });

    $('#docBtn').click(function() {
        $('#content-inner').toggleClass('doctoggle');
    });

    $(".codeOptBtn").click(function() {

        //动态的修改查看代码按钮前图标
        $btni = $(this).find("i");
        if ($btni.hasClass('uf-arrow-down')) {
            $btni.removeClass('uf-arrow-down');
            $btni.addClass('uf-arrow-up');
        }else {
            $btni.addClass('uf-arrow-down');
            $btni.removeClass('uf-arrow-up');
        }
        //修改父类样式
        $(this).parent(".ex-code-par").toggleClass("show-code");
        //动态的展示代码
        $(this).siblings('.examples-code').slideToggle("fast");
    });

    //拷贝代码
    $(".examples-code code").click(function() {
        if (!(window.getSelection().toString().length > 0)) {
            var selections = window.getSelection(),
            range = document.createRange();
            range.selectNodeContents(this);
            selections.removeAllRanges();
            selections.addRange(range);
            $(this).addClass('copied');
            try { s = document.execCommand("copy") } catch (t) { console.error(t) }
            selections.removeAllRanges();
        }
        
    });

    $(".examples-code code").mouseout(function() {
         $(this).removeClass('copied');
          // window.getSelection().removeAllRanges();
    });

    // 暂时处理iphone fix导致二级目录无法展开bug
    if (!!(navigator.platform == 'iPhone')) {
        $('.u-navbar').eq(0).css({
            'position': 'static'
        });
    }

   var arr=['<a href="/dist/uba/index.html" class="center-block show-link-color"> 前端集成开发工具<button class="u-button u-button-primary  center-block margin-top-40 ">uba</button> </a>','<a href="/dist/neoui/index.html"  class="center-block show-link-color">UI框架 <button class="u-button u-button-primary margin-top-40 block">neoui</button></a>','<a href="//bee.tinper.org/" class="center-block show-link-color">React组件库<button class="u-button u-button-primary margin-top-40  center-block block">bee</button></a>',
             '<a href="/dist/grid/index.html" class="center-block show-link-color">表格控件<button class="u-button u-button-primary block  margin-top-40">kero</button></a>','<a href="/dist/kero/index.html" class="center-block show-link-color">UI数据模型<button class="u-button u-button-primary block  margin-top-40">kero</button></a>','<a href="/dist/sparrow/index.html" class="center-block show-link-color">前端基础库<button class="u-button u-button-primary block  margin-top-40">sparrow</button></a>'];
    //检查浏览器类型，如果是pc端就增加动画hover事件，移动端就取消掉2次点击事件出现hover的bug
    function detectmob() {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            return false;
        }
        else {
            $.each($(".product_img"),function(index,item){
                $(item).hover(function(){
                        $(item).find("aside").hide();
                        $(item).find("aside").css({"opacity":"0.8","visibility":"visible"}).show(250);
                        $(item).find("aside").append(arr[index]);
                    },
                    function(){
                        $(item).find("aside").children("a").remove();
                        $(item).find("aside").hide();

                    })
            })
        }
    }
    detectmob();
})
