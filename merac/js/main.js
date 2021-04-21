
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
		
			$tabs.each(function() {
				$(this).find('li').on('click', function(e) {
					e.preventDefault();
					var $this = $(this);
		
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
		
		function scrollWaypointInit() {
			if('undefined' === typeof $.fn.waypoint) {
				return false;
			}

			$('.animateMe').each(function() {
				var $element = $(this);
				var	$animationClass = $element.data("animation");
				var trigger = (trigger) ? trigger : $element;

				trigger.waypoint(function() {
					$element.addClass('animated').addClass($animationClass);
				},{
					offset: '80%'
				});
			});
		}

		function photoSwipe() {
			
			var arrPhoto = [];

			$('.subscribe-inner-img').find('a').each(function() {
				var $link = $(this);
				var item = {
					src: $link.attr('href'),
					w: $link.data('width'),
					h: $link.data('height'),
					title: $link.data('caption')
				};
				arrPhoto.push(item);
			});

			$('.subscribe-inner-img').on('click', function(e){
				e.preventDefault();
		
				var $pswp = $('.pswp')[0];
				var	options = {
					bgOpacity: 0.85,
					showHideOpacity: true,
				};
		
				var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, arrPhoto, options);
				gallery.init();

				if('undefined' === typeof PhotoSwipe) {
					return false;
				}
			});
		}

		function stickeMode() {
			$(".header-top ").stick_in_parent();
		}

		function googleM() {
			if('undefined' === typeof Maplace) {
				return false;
			}

			new Maplace({
				map_div: '#gmap-fusion',
				type: 'fusion',
				map_options: {
					zoom: 5,
					set_center: [39.16414104768742, -97.20703125000001],
					styles: [
						{
							"featureType": "all",
							"elementType": "all",
							"stylers": [
								{
									"visibility": "on"
								}
							]
						},
						{
							"featureType": "all",
							"elementType": "labels",
							"stylers": [
								{
									"visibility": "off"
								},
								{
									"saturation": "-100"
								}
							]
						},
						{
							"featureType": "all",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"saturation": 36
								},
								{
									"color": "#000000"
								},
								{
									"lightness": 40
								},
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "all",
							"elementType": "labels.text.stroke",
							"stylers": [
								{
									"visibility": "off"
								},
								{
									"color": "#000000"
								},
								{
									"lightness": 16
								}
							]
						},
						{
							"featureType": "all",
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "administrative",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#000000"
								},
								{
									"lightness": 20
								}
							]
						},
						{
							"featureType": "administrative",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#000000"
								},
								{
									"lightness": 17
								},
								{
									"weight": 1.2
								}
							]
						},
						{
							"featureType": "landscape",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#000000"
								},
								{
									"lightness": 20
								}
							]
						},
						{
							"featureType": "landscape",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#4d6059"
								}
							]
						},
						{
							"featureType": "landscape",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#4d6059"
								}
							]
						},
						{
							"featureType": "landscape.natural",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#4d6059"
								}
							]
						},
						{
							"featureType": "poi",
							"elementType": "geometry",
							"stylers": [
								{
									"lightness": 21
								}
							]
						},
						{
							"featureType": "poi",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#4d6059"
								}
							]
						},
						{
							"featureType": "poi",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#4d6059"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "geometry",
							"stylers": [
								{
									"visibility": "on"
								},
								{
									"color": "#7f8d89"
								}
							]
						},
						{
							"featureType": "road",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#7f8d89"
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#7f8d89"
								},
								{
									"lightness": 17
								}
							]
						},
						{
							"featureType": "road.highway",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#7f8d89"
								},
								{
									"lightness": 29
								},
								{
									"weight": 0.2
								}
							]
						},
						{
							"featureType": "road.arterial",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#000000"
								},
								{
									"lightness": 18
								}
							]
						},
						{
							"featureType": "road.arterial",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#7f8d89"
								}
							]
						},
						{
							"featureType": "road.arterial",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#7f8d89"
								}
							]
						},
						{
							"featureType": "road.local",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#000000"
								},
								{
									"lightness": 16
								}
							]
						},
						{
							"featureType": "road.local",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#7f8d89"
								}
							]
						},
						{
							"featureType": "road.local",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#7f8d89"
								}
							]
						},
						{
							"featureType": "transit",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#000000"
								},
								{
									"lightness": 19
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "all",
							"stylers": [
								{
									"color": "#2b3638"
								},
								{
									"visibility": "on"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "geometry",
							"stylers": [
								{
									"color": "#2b3638"
								},
								{
									"lightness": 17
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "geometry.fill",
							"stylers": [
								{
									"color": "#24282b"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "geometry.stroke",
							"stylers": [
								{
									"color": "#24282b"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text.fill",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.text.stroke",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						},
						{
							"featureType": "water",
							"elementType": "labels.icon",
							"stylers": [
								{
									"visibility": "off"
								}
							]
						}
						],
				},
				fusion_options: {
					query: {
						from: '423292',
						select: 'location'
					},
					heatmap: {
						enabled: true
					},
					suppressInfoWindows: true
				}
			}).Load();
		}

		function threeSix() {
			window.onload = init;

			var car;
			function init(){
				car = $('.car').ThreeSixty({
					totalFrames: 52, 
					endFrame: 52, 
					currentFrame: 1, 
					imgList: '.threesixty_images', 
					progress: '.spinner',
					imagePath:'../assets/', 
					filePrefix: '', 
					ext: '.png',
					height: 1000,
					width: 447,
					navigation: true,
					plugins: ['ThreeSixtyFullscreen']
				});
			}
		}

		sliderAll();
		toTop();
		popup();
		tabsIsotope();
		tabs();
		tooltipsInit();
		scrollWaypointInit();
		photoSwipe();
		googleM();
		stickeMode();
		threeSix();
	});
})(jQuery);