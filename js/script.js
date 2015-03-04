//slider plugin
(function($) {
	$.fn.slide = function(options) {
		var defaults = {
			elem: '.slide',
			step: '.step',
			slideL: '.slideLeft',
			slideR: '.slideRight',
			delay: 5000,
			speed: 500,
			fade: false
		};
		var options = $.extend(defaults, options);

		return this.each(function(options) {
			var current,
					next,
					direction = 'left',
					i = 0,
					len = $(defaults.elem).length,
					wid = $(defaults.elem).outerWidth(),
					handle = setInterval(slideLeft, defaults.delay);

			$(window).resize(function() {
				setTimeout(function() {
					wid = $(defaults.elem).outerWidth();
					if (direction == 'left' && defaults.fade === false) {
						$(defaults.elem + ':not(:eq(' + i + '))').css('left',wid);
					} else {
						$(defaults.elem + ':not(:eq(' + i + '))').css('left',-wid);
					}
				},300);
			});

			$(defaults.step + ':eq(0)').addClass('active');
			$(defaults.elem + ':eq(0)').addClass('active');
			if (defaults.fade === false) {
				$(defaults.elem + ':not(:eq(0))').css('left',wid);
			}

			$(defaults.step).click(function() {
				var index = $(defaults.step).index($(this));
				if ((i != index) && !$(defaults.elem).is(':animated')) {
					clearInterval(handle);
					current = $(defaults.elem + ':eq(' + i + ')');
					i = index;
					next = $(defaults.elem + ':eq(' + index + ')');
					if (defaults.fade === false) {
						next.css('left',wid);
						$(defaults.step).removeClass('active');
						current.animate( {left:-wid}, defaults.speed);
						next.animate( {left:'0px'}, defaults.speed);
						$(defaults.elem + ':eq(' + i + ')').addClass('active');
					} else {
						next.css('z-index',9);
						$(defaults.step).removeClass('active');
						current.fadeOut(defaults.speed, function() {
							current.css('z-index',8).show().removeClass('active');
							next.css('z-index',10).addClass('active');
						});
					}
					$(defaults.step + ':eq(' + i + ')').addClass('active');
					setTimeout(function() {
						clearInterval(handle);
						handle = setInterval(slideLeft, defaults.delay);
					});
				}
			});

			$(defaults.slideL).click(function() {
				if (!$(defaults.elem).is(':animated')) {
					clearInterval(handle);
					slideLeft();
					setTimeout(function() {
						clearInterval(handle);
						handle = setInterval(slideLeft, defaults.delay);
					});
				}
			});
			$(defaults.slideR).click(function() {
				if (!$(defaults.elem).is(':animated')) {
					clearInterval(handle);
					slideRight();
					setTimeout(function() {
						clearInterval(handle);
						handle = setInterval(slideRight, defaults.delay);
					});
				}
			});

			function slideLeft() {
				direction = 'left';
				current = $(defaults.elem + ':eq(' + i + ')');
				if (i == (len-1)) {
					next = $(defaults.elem + ':eq(0)');
				} else {
					next = $(defaults.elem + ':eq(' + (i+1) + ')');
				}
				if (defaults.fade === false) {
					next.css('left',wid);
					$(defaults.step).removeClass('active');
					$(defaults.elem).removeClass('active');
					current.animate( {left:-wid}, defaults.speed);
					next.animate( {left:'0px'}, defaults.speed);
				} else {
					next.css('z-index',9);
					$(defaults.step).removeClass('active');
					current.fadeOut(defaults.speed, function() {
						current.css('z-index',8).show().removeClass('active');
						next.css('z-index',10).addClass('active');
					});
				}
				if (i == (len-1)) {
					i = 0;
				} else {
					i++;
				}
				$(defaults.step + ':eq(' + i + ')').addClass('active');
				$(defaults.elem + ':eq(' + i + ')').addClass('active');
			}
			function slideRight() {
				direction = 'right';
				current = $(defaults.elem + ':eq(' + i + ')');
				if (i == 0) {
					next = $(defaults.elem + ':eq(' + (len-1) + ')');
				} else {
					next = $(defaults.elem + ':eq(' + (i-1) + ')');
				}
				if (defaults.fade === false) {
					next.css('left',-wid);
					$(defaults.step).removeClass('active');
					$(defaults.elem).removeClass('active');
					current.animate( {left:wid}, defaults.speed);
					next.animate( {left:'0px'}, defaults.speed);
				} else {
					next.css('z-index',9);
					$(defaults.step).removeClass('active');
					current.fadeOut(defaults.speed, function() {
						current.css('z-index',8).show().removeClass('active');
						next.css('z-index',10).addClass('active');
					});
				}
				if (i == 0) {
					i = (len-1);
				} else {
					i--;
				}
				$(defaults.step + ':eq(' + i + ')').addClass('active');
				$(defaults.elem + ':eq(' + i + ')').addClass('active');
			}
		});
	};
})(jQuery);


$(window).load(function() {
	$('section.top .slider').slide({
		elem: 'section.top .slider .slide',
		step: 'section.top .step',
		slideL: 'section.top .slideRight',
		slideR: 'section.top .slideLeft',
		delay: 6000,
		speed: 500,
		fade: true
	});
	$('section.other .slider').slide({
		elem: 'section.other .slider .slide',
		step: 'section.other .step',
		slideL: 'section.other .slideRight',
		slideR: 'section.other .slideLeft',
		delay: 6000,
		speed: 500
	});
});


$(window).scroll(function() {
	if ($(window).scrollTop() > $(window).height()/2) {
		$('main .scroll-top').removeClass('active');
	} else {
		$('main .scroll-top').addClass('active');
	}
});

$('.collapse').click(function() {
	$(this).toggleClass('active');
	$('footer').slideToggle(500);
	$('html, body').animate({scrollTop:$(document).height()}, 500);
});
$('.scroll-top').click(function() {
	$('html, body').animate({scrollTop:0}, 1000);
});
$('section.tabs ul li').click(function() {
	var index = $('section.tabs ul li').index(this);
	$(this).addClass('active').siblings().removeClass('active');
	$('section.tabs article').eq(index).addClass('active').siblings().removeClass('active');
});