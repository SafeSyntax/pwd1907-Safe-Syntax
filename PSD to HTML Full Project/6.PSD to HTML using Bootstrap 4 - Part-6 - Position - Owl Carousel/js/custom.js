 var container = document.querySelector('.gallery');
var mixer = mixitup(container, {
    selectors: {
        control: '[our-mix-control]'
    }   
});





$(document).ready(function(){
	  $(".owl-carousel").owlCarousel({
	  	autoplay: true,
	  	autoplayTimeout: 2000,
	  	smartSpeed: 300,
	  	loop: true,
	  	responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }

	  });
});

