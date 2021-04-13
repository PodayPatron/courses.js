(function($) {
	$(document).ready(function() {
		var key = 'a5ca0d8b861498009805494e3cfe3d61';

		function setPosition(position){
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;
			getWeather(latitude, longitude);
			tempBtn(latitude, longitude);
		}
		navigator.geolocation.getCurrentPosition(setPosition);

		function getWeather(latitude, longitude){
			$.ajax({
				url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ua&appid=${key}`,
				success: function (data) {
					$('.weather-card').remove();
					$('.wrapper-card').append(
					`<div class="weather-card">
						<div class="app-title">
							<p>Weather</p>
						</div>
							<div class="notification"></div>
						<div class="weather-container">
							<div class="weather-icon">
								<img src="./icons/${data.weather[0].icon}.png"/>
							</div>
							<div class="temperature-value">
								<p class=".celsius">${Math.floor(data.main.temp - 273)}°<span>C</span></p>
							</div>
							<div class="temperature-description">
								<p>${data.weather[0].description}</p>
							</div>
							<div class="location">
								${data.name}, ${data.sys.country}
							</div>
						</div>
					</div>`);
				}
			});
		}

		function tempBtn(latitude, longitude) {
			function celsiusToFahrenheit(temperature){
				return (temperature * 9/5) + 32;
			}

			$(document).on('click', '.temperature-value', function(){
				var tempElement = $('.temperature-value p');
				
				$.ajax({
					url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ua&appid=${key}`,
					success: function (data) {

						if($('.temperature-value p').hasClass('.celsius')){
							let fahrenheit = celsiusToFahrenheit(Math.floor(data.main.temp - 273));
							fahrenheit = Math.floor(fahrenheit);
							
							tempElement.removeClass('.celsius');
							tempElement.html(`${fahrenheit}°<span>F</span>`);
							tempElement.addClass(".fahrenheit");
						}else{
							tempElement.removeClass(".fahrenheit");
							tempElement.html(`${Math.floor(data.main.temp - 273)}°<span>C</span>`);
							tempElement.addClass(".celsius");
						}
					}
				});
			});
		}


		function btnSearchCity() {
			$(document).on('click', '.search-btn', function(e) {
				e.preventDefault();
				var valueInput = $('.search-input').val();
	
				$.ajax({
					url: `http://api.openweathermap.org/data/2.5/weather?q=${valueInput}&lang=ua&appid=${key}`,
					success: function (data) {
						$('.weather-card').remove();
						$('.wrapper-card').append(
						`<div class="weather-card">
							<div class="app-title">
								<p>Weather</p>
							</div>
								<div class="notification"></div>
							<div class="weather-container">
								<div class="weather-icon">
									<img src="./icons/${data.weather[0].icon}.png"/>
								</div>
								<div class="temperature-value">
									<p class="celsius">${Math.floor(data.main.temp - 273)}°<span>C</span></p>
								</div>
								<div class="temperature-description">
									<p>${data.weather[0].description}</p>
								</div>
								<div class="location">
									${data.name}, ${data.sys.country}
								</div>
							</div>
						</div>`);
					}
				});
			});
		}

		function inputSearch() {
			$(document).on('keyup', '.search-input', function(e) {
				e.preventDefault();
				var $searchInput = $('.search-input').val();

				if(3 <=  $searchInput.length) {
					$.ajax({
						url: `http://api.openweathermap.org/data/2.5/find?q=${$searchInput}&lang=ua&appid=${key}`,
						success: function (data) {
							console.log(data);
						}
					});
				}
			});
		}

		btnSearchCity();
		inputSearch();
	});
})(jQuery);
