var sizeFun = function(){
    var imgHeight = $('.desc-headings').height();
    var desc = document.querySelector('.desc-content');
    desc.style.height = imgHeight + 'px';
    var screenWidth = window.innerWidth;
    if(screenWidth > 992 && screenWidth < 1100){
        $('#prodetail').css('display','none')
    } else {
        $('#prodetail').css('display','block')
    }
}

u.on(window, 'load', function() {
    'use strict';

	// var descHeight = $('.desc-content ').outerHeight();
	// $('.desc-headings').height(descHeight);
    sizeFun();

});

u.on(window, 'resize', function(){
    sizeFun();
})
