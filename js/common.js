head.ready(function() {

	$(document).on("click", function() {
		$('.js-nav').removeClass("is-active");
		$('.js-menu').removeClass("is-active");
		$(".js-form-login").hide();
		$('.js-login').removeClass("is-active");
		$('body').removeClass('is-active');
	});

	$('.js-open-nav').on('click', function(event) {
		if($(this).parent().hasClass('is-active')) {
			$(this).parent().removeClass("is-active");
		}else {
			$('.js-nav').removeClass("is-active");
			$(this).parent().addClass('is-active');
		}
		return false;
	});
	$("body").on("click", ".navigation, .js-login, .js-form-login, .js-nav, .js-menu, .popup__in", function(event){
		event.stopPropagation();
	});

	$('.js-menu-btn').on('click', function() {
		$('body').toggleClass('is-active');
	});
	
	$('.popup').on('click', function(event) {
		$(this).removeClass('is-active');
	});
	$('.popup').on("click", ".popup__in", function(event){
		event.stopPropagation();
	});

	$('.js-search').on('click', function() {
		$('.popup').addClass('is-active');
		return false;
	});

	$('.js-login').on('click', function(event) {
		$(this).addClass('is-active');
		$(".js-form-login").show();
	});

	$( window ).resize(function() {
		var width = $( window ).width();
		if (width > 720) {
			$('.navigation').addClass('is-transition');
		}
		else if (width < 720) {
			$('.navigation').removeClass('is-transition');
		}
	});

	//slick
	$('.slick-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 968,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.classifieds-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 968,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.other-slider').slick({
		dots: true,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})

	$('.top-slider').slick({
		dots: true,
		slidesToShow: 1,
		arrows: false,
		fade: true
	});

	$('.js-tab-item').on('click', function(){
		$('.slick-slider').slick('reinit');
	});
	

	//lazyload
	$("img.lazy").lazyload({
		effect : "fadeIn"
	});
});