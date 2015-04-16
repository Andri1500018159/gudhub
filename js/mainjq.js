function initFancyBox() {
    'use strict';
    $('.fancybox').fancybox();
    $(".fancybox").fancybox({
        padding: 0,
        openEffect: 'elastic',
        openSpeed: 600,
        closeEffect: 'fade',
        closeSpeed: 300,
        arrows : true,

    });
    $(".fancybox-thumb").fancybox({
        padding: 0,
        openEffect: 'elastic',
        openSpeed: 600,
        closeEffect: 'fade',
        closeSpeed: 300,
        arrows : true,
        helpers	: {
			thumbs	: {
				width	: 150,
				height	: 100,

			}

        }
    });


};
function initSlickNav(){
		$('.nav1').slicknav({
	   label: '',
	   duration: 500,


});
    $('.slicknav_menu').prepend('<div class="header-logo"><a href="#/home"><img src="./images/logo.png" alt="logo"></a></div>');
	};


$(document).ready(function () {
    initFancyBox();
    initSlickNav();

});
