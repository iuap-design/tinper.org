$(document).ready(function() {
    $('.u-hamburger').click(function() {
        var attrTarget = $(this).attr('data-target');
        var $targetDom = $(attrTarget);
        $(this).toggleClass("u-collapsed");
        $targetDom.toggleClass("in");

    });
    var paddingLeft = $('.u-navbar-header a img').offset() ? $('.u-navbar-header a img').offset().left : 130;

    $('.tab-content').css({
        'padding-left': paddingLeft
    });
    var is_mobile = false;
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        if (window.location.href.indexOf("?mobile") < 0) {
            try {
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    is_mobile = true;
                } else if (/iPad/i.test(navigator.userAgent)) {} else {
                    is_mobile = true;
                }
            } catch (e) {}
        }
    }

    //导航
    $('.nav-first-sub').mouseenter(function() {
        var $ulSiblings = $(this).find('ul')
        //获取兄弟节点ul，计算出长度。
        var width = $ulSiblings.width();
        var right = '-' + width + 'px';
        $ulSiblings.css({
            "right": right,
            "display": "block"
        });

        //显示兄弟节点
    });
    var $this = $(this),
        $nav = $('.u-navbar.u-navbar-default'),
        top = $(this).scrollTop();
    if (top === 0) {
        $nav.addClass('black_');
    }
    //导航栏的滚动动态切换效果
    $(document).off("scroll").on("scroll", function() {
        var $this = $(this),
            $nav = $('.u-navbar.u-navbar-default'),
            top = $(this).scrollTop();
        if (top > 50) {
            $nav.removeClass("black_").addClass('white_');
        } else {
            $nav.addClass('default').addClass('black_').removeClass('white_');
        }
    });
    //当不是首页的时候，取消导航栏的滚动动态切换效果
    if (window.location.pathname !== '/' || is_mobile) {
        $nav.addClass('white_');
        $(document).off("scroll");
    }

    $('.nav-first-sub').mouseleave(function() {
        var $ulSiblings = $(this).find('ul');
        $ulSiblings.removeAttr('style');
    });

    $('.products-item-link').off().on('click', function(e) {
        var $this = $(this);
        if ($this.attr('href') === 'javascript:;') {
            alert('敬请期待！');
        }
    })

    $('.nav-list li').mouseenter(function() {
        var tabId = $(this).attr('index');

        //tabId不存在的话，隐藏所有的子菜单

        //如果tabId存在，则显示子菜单内容。
        if (tabId && tabId !== "#") {
            if ($(tabId).is(":hidden")) {
                $(tabId).slideDown();
            }
        } else {
            //   $('.tab-content').css({'display':'none'});
        }
        $(this).closest('.u-navbar').off().on('mouseleave', function() {
            $('.tab-content').css({
                'display': 'none'
            });
        })
    });


    //子菜单导航
    $('.tab-content-left li').on('mouseover', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var firstTab = $(this).find('a').attr('index');
        //有对应的右侧内容则显示，没有则清空右侧区域
        if (firstTab && firstTab !== "#") {

            $('.tab-content-right li ').removeClass('active');


            $('.tab-content-right ul').each(function(index) {
                if ('#' + $(this).attr('id') == firstTab) {
                    $(this).removeClass('hide').siblings().addClass('hide');
                    $(this).find('li').first().addClass('active');
                }
            })
        } else {
            $('.tab-content-right ul').addClass('hide');
        }

    });

    $('.tab-content-right li').mouseenter(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //当鼠标移开子菜单时，内容隐藏
    $('.tab-content').mouseleave(function() {
        //重置将第一项选中
        $(this).find('.tab-content-left li').first().addClass('active').siblings().removeClass('active');
        var $rightUl = $(this).find('.tab-content-right ul');
        $rightUl.first().removeClass('hide').siblings().addClass('hide');
        $rightUl.find('li').first().addClass('active').siblings().removeClass('active');

        // $(this).css({'display':'none'});
    });




    $('.products-item-link').click(function() {
        var $popout = $(this).siblings('.products-item-popout');

        var $parent = $(this).parent();
        //清除所有的父类的style样式
        $('.products-item').removeAttr("style");
        //已经显示的化，将不再显示
        if (!$popout.is(":hidden")) {
            $popout.hide();

            return;
        }
        $(".products-item-popout").hide();
        var $arrow = $popout.find('.product-item-popout-down-arrow');
        var leftValue = this.offsetLeft + this.offsetWidth / 2 - 6;
        //加上内容的margin
        var height = $popout.height() + 40;
        $parent.css({
            "margin-bottom": height
        });
        $popout.show();

        $arrow.css({
            left: leftValue + 'px'
        });

        //给圆形添加box-shadow效果
        //先去掉其他的圆形的box-shadow效果
        $('.products-item-img').removeClass('active');
        $(this).find('.products-item-img').addClass('active');

    });

    $('.product-item-close-btn').click(function() {
        $(this).parent().hide();
        $(this).parents('.products-item').removeAttr("style");
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
        } else {
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
            try {
                s = document.execCommand("copy")
            } catch (t) {
                console.error(t)
            }
            selections.removeAllRanges();
        }

    });
    //版本下载中，其他场景下载显示
    $('.down_info>p>span').click(function() {
        var $this = $(this);
        $this.parent().next().toggleClass('show-down');
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

    var arr = ['<a href="/dist/uba/index.html" class="center-block show-link-color"> 前端集成开发工具<button class="u-button u-button-primary  center-block margin-top-40 ">uba</button> </a>', '<a href="/dist/neoui/index.html"  class="center-block show-link-color">UI框架 <button class="u-button u-button-primary margin-top-40 block">neoui</button></a>', '<a href="//bee.tinper.org/" class="center-block show-link-color">React组件库<button class="u-button u-button-primary margin-top-40  center-block block">bee</button></a>',
        '<a href="/dist/grid/index.html" class="center-block show-link-color">表格控件<button class="u-button u-button-primary block  margin-top-40">kero</button></a>', '<a href="/dist/kero/index.html" class="center-block show-link-color">UI数据模型<button class="u-button u-button-primary block  margin-top-40">kero</button></a>', '<a href="/dist/sparrow/index.html" class="center-block show-link-color">前端基础库<button class="u-button u-button-primary block  margin-top-40">sparrow</button></a>'
    ];
    //检查浏览器类型，如果是pc端就增加动画hover事件，移动端就取消掉2次点击事件出现hover的bug
    function detectmob() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return false;
        } else {
            $.each($(".product_img"), function(index, item) {
                $(item).hover(function() {
                        $(item).find("aside").hide();
                        $(item).find("aside").css({
                            "opacity": "0.8",
                            "visibility": "visible"
                        }).show(250);
                        $(item).find("aside").append(arr[index]);
                    },
                    function() {
                        $(item).find("aside").children("a").remove();
                        $(item).find("aside").hide();

                    })
            })
        }
    }
    detectmob();
})
