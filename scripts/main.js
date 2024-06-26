$(document).ready(function() {

	let clickEvent = document.ontouchstart !== null ? "click" : "touchstart";

	$('.fancybox').fancybox();

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
		let menu = $(this).closest(".container").find(".menu");
		if ($(this).hasClass("burger-menu_active")) {
			menu.removeClass("menu_active");
		} else {
			menu.addClass("menu_active");
		}
		$(this).toggleClass("burger-menu_active");
	});

	if (document.documentElement.clientWidth < 768) {
		if ($(".table-slider").length > 0) {
			init_table_slider();
		}
		if ($('.mobile-slider').length > 0) {
			init_mobile_slider();
		}
	}

	$(window).resize(function () {
		if (document.documentElement.clientWidth < 768) {
			if (($(".table-slider").length > 0) && (!($(".table-slider").hasClass("slick-slider")))) {
				init_table_slider();
			}
			if (($('.mobile-slider').length > 0) && (!($('.mobile-slider').hasClass('slick-slider')))) {
				init_mobile_slider();
			}
		} else {
			if (($(".table-slider").length > 0) && ($(".table-slider").hasClass("slick-slider"))) {
				$(".table-slider").slick("unslick");
			}
			if (($('.mobile-slider').length > 0) && ($('.mobile-slider').hasClass('slick-slider'))) {
				$('.mobile-slider').slick('unslick');
			}
		}
	});

	$(".tabs__nav-btn").on(clickEvent, function() {
		if (!$(this).hasClass("active")) {
			$(".tabs__nav-btn").each(function() {
				$(this).removeClass("active");
			});
			$(".tabs__item").each(function () {
				$(this).removeClass("active");
			});
			$(this).addClass("active");
			let tabNum = $(this).data("tab");
			let tab = $(`.tabs__item[data-tab=${tabNum}]`);
			tab.addClass("active");
			let slider = tab.find(".mobile-slider");
			slider.slick('unslick');
			slider.slick({
				infinite: true,
				arrows: true,
				dots: true,
				adaptiveHeight: false,
				slidesToShow: 1,
				slidesToScroll: 1
			});
		}
	});

	$('.custom-select').on(clickEvent, function (e) {
		let dropdown = $(this).find('.custom-select__dropdown');
		let icon = $(this).find('.custom-select__icon');

		if (dropdown.hasClass('open')) {
			icon.removeClass('open');
			dropdown.removeClass('open');
			dropdown.css('height', 0);
		} else {
			icon.addClass('open');
			dropdown.addClass('open');
			let itemsCount = $(this).find('.custom-select__option').length;
			let height = 48 * itemsCount;
			dropdown.css('height', height);
		}

		if ($(e.target).hasClass('custom-select__option')) {
			let formId = $(e.target).data('value');
			let text = $(e.target).text();
			$(e.target).closest('.form').find('input[name="title"]').attr('value', formId);
			$(e.target).closest('.form').find('.custom-select__text').text(text);
		}

		return false;
	});

});

function init_table_slider() {
	$(".table-slider").slick({
		infinite: true,
		arrows: false, // true
		dots: true,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
}

function init_mobile_slider() {
	$('.mobile-slider').each(function () {
		$(this).slick({
			infinite: true,
			arrows: true,
			dots: true,
			adaptiveHeight: false,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	});
}