// 1
console.log('==Task 1==');

function strToArray(param) {
	return param.split();
}

console.log(strToArray('Lorem ipsum dolor sit amet consectetur'));

// 2
console.log('==Task 2==');

function countLenght(param) {
	return param.length;
}

console.log(countLenght('Lorem ipsum dolor sit amet consectetur'));

// 3
console.log('==Task 3==');

function symbReplace(string) {
	return string.replace(/ /g, '-');
}

console.log(symbReplace('Lorem ipsum dolor sit amet consectetur'));

// 4
console.log('==Task 4==');

function FirstBigWord(string) {
	let array = string.split(' ');
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
	}

	return array.join(' ');
}

console.log(FirstBigWord('Lorem ipsum dolor sit amet consectetur'));

// 5 
console.log('==Task 5==');

function valueCompare(string1, string2) {
	return string1.toUpperCase === string2.toUpperCase;
}

console.log(valueCompare('Lorem Lpsum Dolor Sit Amet Consectetur', 'lorem ipsum dolor sit amet consectetur'));

// 6
console.log('==Task 6==');

function searchingString(string, searchWord) {
	return string.toUpperCase().indexOf(searchWord.toUpperCase());
}

console.log(searchingString('Lorem Lpsum Dolor Sit Amet Consectetur', 'Lorem'));

// 7
console.log('==Task 7==');

function camelize(string) {
	let array = string.split(' ');
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
	}

	return array.join(' ').charAt(0).toLowerCase() + array.join('').slice(1);
}

console.log(camelize('Lorem dolor sit amet consectetur'));

// 8
console.log('==Task 8==');

function splitSnake(param) {
	return param.replace(/ /g, '_');
}

console.log(splitSnake('Lorem dolor sit amet consectetur'));

// 9 
console.log('==Task 9==');

var stringRepeat = function (mainWord, stringNumRepeat) {
	for (let i = 0; i < stringNumRepeat; i++) {
		console.log(mainWord);
	}
}

stringRepeat('String For Repeat', 9);

// 10
console.log('==Task 10==');

function wordsToSymbol(string, symb = '-') {
	return string.substring(0, string.indexOf(symb))
}

console.log(wordsToSymbol('Lorem ipsum - dolor sit amet a consectetur'));

// 11
console.log('==Task 11==');

function returnArrays(param, num) {
	let result = [];
	for (let i = 0; i < param.length; i += num) {
		result.push(param.substr(i, num));
	}

	return result;
}

console.log(returnArrays('Loreme', 3));

// 12 
console.log('==Task 12==');

function countOnlyWord(string) {
	return string.replace(/ /g, '').length;
}

console.log(countOnlyWord('Lorem ipsum ipsum'));

// 13
console.log('==Task 13==');

function stringArray(string) {
	return string.split('').sort().join();
}

console.log(stringArray('sasha'));

// 14
console.log('==Task 14==');

function removeDuplicate(str) {
	str = str.split(',');
	var result = [];

	for(var i = 0; i < str.length ; i++) {
		if(-1 === result.indexOf(str[i])) {
			result.push(str[i]);
		}
	}
	
	return result.join(',');
}

console.log(removeDuplicate('вишня, груша, слива, груша'));

// 15 
console.log('==task 15==');


function capitalizeLowerCase(string) {
	let array = string.split(' ');
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toLowerCase() + array[i].slice(1).toUpperCase();
	}
	
	return array.join(' ');
}

console.log(capitalizeLowerCase("PODAY PATRON"));

// 16
console.log('==Task 16==');

function typeOfParams(param) {
	return typeof(param);
}

console.log(typeOfParams('Hello'));

// 17
console.log('==task 17==');

function longestString (someArray) {
	
}

console.log(longestString(''));

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

