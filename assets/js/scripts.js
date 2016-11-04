$(document).ready(function(){
  $('.u-hamburger').click(function(){
      var attrTarget = $(this).attr('data-target');
      var $targetDom = $(attrTarget);
      $(this).toggleClass("u-collapsed");
      $targetDom.toggleClass("in");

   });

   $('#docBtn').click(function(){
     $('#content-inner').toggleClass('doctoggle');
  });

  if(!u.isSafari){
      $('.u-navbar').css('position','fixed');
  }

})
