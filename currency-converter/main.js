(function($) {
	$(document).ready(function() {
		var select = $('select');
		var input = $('input');
		var key = '2d46c190824f3aa154b6fedb0a718e26';

		function getCurrencies() {
			$.ajax({
				url: `http://apilayer.net/api/list?access_key=${key}`,
				success: function (data) {
					var arrKeys = data.currencies;
					console.log(arrKeys);

					for(let item in arrKeys) {
						select.append( `<option value=${item}>${item}</option>`)
					}
				}
			});
		}


		getCurrencies();
	});
   })(jQuery);