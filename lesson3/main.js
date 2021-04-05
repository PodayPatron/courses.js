var $tabs = $('.shop-tabs-menu > li');
var $row = $('.data-g');

$tabs.click(function() {
	btn = $(this).data('btn');
	$tabs.removeClass('active');
	$(this).addClass('active');

	$row.each(function() {
		$(this).removeClass('active');

		
		if($(this).data('categ') === btn) {
			$(this).addClass('active');
			
		}
		
	});
});

//Acordeon
var $head = $('.accordion-item-header')
var accorBody = $('.accordion-item-body');

$head.each(function() {

	$(this).click(function() {
		
	})
});