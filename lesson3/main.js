var $tabsHeader = $('.tabs-header > div');

$tabsHeader.each(function() {
	$('.js-tab-trigger').on('click', function(e) { 
		e.preventDefault();

		var $tabsName = $(this).data('tab');
		var $tab = $('.js-tab-content[data-tab="'+$tabsName+'"]');

		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		
		$('.js-tab-content').removeClass('active');
		$tab.addClass('active');
		
	});
});