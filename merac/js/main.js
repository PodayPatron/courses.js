var $sliders = $('.swiper-container');

$sliders.each(function() {
	
	const swiper = new Swiper($(this)[0], {
		loop: true,
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
	console.log($(this));
});
