# 导航条

提供了几条常用的导航，包括基础导航、工具导航、图片导航、不同颜色导航。具体代码在[webIDE](http://design.yyuap.com/dist/pages/webIDE/index.html#/demos/ui/navbar)进行在线测试。


# 示例

replaceExamp


[试一试](http://design.yyuap.com/dist/pages/webIDE/index.html#/demos/ui/navbar),

<div class="example-content"><nav class="u-navbar u-navbar-default" role="navigation">
    <div class="u-container-fluid">
        <div class="u-navbar-header">
            <button type="button" class="u-navbar-toggle u-hamburger u-hamburger-close  u-collapsed" data-target="#example-default-collapse" data-toggle="collapse">
                <!-- <span class="sr-only">Toggle navigation</span> -->
                <span class="u-hamburger-bar"></span>
            </button>
            <a class="u-navbar-brand" href="javascript:void(0)">Brand</a>
        </div>
        <ul class="nav-list u-navbar-nav hidden-xs">
            <li>
                <a href="javascript:void(0)">
                    <i class="uf uf-book" aria-hidden="true"></i>
                </a>
            </li>
            <li class="hidden-xs">
                <a class="uf uf-bellmusicaltool" data-toggle="fullscreen" href="#" role="button">
                </a>
            </li>
            <li class="hidden-xs">
                <a class="uf uf-zoomin" data-toggle="collapse" href="#example-default-search" role="button">
                    <!-- <span class="sr-only">Toggle Search</span> -->
                </a>
            </li>
        </ul>
        <div class="u-collapse u-navbar-collapse u-navbar-collapse-group" id="example-default-collapse">
            <ul class="nav-list u-navbar-toolbar u-navbar-right u-navbar-toolbar-right">
                <li class="dropdown">
                    <a class="u-avatar w-32 u-avatar-online">
                        <img src="http://design.yyuap.com/static/img/navimg1.jpg" alt="..." class="img-circle">
                        <i></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="u-badge w-20 m" data-badge="1">
                        <i class="uf uf-bellmusicaltool"></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="u-badge u-badge-info w-20 m" data-badge="3">
                        <i class="uf uf-envelope"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>

<div class="example-content ex-hide"><style>

</style></div>

<script>
u.on(window, 'load', function() {
    'use strict';
   $('.u-hamburger').click(function(){
      var attrTarget = $(this).attr('data-target');
      var $targetDom = $(attrTarget);
      $(this).toggleClass("u-collapsed");
      $targetDom.toggleClass("in");

   });
});
</script>

<div class="examples-code"><pre><code>
<nav class="u-navbar u-navbar-default" role="navigation">
    <div class="u-container-fluid">
        <div class="u-navbar-header">
            <button type="button" class="u-navbar-toggle u-hamburger u-hamburger-close  u-collapsed" data-target="#example-default-collapse" data-toggle="collapse">
                <!-- <span class="sr-only">Toggle navigation</span> -->
                <span class="u-hamburger-bar"></span>
            </button>
            <a class="u-navbar-brand" href="javascript:void(0)">Brand</a>
        </div>
        <ul class="nav-list u-navbar-nav hidden-xs">
            <li>
                <a href="javascript:void(0)">
                    <i class="uf uf-book" aria-hidden="true"></i>
                </a>
            </li>
            <li class="hidden-xs">
                <a class="uf uf-bellmusicaltool" data-toggle="fullscreen" href="#" role="button">
                </a>
            </li>
            <li class="hidden-xs">
                <a class="uf uf-zoomin" data-toggle="collapse" href="#example-default-search" role="button">
                    <!-- <span class="sr-only">Toggle Search</span> -->
                </a>
            </li>
        </ul>
        <div class="u-collapse u-navbar-collapse u-navbar-collapse-group" id="example-default-collapse">
            <ul class="nav-list u-navbar-toolbar u-navbar-right u-navbar-toolbar-right">
                <li class="dropdown">
                    <a class="u-avatar w-32 u-avatar-online">
                        <img src="http://design.yyuap.com/static/img/navimg1.jpg" alt="..." class="img-circle">
                        <i></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="u-badge w-20 m" data-badge="1">
                        <i class="uf uf-bellmusicaltool"></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="u-badge u-badge-info w-20 m" data-badge="3">
                        <i class="uf uf-envelope"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</code></pre>
</div>

<div class="examples-code"><pre><code>
</code></pre>
</div>

<div class="examples-code"><pre><code>
u.on(window, 'load', function() {
    'use strict';
   $('.u-hamburger').click(function(){
      var attrTarget = $(this).attr('data-target');
      var $targetDom = $(attrTarget);
      $(this).toggleClass("u-collapsed");
      $targetDom.toggleClass("in");

   });
});</code></pre>
</div>

