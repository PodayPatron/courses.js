(function($) {
	$(document).ready(function() {
		var key = 'a5ca0d8b861498009805494e3cfe3d61';
		var citiesId = [498817, 2886242, 5879092, 4566966, 2988507, 2950159, 4887398, 703448, 611717, 690688];

		function getTenCity() {
			citiesId.forEach(function(el) {
				$.ajax({
					url: `http://api.openweathermap.org/data/2.5/weather?id=${el}&appid=${key}`,
					success: function (data) {
						showCitiesCards(data);
					}
				});
			});
		}

		function showCitiesCards(data) {
			$('.swiper-wrapper').append(
				`<div class="swiper-slide weather check-weth">
					<h2 class="city">${data.name}, ${data.sys.country}</h2>
					<h1 class="temp">${Math.floor(data.main.temp - 273)}°C</h1>
					<div class="flex">
						<div class="weather-icon">
							<img src="./icons/${data.weather[0].icon}.png"/>
						</div>
						<div class="description">${data.weather[0].description}</div>
					</div>
					<div class="humidity">Humidity: ${data.main.humidity} %</div>
					<div class="wind">Wind speed: ${data.wind.speed} km/h</div>
				</div>`
			);
			sliderAll();
		}

		function inputSearchCity() {
			$(document).on('keyup', '.search-bar', function(e) {
				e.preventDefault();
				var $searchInput = $(this).val();

				if(3 <=  $searchInput.length) {
					$.ajax({
						url: `http://api.openweathermap.org/data/2.5/find?q=${$searchInput}&lang=ua&appid=${key}`,
						success: function (data) {
							remove();

							if(0 !== data.count) {
								for (let i = 0; i < data.count; i++) {
									$('.input-drop').append(`
										<a class="open-popup-link" href=".popup"><span class="input-drop-item" data-id="${data.list[i].id}">${data.list[i].name}</span></a>
									`);
								}

								$('.open-popup-link').magnificPopup({
									removalDelay: 100,
									type:'inline',
									closeBtnInside: false,
									closeOnBgClick: true,
									callbacks: {
										beforeOpen: function() {
											this.st.mainClass = this.st.el.attr('data-effect');
										}
									},
								});
							}
						}
					});
				} else {
					remove();
				}
			});
		}

		function inputCheckCity() {
			$(document).on('click', '.input-drop-item', function(e) {
				e.preventDefault();
				var $input = $(this);
				var id = $input.data('id');
				remove();
				$('.popup').html('<div class="main-carousel"></div>');
				
				$.ajax({
					url: `http://api.openweathermap.org/data/2.5/forecast?id=${id}&lang=ua&appid=${key}`,
					success: function (data) {
						getPopupWeatherInfo(data);
					}
				});
			});
		}

		function getPopupWeatherInfo(data) {
			// console.log(data);
			for(i = 0; i < data.list.length; i++) {
				$('.popup .main-carousel').append(
					`<div class="weather weather-width carousel-cell">
						<h2 class="city pop-city">${data.city.name}, ${data.city.country}</h2>
						<h2 class="pop-desk">${data.list[i].dt_txt}</h2>
						<h3 class="temp">${Math.floor(data.list[i].main.temp_max - 273)}°C</h3>
						<div class="weather-icon">
							<img src="./icons/${data.list[i].weather[0].icon}.png"/>
						</div>
						<div class="humidity">Humidity: ${data.list[i].main.humidity} %</div>
					<div class="wind">Wind speed: ${data.list[i].wind.speed} km/h</div>
					</div>`	
				);
			}
			initSlider();
		}

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
				return config;
			}
		}

		function initSlider() {
			$('.main-carousel').flickity({
				contain: false,
				groupCells: true,
				prevNextButtons: true,
				pageDots: false,
				draggable: true,
				wrapAround: false,
				selectedAttraction: 0.015,
				friction: 0.25
			});
		}

		function remove() {
			$('.input-drop-item').remove();
		}

		getTenCity();
		inputSearchCity();
		inputCheckCity();
	});
})(jQuery);