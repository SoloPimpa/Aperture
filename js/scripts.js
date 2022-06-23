$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 1500,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1,
            },
            420:{
                items:3
            },
            767: {
                items: 3
            },
            1000:{
                items:5
            }
        }
    });
});