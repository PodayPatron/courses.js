(function($) {
	$(document).ready(function() {

		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/users',
			dataType: 'json',
			success: function (data) {
				console.log(data);
				
				data.forEach(function(el) {
					var userName = el.name;
					var comName = el.company.name ;
					$('.card-wrapper').append(
						`<div class="card">
						<div class="img-wrap">
							<img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" alt=""> 
						</div>
						
						<h4>${userName}</h4>
						<h6>${comName}</h6>
						
						<div class="cta-wrapper">
							<div class="cta">
								<p class="qqq">Posts</p>
							</div>
							<div class="cta">
								<p class="qqq">Alboms</p>
							</div>
							<div class="cta">
								<p class="qqq">Todos</p>
							</div>
						</div>
					</div>`
					);
				});
				
			},
			error: function() {
				alert('There was some error performing the AJAX call!');
			}
		});

	});
   })(jQuery);

 