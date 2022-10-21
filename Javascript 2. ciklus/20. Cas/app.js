// JS Sort metode
// sort() metoda vrsi sortiranje niza abecedno.

const grupa = [
	"Talib",
	"Ahmed",
	"Mejra",
	"Musa",
	"Amina",
	"Amina",
	"Abdurahman",
];
grupa.sort();
console.log(grupa);

// Za obrnutno sortiranje se korisiti metoda reverse()
grupa.reverse();
console.log(grupa);
// reverse() okrece niz od poslednjeg ka prvom elementu.
// Ako zelimo da elementi budu poredjani (z-a), onda treba primeniti
// sort() metodu, pa onda reverse()
let brojevi = [-56, 85, 61, -32, 78, 104];

// Sort metoda ne radi dobar posao kod brojeva, samim tim moramo kao argument
// staviti neku funkciju koja ce nam poredjati brojeve od najmanjeg ka najvecem,
// ili obratno.
// brojevi.sort();
console.log(brojevi);

// fora:    anonimus function
brojevi.sort(function (a, b) {
	return a - b;
});
console.log(brojevi);

// sortiranje niza od veceg ka manjem broju ide na slican nacin:

brojevi.sort((a, b) => {
	return b - a;
});
console.log(brojevi);

// Random sortiranje niza:
function random(a, b) {
	return 0.5 - Math.random();
}
brojevi.sort(random);
console.log(brojevi);

// postoji nekoliko nacina da dobijemo najveci (najmanji) element niza.
// 1. Sortiranjem niza, zatim pristupamo najvecem, odnosno najmanjem elementu.
brojevi = [85, 61, 104, -32, -56, 78];
// Dobijanje minimuma:
let minimum = (arr) => {
	arr.sort((a, b) => a - b);
	return arr[0];
};
console.log(minimum(brojevi));
// dobijanje maximuma
let maximum = (arr) => {
	arr.sort((a, b) => b - a);
	return arr[0];
};
console.log(maximum(brojevi));

// 2. primenom math.max.apply() (math.min.apply())

// Dobijanje minimuma:

minimum = Math.min.apply(null, brojevi);

console.log(minimum);

// Dobijanje maximuma:
maximum = Math.max.apply(null, brojevi);
console.log(maximum);

// Pravljenje funkcije koja nam vraca minimum (maximum):

// const myfunction = (arr) => {
// 	let minimum = Number.POSITIVE_INFINITY;
// 	for (number of arr) {
// 		if (number < minimum) {
// 			minimum = number;
// 		}
// 	}
// 	return minimum;
// };
// console.log(myfunction([12, -32, 32, 13, 52, 32, 17]));

const myfunction = (arr) => {
	let maximum = Number.NEGATIVE_INFINITY;
	for (number of arr) {
		if (number > maximum) {
			maximum = number;
		}
	}
	return maximum;
};
console.log(myfunction([12, -32, 32, 13, 52, 32, 17]));
