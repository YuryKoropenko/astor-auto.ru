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
});