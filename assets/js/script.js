$(document).ready(function(){
    $(window).on("scroll",browsePage);
  })
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