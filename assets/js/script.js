$(document).ready(function(){
    $(window).on("scroll",browsePage);
    var $drawerButton = $('.drawer-button');
    $drawerButton.on('click', function() {
        $('.body-inner').toggleClass('body-inner-on');
        $('.drawer').toggleClass('drawer-on');
        $('.mobile-nav').toggleClass('mobile-nav-on');
        $('.mobile-nav-toggle-bar').toggleClass('mobile-nav-toggle-bar-on');
    });
  })
  /*向下滚动
  /*向下滚动时nav导航栏固定*/
  function browsePage(){
      if($(this).scrollTop()>=200){
          $(".navigation").addClass("fixed");
          $(".navigation-logo").addClass("navigation-logo-on");
          $(".primary-nav").addClass("primary-nav-on");
          $(".nav-link-dec").addClass("nav-link-dec-on");
      }else{
          $(".navigation").removeClass("fixed");
          $(".navigation-logo").removeClass("navigation-logo-on");
          $(".primary-nav").removeClass("primary-nav-on");
          $(".nav-link-dec").removeClass("nav-link-dec-on");
      }
  }