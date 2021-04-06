// var $tabsHeader = $('.tabs-header > div');

// $tabsHeader.each(function() {
// 	$('.js-tab-trigger').on('click', function(e) { 
// 		e.preventDefault();

// 		var $tabsName = $(this).data('tab');
// 		var $tab = $('.js-tab-content[data-tab="'+$tabsName+'"]');

// 		$(this).siblings().removeClass('active');
// 		$(this).addClass('active');
		
// 		$('.js-tab-content').removeClass('active');
// 		$tab.addClass('active');
		
// 	});
// });

var $tabs = $('.tabs');

$tabs.each(function() {
	$('.tabs-header > div').on('click', function(e) {
		e.preventDefault();

		var $tabsName = $(this).data('tab');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		
		var $tab = $('.js-tab-content[data-tab="'+$tabsName+'"]');
		$('.js-tab-content').removeClass('active');
		$tab.addClass('active');
	});
});