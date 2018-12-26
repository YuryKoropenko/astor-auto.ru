$(function() {
	/* Маска телефона */
	$('.phone').mask('+7(999)999-99-99');

	/* Селекты */
	$('.select').selectmenu();

	/* CallBack форма */
	$('.h-callback__btn').fancybox();
	$('.p-contacts__callback').fancybox();
});