//  2. Zadatak
// Complete the code for the squareList function using any combination
// of map(), filter(), and reduce(). The function should return a new array
//  containing the squares of only the positive integers
//  (decimal numbers are not integers) when an array of real numbers is passed to it.
//   An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

const niz = [-3, 4.8, 5, 3, -3.2];

function squareList(arr) {
	const filtered = arr
		.filter(function (number) {
			return number > 0 && Number.isInteger(number); // && number % 1 === 0;
		})
		.map(function (element) {
			return element * element;
		});
	return filtered;
}

console.log(squareList(niz));

// Number.isInteger metoda vraca boolean u zavisnosti od toga dali je argument date metode ceo broj ili nije.
