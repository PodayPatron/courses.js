(function($) {
	$(document).ready(function() {
		var $select = $('select');
		var $selectBase = $('#base');
		var $selectTarget = $('#target');
		var $targetNumber = $('#targetNumber');
		var $baseNumber = $('#baseNumber');
		var key = '3bc6bce016100d72b8e0315f19c2d33f';

		function getCurrencies() {
			$.ajax({
				url: `http://apilayer.net/api/list?access_key=${key}`,
				success: function (data) {
					var arrKeys = data.currencies;

					for(let item in arrKeys) {
						$select.append( `<option value=${item}>${arrKeys[item]}</option>`)
					}
				}
			});
		}

		function getRates() {
			$.ajax({
				url: `http://api.currencylayer.com/live?access_key=${key}`,
				success: function (data) {
					var rates = data.quotes;
					let time = new Date(data.timestamp * 1000).toLocaleString();
					$('.time').text(time);
					$('.usd').append('1$ - ' + `${data.quotes.USDUAH.toLocaleString()}` + ' UAN');

					$(document).on('keyup', '#baseNumber', function() {
						$targetNumber.val($baseNumber.val() * rates['USD' + $selectTarget.val()] / rates['USD' + $selectBase.val()]);
					});

					$(document).on('keyup', '#targetNumber', function() {
						$baseNumber.val($targetNumber.val() * rates['USD' + $selectBase.val()] / rates['USD' + $selectTarget.val()]);
					});

					$(document).on('change', '#base', function() {
						$targetNumber.val($baseNumber.val() * rates['USD' + $selectTarget.val()] / rates['USD' + $selectBase.val()]);
					});

					$(document).on('change', '#target', function() {
						$baseNumber.val($targetNumber.val() * rates['USD' + $selectBase.val()] / rates['USD' + $selectTarget.val()]);
					});
				}
			});
		}

		getCurrencies();
		getRates();
	});
})(jQuery);