$(document).ready(function() {

	let clickEvent = document.ontouchstart !== null ? 'click' : 'touchstart';

	$(".accordion__item-header").on("click", function() {
		let item = $(this).closest(".accordion__item");
		item.toggleClass("accordion__item_opened");
		if (item.hasClass("accordion__item_opened")) {
			item.find(".accordion__item-body").slideDown(300);
		} else {
			item.find(".accordion__item-body").slideUp(300);
		}
	});

	$(".burger-menu").on(clickEvent, function() {
		$(this).toggleClass('burger-menu_active');
	});

	if (document.documentElement.clientWidth < 768) {
		if ($('.table-slider').length > 0) {
			init_table_slider();
		}
	}

	$(window).resize(function () {
		if (document.documentElement.clientWidth < 768) {
			if (($('.table-slider').length > 0) && (!($('.table-slider').hasClass('slick-slider')))) {
				init_table_slider();
			}
		} else {
			if (($('.table-slider').length > 0) && ($('.table-slider').hasClass('slick-slider'))) {
				$('.table-slider').slick('unslick');
			}
		}
	});

});

function init_table_slider() {
	$('.table-slider').slick({
		infinite: true,
		arrows: false, // true
		dots: true,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
}