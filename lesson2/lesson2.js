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
	$ShowImgHover.src = './2.jpg';
});
$ShowImgHover.addEventListener('mouseout', function() {
	$ShowImgHover.src = './1.png';
});


//====
// =======> 12
//====

var $btnShowInput = document.getElementsByClassName('button-show-input')[0];
var $btnClose = document.getElementsByClassName('button-close-input')[0];
$btnClose.addEventListener('click', function() {
	document.getElementsByClassName('input-show')[0].style.display = 'none';
});
$btnShowInput.addEventListener('click', function() {
	document.getElementsByClassName('input-show')[0].style.display = 'block';
});

//====
// =======> 13
//====

var $btnChangeStyle = document.getElementsByClassName('button-change-style')[0];
$btnChangeStyle.addEventListener('click', function() {
	document.getElementsByClassName('input-size')[0].style.width = '600px';
	document.getElementsByClassName('input-size')[0].style.color = 'red';
});

//====
// =======> 14
//====

var clicks = 0;
var $btnChangeCount = document.getElementsByClassName('button-counter')[0];
$btnChangeCount.addEventListener('click', function() {
        clicks++;
        document.getElementsByClassName('button-counter')[0].innerHTML = clicks;
});

//====
// =======> 15
//====

var $btnShowClass = document.getElementsByClassName('button-all-class')[0];
$btnShowClass.addEventListener('click', function() {
	$btnShowClass.innerHTML = document.getElementsByClassName('input-all-class')[0].className ;
});

//====
// =======> 16
//====

var $contactBtn = document.getElementsByClassName('contact-btn')[0];
$contactBtn.addEventListener('click', function() {
	let checkInp = document.getElementsByClassName('inp-name')[0].value;
	let checkInp2 = document.getElementsByClassName('inp-name')[1].value;
	let checkInp3 = document.getElementsByClassName('inp-name')[2].value;
	let checkInp4 = document.getElementsByClassName('inp-name')[3].value;
	let checkInp5 = document.getElementsByClassName('inp-name')[4].value;


	alert('імя: ' + checkInp + '\nфамілія: ' + checkInp2 + '\nрік нароження: ' + checkInp3+ '\nномер тел: ' + checkInp4 + '\nмісце проживаня: ' + checkInp5 );
});

//====
// =======> 17
//====

var $checkPass = document.getElementsByClassName('button-check-pass')[0];
var $inpTextPass = document.getElementsByClassName('input-pass')[0];
var $inpTextPass2 = document.getElementsByClassName('input-pass2')[0];
$checkPass.addEventListener('click', function() {

	if ($inpTextPass.value !== $inpTextPass2.value) {
		alert('Eror');
	} else {
		alert('Вы зареестрованы');
	}
});



//====
// =======> 19
//====

var $btnOpenPop = document.getElementsByClassName('button-open-pop')[0];
var $btnPopClose = document.getElementsByClassName('popup-close')[0];
$btnOpenPop.addEventListener('click', function() {
	document.getElementsByClassName('pop-wrap')[0].style.display = 'block';
});
$btnPopClose.addEventListener('click', function() {
	document.getElementsByClassName('pop-wrap')[0].style.display = 'none';
});
