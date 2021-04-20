
(function($) {
	$(document).ready(function() {

		function sliderAll() {
			if('undefined' === typeof Swiper) {
				return false;
			}

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
			if('undefined' === typeof $.fn.magnificPopup) {
				return false;
			}

			$('.popup-btn, .subscribe-link').magnificPopup({
				removalDelay: 100,
				type:'inline',
				closeBtnInside: true,
				closeOnBgClick: true,
				callbacks: {
					beforeOpen: function() {
						this.st.mainClass = this.st.el.attr('data-effect');
					}
				},
			});
		}
		
		function tabsIsotope() {
			if('undefined' === typeof Isotope) {
				return false;
			}

			var $grid = new Isotope('.grid', {
				itemSelector: '.element-item',
				layoutMode: 'fitRows'
			});
		
			$('.produc-tabs-menu').on( 'click', 'li', function(e) {
				e.preventDefault();
				var $this = $(this);
				var filterValue = $this.data('filter');
		
				$this.siblings().removeClass('active');
				$this.addClass('active');
		
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
			var $this = $(this);
		
			$tabs.each(function() {
				$(this).find('li').on('click', function(e) {
					e.preventDefault();
		
					var $tabsName = $(this).data('tab');
					$this.siblings().removeClass('active');
					$this.addClass('active');
					
					var $tab = $('.tabs-item[data-tab="'+$tabsName+'"]');
					$('.tabs-item').removeClass('active');
					$tab.addClass('active');
				});
			});
		}
		
		function tooltipsInit() {
			$('[data-toggle="tooltip"]').tooltip();
		}
		
		function scrollWaypointInit(items) {
			if('undefined' === typeof $.fn.waypoint) {
				return false;
			}

			items.each(function() {
				var $element = $(this);
				var	$animationClass = $element.data("animation");
				var	$animationDelay = $element.attr('data-animation-delay');
				var trigger = (trigger) ? trigger : $element;

				trigger.waypoint(function() {
					$element.addClass('animated').addClass($animationClass);
				},{
					offset: '80%'
				});
			});
		}

		sliderAll();
		toTop();
		popup();
		tabsIsotope();
		tabs();
		tooltipsInit();
		scrollWaypointInit($('.animateMe'));
	});
})(jQuery);