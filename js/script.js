var $ = jQuery.noConflict();


// Page Loader
$(window).load(function () {
    
    "use strict";
	$('#loader').fadeOut();
});


// jQuery for page scrolling feature -reuires jQuery Easing plugin

$(function () {
    
    "use strict";
    
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 68
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('body').scrollspy({
    target: '.navbar-fixed-top',
	offset: 70
	
});



// progress bar

$(document).ready(function($) {
	"use strict";
    
        $('.skill-shortcode').appear(function() {
            $('.progress').each(function(){ 
                $('.progress-bar').css('width',  function(){ 
                    return ($(this).attr('data-percentage')+'%')
                });
            });
        },{accY: -100});

        
    });
	