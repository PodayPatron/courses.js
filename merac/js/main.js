
function sliderAll() {
	$('.swiper-container').each(function() {
		var $dataOption = $(this).data('option');
		new Swiper(this, renderSlider($dataOption));
	});

	function renderSlider(data) {
		var config = {
			loop : data.loop,
			slidesPerView : data.slidesPerView,
		}

		if(data.spaceBetween) {
			config.spaceBetween = data.spaceBetween;
		}

		if(data.pagination) {
			config.pagination = {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + '</span>';
				},
			}
		}

		if(data.navigation) {
			config.navigation = {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		}

		if(config.slidesPerView >= 1) {
			config.breakpoints = {
				993: {
					slidesPerView: config.slidesPerView,
				},
				150: {
					slidesPerView: 1,
				},
			}
		}
		return config;
	}
}

function popup() {
	$('.popup-btn').magnificPopup({
		type:'inline',
		closeBtnInside: true,
		//closeOnContentClick: true,
		
	});
}

function tabsIsotope() {
	var $grid = new Isotope('.grid', {
		itemSelector: '.element-item',
		layoutMode: 'fitRows'
	});

	$('.produc-tabs-menu').on( 'click', 'li', function(e) {
		e.preventDefault();

		var filterValue = $(this).data('filter');

		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		$grid.arrange({
			filter : filterValue,
		});
	});
}

function toTop() {
	var $toTop = $('.to-top');

	$(document).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$toTop.fadeIn();
		} else {
			$toTop.fadeOut();
		}
	});

	$toTop.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
}

function tabs() {
	var $tabs = $('.tabs-menu');

	$tabs.each(function() {
		$(this).find('li').on('click', function(e) {
			e.preventDefault();

			var $tabsName = $(this).data('tab');
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			
			var $tab = $('.tabs-item[data-tab="'+$tabsName+'"]');
			$('.tabs-item').removeClass('active');
			$tab.addClass('active');
		});
	});
}


sliderAll();
toTop();
popup();
tabsIsotope();
tabs();
