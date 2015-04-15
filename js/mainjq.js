function initIsotope() {
    'use strict';

    var $container = $('#Portfolio');

    console.log('Isotope started');


    $('#filters').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $('#filters a').removeClass('checked').css('color', '#7D7D7D');
        $(this).addClass('checked').css('color', '#fff');

        $container.isotope({
            filter: filterValue
        });
    });
}



function initFancyBox() {
    $('.fancybox').fancybox();
    $(".fancybox").fancybox({
        padding: 0,
        openEffect: 'elastic',
        openSpeed: 600,
        closeEffect: 'fade',
        closeSpeed: 300,
        arrows : true
    });
}

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
