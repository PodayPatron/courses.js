
var $tabs = $('.tabs');

$tabs.each(function() {
	$(this).find('.tabs-header > div').on('click', function(e) {
		e.preventDefault();

		var $tabsName = $(this).data('tab');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		
		var $tab = $('.js-tab-content[data-tab="'+$tabsName+'"]');
		$('.js-tab-content').removeClass('active');
		$tab.addClass('active');
	});
});

// Acordion

var $accordion = $('.accordion');

$accordion.each(function() {
	$(this).on('click', function(e) {
		e.preventDefault();
		var $this = $(this);
		var $panel = $('.panel');

		if ($this.has('.active')) {
			$this.removeClass('active');
			$this.find('.panel').slideToggle();
			
		} else {
			$this.siblings().removeClass('active');
			$this.addClass('active');
			$this.slideUp();
		}
	});
});

	//Acodion 2
$(".accordion2").on("click", function(e) {
	e.preventDefault();
	var $this = $(this);

	if (!$this.hasClass("active")) {
		$(".panel2").slideUp();
		$(".accordion2").removeClass("active");
		$(".panel2").removeClass("active");
	}

	$this.toggleClass("active");
	$this.next().slideToggle();
});

//slider

var $sliderContainer = $('.slider');
var $slideGroup = $('.slide-group');
var $slideItem = $('.slide-item');
var $prevBtn = $('.prev');
var $nextBtn = $('.next');

var $slideHeight = $slideItem.height();
var slideWidth = $slideItem.width();
var slideCount = $slideItem.length;
var totalSlideWidth = slideCount * slideWidth;

$('.slide-item:last-child').prependTo($slideGroup);

function moveRight(){
	$slideGroup.animate({
	},  function(){
		$('.slide-item:last-child').prependTo($slideGroup);
		$slideGroup.css({ left: ''});
	})
}

function moveLeft(){
	$slideGroup.animate({
	},  function(){
		$('.slide-item:first-child').appendTo($slideGroup);
	$slideGroup.css({ left: ''});
	});
}

$prevBtn.on('click',function(e){
	e.preventDefault();
	moveRight();
});

$nextBtn.on('click',function(e){
	e.preventDefault();
	moveLeft();
});