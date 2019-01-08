$(function() {
	/* Выпадающее меню */
	$('.h-nav__item-submenu').hover(function() {
		$(this).children('.h-nav__submenu-wp').stop(false, true).fadeIn(200);
	}, function() {
        $(this).children('.h-nav__submenu-wp').stop(false, true).fadeOut(200);
	});

	/* Маска телефона */
	$('.phone').mask('+7(999)999-99-99');

	/* Селекты */
	$('.select').selectmenu();

	/* CallBack форма */
	$('.h-callback__btn').fancybox();
	$('.p-contacts__callback').fancybox();

	/* mob-footer */
    if($(window).width() < 768) {
        $('.f-menu .footer__title').on('click', function () {
            $(this).toggleClass('active');
            $(this).parent().children('.f-menu__list').slideToggle(200);
            return false;
        });
        $('.f-addr .footer__title').on('click', function () {
            $(this).toggleClass('active');
            $(this).parent().children('.f-addr__hidden').slideToggle(200);
            return false;
        });
    }

    /* mob-menu */
    $('.h-mobnaw').on('click', function() {
    	$('.header__mobmenu').show();
    	return false;
	});
    $('.h-mobmenu__close').on('click', function() {
        $('.header__mobmenu').hide();
        return false;
	});
    $('.h-mobmenu__item-submenu .h-mobmenu__link').on('click', function() {
		 $(this).parent().children('.h-mobmenu__sublist').slideToggle(200);
		 $(document).click(function(event) {
		 if ($(event.target).closest('.h-mobmenu__sublist').length) return;
		 $('.h-mobmenu__sublist').slideUp(200);
		 event.stopPropagation();
		 });
        return false;
    });


    $(document).click(function(event) {
        if ($(event.target).closest('.header__mobmenu').length) return;
        $('.header__mobmenu').hide();
        event.stopPropagation();
    });
    return false;
});