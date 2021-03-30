// 1
console.log('==Task 1==');

function strToArray(param) {

	return param.split();
}

var result = strToArray('Lorem ipsum dolor sit amet consectetur');
console.log(result);

// 2
console.log('==Task 2==');

function strTolenght(param) {

	return param.length;
}

var resultLength = strTolenght('Lorem ipsum dolor sit amet consectetur');
console.log(resultLength);


// 3
console.log('==Task 3==');


function strWithLine(stringToSplit, separator) {

	var arrayOfStrings = stringToSplit.split(separator);
	console.log(arrayOfStrings.join('/'));
}

var tempestString = 'Lorem ipsum dolor sit amet consectetur';
var space = ' ';
strWithLine(tempestString, space);

// 4
console.log('==Task 4==');

function ucFirstAllWords(str) {

    var pieces = str.split(" ");
    for ( var i = 0; i < pieces.length; i++ ) {

        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }

    return pieces.join(" ");
}

console.log(ucFirstAllWords('Lorem ipsum dolor sit amet consectetur'));

// 5 
console.log('==Task 5==');

function valueCompare(param1, param2) {
	
	return param1.toUpperCase == param2.toUpperCase;
}

let firstStr = 'Lorem Lpsum Dolor Sit Amet Consectetur'
let secondStr = 'lorem ipsum dolor sit amet consectetur'

console.log(valueCompare(firstStr, secondStr));

// 6
console.log('==Task 6==');

let strForSearch = 'Lorem Lpsum Dolor Sit Amet Consectetur'
let word = 'Lorem'

function searchingWord(param1, searchWord) {

	return param1.toUpperCase().indexOf(searchWord.toUpperCase());
}

console.log(searchingWord(strForSearch, word));



// 7
console.log('==Task 7==');


function camelize(str) {
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
		return index === 0 ? word.toLowerCase() : word.toUpperCase();
	}).replace(/\s+/g, '');
}

console.log(camelize("Lorem  dolor sit amet consectetur"));

// 8
console.log('==Task 8==');

function splitSnake(stringToSnake, param) {
	var arrayOfSnake = stringToSnake.split(param);
	return arrayOfSnake.join('_');
}

var tempSnake = 'Lorem ipsum dolor sit amet consectetur';
var space = ' ';

console.log(splitSnake(tempSnake, space));

// 9 
console.log('==Task 9==');

let mainWord = 'Hooligan'
let wordNum = 9 ;

var wordRepeat = function (mainWord) {
	
	for ( param = 0; param < wordNum; param++) {
		console.log(mainWord);
	}
}

wordRepeat(mainWord);

// 10
console.log('==Task 10==');

var anyString = 'Lorem ipsum - dolor sit amet a consectetur';
var symb = '-'

function wordsToSymbol(param, symbb) {

	console.log(param.substring(0, param.indexOf(symb)));
}

wordsToSymbol(anyString, symb);

// 11
console.log('==Task 11==');

var anyStringForLesson11 = 'Loreme'

function returnArrays(param) {
	
	let result11 = param.split('').length;

	let num1 = 0,
	    num2 = 3;

	for (let i = num2; i <= result11; i += num2) {
		console.log(anyStringForLesson11.substr(num1, num2));
		num1 = i;
	}

	if (result11 > num1) {
		console.log(anyStringForLesson11.substr(num1, num2));
	}
}

returnArrays(anyStringForLesson11);

// 12 
console.log('==Task 12==');


function strWithLine2(stringToSplit2, separator) {

	var arrayOfStrings2 = stringToSplit2.split(separator);
	console.log(arrayOfStrings2.join('').length);
}

var tempestString2 = 'Lorem ipsum dolor sit amet consectetur';
var space2 = ' ';
strWithLine2(tempestString2, space2);

// 13
console.log('==Task 13==');

function stringArray(alfawit) {
	return alfawit.sort()
}

console.log(stringArray(['Голубая', 'Горбатая', 'Белуга']));

// 14
console.log('==Task 14==');

var str = "вишня, груша, слива, груша";

function removeDuplicate(str) {
  str = str.split(",");
  var result = [];

  for(var i = 0; i < str.length ; i++) {

		if(result.indexOf(str[i]) == -1) result.push(str[i]);

		}
	return result = result.join(", ");
}

console.log(removeDuplicate(str));

// 15 
console.log('==task 15==');

var strLower = "PODAY PATRON";  

function capitalizeLowerCase(str) {

	return str.replace(/(^|\s)\S/g, function(a) {return a.toLowerCase()})

}

console.log(capitalizeLowerCase(strLower));

// 16
console.log('==Task 16==');

var type = 'str'

function valueType(param) {

	return typeof(param);
}

console.log(valueType(type));

// 17
console.log('==task 17==');

const array1 = ['lorem', 'loreeem', 'lor', 'loooooorrremmmm', 'lora'];

function longestString (someArray) {
    return someArray.sort(function (a, b) { 
			return b.length - a.length; 
		})[0];
}

console.log(longestString(array1));

// 18
console.log('Task 18');

function findLongestWord (input) {
	return input
		.split(/\W+/)
		.reduce(
		function (longest, word) {
			return word.length > longest.length
				? word
				: longest;
		},'');
}
  
  console.log(findLongestWord('aaa, aromatDUSHI, HALA MADRID, lormDoremAokozay'));


// 19
console.log('task 19');

