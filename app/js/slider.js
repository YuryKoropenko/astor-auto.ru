$(function() {
    $('.p-stockslider').owlCarousel({
        loop:true,
        margin:60,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    })
});