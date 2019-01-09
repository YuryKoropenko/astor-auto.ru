$(function() {
    /*  */
    $('.p-stockslider').owlCarousel({
        loop:true,
        margin:60,
        dots:false,
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
    });

    /*  */
    $('.p-revslider').owlCarousel({
        loop:true,
        margin:24,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    /*  */
    $('.p-workimg__slider').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        nav:true,
        items:1
    });

    /*  */
    $('.p-news__slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items:1
    });
    $('.p-arrowtrigger__left[name="p-news__slider-left"]').on('click', function() {
        $('.p-news__slider .owl-prev').trigger('click');
        return false;
    });
    $('.p-arrowtrigger__right[name="p-news__slider-right"]').on('click', function() {
        $('.p-news__slider .owl-next').trigger('click');
        return false;
    });

    /*  */
    $('.p-articles__slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items:1
    });
    $('.p-arrowtrigger__left[name="p-articles__slider-left"]').on('click', function() {
        $('.p-articles__slider .owl-prev').trigger('click');
        return false;
    });
    $('.p-arrowtrigger__right[name="p-articles__slider-right"]').on('click', function() {
        $('.p-articles__slider .owl-next').trigger('click');
        return false;
    });

});