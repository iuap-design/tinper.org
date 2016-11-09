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

    // $(document).scroll(function() {
    //     if(navigator.platform == 'iPhone'){
    //         $('.u-navbar').css("top", $(window).scrollTop());
    //     }
    // })
})
