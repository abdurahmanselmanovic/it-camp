// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 (ukljucuji oba) koji su deljivi sa 5.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.

// let x = 1;
// for (x; x <= 20; x++) {
// 	if (x % 2 === 1) {
// 		console.log(x);
// 	}
// }

// let y = 1;
// for (y; y <= 20; y++) {
// 	if (y % 2 !== 0) {
// 		console.log(y);
// 	}
// }

// let x = 50;
// for (x; x <= 100; x++) {
// 	if (x % 5 === 0) {
// 		console.log(x);
// 	}
// }

// let x = 6;
// for (x; x <= 14; x++) {
// 	let y = 2 * x;
// 	console.log(y);
// }

// let x = 10;
// for (x; x < 21; x++) {
// 	if (x % 2 === 1) {
// 	}
// }

// let x = 10;
// for (x; x <= 20; x++) {
// 	if (x % 2 === 1) {

// 	}
// }

var i = 10;
var sum = 0;
if (i % 2 == 0) i++;
while (i < 20) {
	sum += i;
	i += 2;
}
console.log(i);
