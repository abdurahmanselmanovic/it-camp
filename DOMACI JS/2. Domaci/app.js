// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 (ukljucuji oba) koji su deljivi sa 5.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.
// 1. ZADATAK
// let x = 1;
// for (x; x <= 20; x++) {
// 	if (x % 2 === 1) {
// 		console.log(x);
// 	}
// }
// 2 NACIN
// let y = 1;
// for (y; y <= 20; y++) {
// 	if (y % 2 !== 0) {
// 		console.log(y);
// 	}
// }
// 2. ZADATAK
// let x = 50;
// for (x; x <= 100; x++) {
// 	if (x % 5 === 0) {
// 		console.log(x);
// 	}
// }
// 3. ZADATAK
// let x = 6;
// for (x; x <= 14; x++) {
// 	let y = 2 * x;
// 	console.log(y);
// }
// 4. ZADATAK
// var sum = 0;
// for (var x = 10; x <= 20; x++) {
// 	if (x % 2 === 1) {
// 		sum += x;
// 	}
// }
// console.log("Suma neparnih brojeva u opsegu od 10 do 20 je " + sum);

let suma = 0;
for (let i = 11; i <= 20; i += 2) {
	suma += i;
}
console.log(suma);
