$(document).ready(function(){

    //hero slider
    $('#hero-slider').owlCarousel({
        loop: true,
        margin:0,
        nav: true,
        items:1,
        dots: false,
        smartSpeed: 1000,
        navText: ['Prev', 'Next'],
        responsive:{
            0:{
                nav: false,      //we are removing the btns for mobile view
            },

            768:{
                nav: true,      //after 768 px(mobile), the btns return
            }
        }
    });


     //project slider
     $('#project-slider').owlCarousel({
        loop: true,
        margin:0,
        nav: true,
        dots: false,
        items: 2,
        smartSpeed: 1000,
        navText: ['Prev', 'Next'],
        margin: 24,
        responsive:{
            0:{
                items: 1,
                margin: 0,
            },

            768:{
                items: 2,
                dots: true,
            },

            1140:{
                center: true,
                items: 2,
                dots: true,
            }
        }
    });

});