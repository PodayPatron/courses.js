(function($) {
	$(document).ready(function() {

		function getCards() {
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/users',
				dataType: 'json',
				success: function (data) {
					data.forEach(function(el) {
						$('.card-wrapper').append(
							`<div data-id="${el.id}" class="card">
							<div class="img-wrap">
								<img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" alt=""> 
							</div>
							
							<h4>${el.name}</h4>
							<h6>${el.company.name}</h6>
							
							<div class="cta-wrapper">
								<div class="cta posts">
									<p class="qqq">Posts</p>
								</div>
								<div class="cta albums">
									<p class="qqq ">Albums</p>
								</div>
								<div class="cta todos">
									<p class="qqq">Todos</p>
								</div>
							</div>
						</div>`
						);
					});
					$('.cta-wrapper').first().find('.posts').trigger('click');
					
				},
				error: function() {
					alert('There was some error performing the AJAX call!');
				}
			});
		}

		function getPosts() {
			$(document).on('click', '.posts', function(e) {
				e.preventDefault();
				var $thisCard = $(this).parents('.card');
				var userId = $thisCard.data('id');
				var $this = $(this);

				$('.active').removeClass('active');
				$this.siblings().removeClass('active');
				$this.addClass('active');
				removeContent ();
		
				$.ajax({
					url: 'https://jsonplaceholder.typicode.com/posts?userId=' + userId,
					dataType: 'json',
					success: function (data) {
						data.forEach(function(el) {
							$('.user-info .row').append(
								`<div class="post col-4">
									<h5 class="id">User Id ${userId}</h5>
									<h4 class="link-albums">${el.title}</h4>
									<h6>${el.body}</h6>
									<a class="link-view" href="#">View Coments</a>
								</div>`
							);
						});
					},
					error: function() {
						alert('There was some error performing the AJAX call!');
					}
				});
			});
		}

		function getAlbums() {
			$(document).on('click', '.albums', function(e) {
				e.preventDefault();
				var $thisCard = $(this).parents('.card');
				var userId = $thisCard.data('id');	
				var $this = $(this);
			
				$('.active').removeClass('active');
				$this.siblings().removeClass('active');
				$this.addClass('active');
				removeContent ();
		
				$.ajax({
					url: 'https://jsonplaceholder.typicode.com/albums',
					dataType: 'json',
					success: function (data) {
						data.forEach(function(el) {
							$('.user-info .row').append(
								`<div class="post col-4">
									<h5 class="id">User Id ${userId}</h5>
									<h4 class="link-title">${el.title}</h4>
									<a class="link-albums" href="#">View Photo</a>
								</div>`
							);
						});

					},
					error: function() {
						alert('There was some error performing the AJAX call!');
					}
				});
			});
		}

		function getToDo() {
			$(document).on('click', '.todos', function(e) {
				e.preventDefault();
				var $thisCard = $(this).parents('.card');
				var userId = $thisCard.data('id');	
				var $this = $(this);			
			
				$('.active').removeClass('active');
				$this.siblings().removeClass('active');
				$this.addClass('active');
				removeContent ();
		
				$.ajax({
					url: 'https://jsonplaceholder.typicode.com/todos',
					dataType: 'json',
					success: function (data) {
						data.forEach(function(el) {
							$('.user-info .row').append(
								`<div class="post col-4">
									<h5 class="id">User Id ${userId}</h5>
									<h4 class="link-title">${el.title}</h4>
									<a class="link-delete" href="#">Delete</a>
								</div>`
							);
						});

					},
					error: function() {
						alert('There was some error performing the AJAX call!');
					}
				});
			});
		}

		function del() {
			$(document).on('click','.link-delete', function(e) {
				e.preventDefault();
				$(this).parents('.post').remove();
			});
		}

		del();
		getCards();
		getPosts();
		getAlbums();
		getToDo();
		function removeContent () {
			$('.post').removeClass('active');
			$('.post').remove();
		}
	});
})(jQuery);
