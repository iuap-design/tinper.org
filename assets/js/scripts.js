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


    // 暂时处理iphone fix导致二级目录无法展开bug
    if (!!(navigator.platform == 'iPhone')) {
        $('.u-navbar').eq(0).css({
            'position': 'static'
        });
    }

   var arr=['<a href="/dist/uba/index.html" class="center-block show-link-color"> 前端集成开发工具uba</a>','<a href="/dist/neoui/index.html"  class="center-block show-link-color"> UI框架neoui</a>','<a href="/dist/react/index.html" class="center-block show-link-color">React组件库bee</a>',
             '<a href="/dist/grid/index.html" class="center-block show-link-color">表格控件grid</a>','<a href="/dist/kero/index.html" class="center-block show-link-color">UI数据模型kero</a>','<a href="/dist/sparrow/index.html" class="center-block show-link-color">前端基础库sparrow</a>'];
        $.each($(".product_img"),function(index,item){
            $(item).hover(function(){
                    $(item).find("aside").hide();
                    $(item).find("aside").css({"opacity":"1","visibility":"visible"}).show(250);
                    $(item).find("aside").append(arr[index]);
                },
                function(){
                    $(item).find("aside").children("a").remove();
                    $(item).find("aside").hide();

                })
        })


    // $(document).scroll(function() {
    //     if(navigator.platform == 'iPhone'){
    //         $('.u-navbar').css("top", $(window).scrollTop());
    //     }
    // })
})
