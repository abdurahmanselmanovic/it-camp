// 1.
// From array of numbers, choose even double numbers, and compute
// the sum using array filter, map and reduce methods.

// 2.
// iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

const brojevi = [12, 20, 13, 27, 18, 32, 2];
// 1. zadatak
const myfunction = (arr) => {
	const noviniz = arr
		.filter((element) => {
			return element % 2 === 0;
		})
		.map((element) => {
			return element * 2;
		})
		.reduce((prev, curr) => {
			return prev + curr;
		});
	return noviniz;
};

console.log(myfunction(brojevi));
// 2. zadatak
const myfunction2 = (arr2) => {
	const niz = arr2
		.filter((element) => {
			return element % 2 === 0;
		})
		.reduce((prev, curr) => {
			return prev + curr;
		});
	return niz;
};
console.log(myfunction2(brojevi));
