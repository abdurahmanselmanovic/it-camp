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

// U fibonacijevom nizu cije vrednosti ne prelaze 4 miliona, pronaci sumu parnih elemenata.

// Fibonacijev niz je sastavljen na nacin da je element jednak zbiru prethodna dva elementa.

const secondTask = () => {
	const niz = [1, 2];
	let i = 2;
	while (niz[i - 2] + niz[i - 1] <= 4000000) {
		niz.push(niz[i - 2] + niz[i - 1]);
		i++;
	}
	console.log(niz);
	const sumaParnih = niz
		.filter((element) => {
			return element % 2 === 0;
		})
		.reduce((prev, curr) => {
			return prev + curr;
		});
	return sumaParnih;
};
console.log(secondTask());
