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


// Counter adding 

$('.timer').countTo();

$('.counter-item').appear(function() {
    $('.timer').countTo();
},{accY: -100});




// Our Team Carousel

$(document).ready(function(){
    // get our-team class
    $(".our-team").owlCarousel({
        pagination: true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
        items: 4,
    	//singleItem:true,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
});


// Our Pricing Table

$(document).ready(function(){
    // get our-team class
    $(".pricing").owlCarousel({
        pagination: true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
        items: 4,
    	//singleItem:true,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
});




// Latest News Post 

$(document).ready(function(){
    // get our-team class
    $(".latest-news").owlCarousel({
        pagination: true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
        items: 3,
    	//singleItem:true,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
});



// Testimonials Carousel


var testimonial = $("#testimonial-carousel");

testimonial.owlCarousel({
	navigation : true,
	pagination: true,
	slideSpeed : 2500,
	stopOnHover: true,
	autoPlay: 3000,
	singleItem: true,
	transitionStyle : "fade",
	navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});


// Partner and Clients

$(document).ready(function() {
 
    $(".clients").owlCarousel({
          pagination: false,
          navigation : true,
          slideSpeed : 2500,
          stopOnHover: true,
          autoPlay: 3000,
          singleItem:false,
          itemsMobile : [550,1],
          itemsDesktopSmall : [991,2],
          items: 5,
          transitionStyle : "fade",
          navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });
   
  });