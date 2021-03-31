//====
// =======> 1
//====
var $btnShow = document.getElementsByClassName('button-show')[0];
$btnShow.addEventListener('click', function() {
	alert('HELLO!')
});


//====
// =======> 2
//====

var $btnShowInput = document.getElementsByClassName('button-alert-input')[0];
$btnShowInput.addEventListener('click', function() {
	let showTextInput = document.getElementsByClassName('input-alert')[0].value;
	alert(showTextInput);
});

//====
// =======> 3
//====

var $btnShowNum = document.getElementsByClassName('button-alert-num')[0];
$btnShowNum.addEventListener('click', function() {
	let $showNumInput = document.getElementsByClassName('input-alert-num')[0].value;
	alert($showNumInput ** 2);
});

//====
// =======> 4
//====

var $btnShowReverse = document.getElementsByClassName('button-reverse')[0];
$btnShowReverse.addEventListener('click', function() {
	let $input1 = document.getElementsByClassName('input-reverse1')[0].value;
	let $input2 = document.getElementsByClassName('input-reverse2')[0].value;
	document.getElementsByClassName('input-reverse2')[0].value = $input1;
	document.getElementsByClassName('input-reverse1')[0].value = $input2;
});

//====
// =======> 5
//====

var $btnNextText = document.getElementsByClassName('button-change-btn-text')[0];
$btnNextText.addEventListener('click', function() {
	document.getElementsByClassName('button-change-btn-text')[0].innerText = "Close Curtain";
});

//====
// =======> 6
//====

var $btnNextColor = document.getElementsByClassName('button-change-color')[0];
$btnNextColor.addEventListener('click', function() {
	document.getElementsByClassName('input-change-color')[0].style.background= "red";
});

//====
// =======> 7
//====

var $buttonLock = document.getElementsByClassName('button-blocked1')[0];
var $buttonUnlock = document.getElementsByClassName('button-blocked2')[0];
$buttonLock.addEventListener('click', function() {
	document.getElementsByClassName('input-blocked')[0].disabled = true;
});
$buttonUnlock.addEventListener('click', function() {
	document.getElementsByClassName('input-blocked')[0].disabled = false;
});

//====
// =======> 8
//====

var $btnShowHover = document.getElementsByClassName('button-show-hover')[0];
$btnShowHover.addEventListener('mouseenter', function() {
	alert('hello');
});

//====
// =======> 9
//====

var $btnShowDouble = document.getElementsByClassName('button-show-double')[0];
$btnShowDouble.addEventListener('dblclick', function() {
	alert('hello');
});

//====
// =======> 10
//====

var $btnShowImg = document.getElementsByClassName('button-show-img')[0];
$btnShowImg.addEventListener('click', function() {
	document.getElementsByClassName('main-img')[0].style.display = 'none';
});
$btnShowImg.addEventListener('click', function() {
	document.getElementsByClassName('main-img2')[0].style.display = 'block';
});

//====
// =======> 11
//====

var $ShowImgHover = document.getElementsByClassName('main-img-hover')[0];
$ShowImgHover.addEventListener('mouseover', function() {
	document.getElementsByClassName('main-img-hover')[0].style.display = 'none';
});
$ShowImgHover.addEventListener('mouseout', function() {
	document.getElementsByClassName('main-img-hover2')[0].style.display = 'block';
});



