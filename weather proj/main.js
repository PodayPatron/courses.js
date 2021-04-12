(function($) {
	$(document).ready(function() {
		const key = 'a5ca0d8b861498009805494e3cfe3d61';
		const kelvin = 273;
		var fahren = $('.celsius').val();

		function setPosition(position){
			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;
			getWeather(latitude, longitude);
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
								<p class="celsius">${Math.floor(data.main.temp - kelvin)}°<span>C</span></p>
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

		function toFuhrengeit() {
			$(document).on('click', '.temperature-value', function() {
				var fuhrenNum = function celsiusToFahrenheit(temp){
					return (temp * 9/5) + 32;
				}
				var fuhrenResult = fuhrenNum(fahren);
	
				if($(this).find('.celsius')){
					$(this).text(' ').append(
						`<p class="fahrengeit">${fuhrenResult}°<span>F</span></p>`
					);
				} 
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
									<p class="celsius">${Math.floor(data.main.temp - kelvin)}°<span>C</span></p>
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

		toFuhrengeit();
		btnSearchCity();
	});
})(jQuery);
