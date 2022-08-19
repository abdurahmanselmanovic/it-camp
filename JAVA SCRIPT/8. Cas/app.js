// Prebrojati i brojeve deljive sa 5 u intervalu od 1 do n

// let x = 1;
// let n = Number(prompt("Unesite broj"));

// let suma = 0;

// let brojDeljivih = 0;
// if (isNaN(n) || n < 1) {
// 	console.log("niste uneli prirodan broj");
// } else {
// 	for (x; x <= n; x++) {
// 		if (x % 5 === 0) {
// 			suma += x;
// 			brojDeljivih += 1;
// 		}
// 	}
// 	console.log(
// 		"Broj deljivih brojeva od 1 do " + n + " sa 5 je: " + brojDeljivih + "."
// 	);
// 	console.log("Suma deljivih brojeva sa 5 je: " + suma);
// }

// Neka se izvrsi iteracija od broja 99 do -99. Ispisati zbir broja deljivog sa 4 i broja 14.

// for (let i = 99; i >= -99; i--) {
// 	if (i % 4 === 0) {
// 		console.log(i);
// 	}
// }

// Izracunati aritmetikcu sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17
let brojBrojeva = 0;
let zbirBrojeva = 0;
for (let i = 3; i < 18; i++) {
	if (i % 3 === 0) {
		brojBrojeva += 1;
		zbirBrojeva += i;
	}
}

aritSredina = zbirBrojeva / brojBrojeva;
console.log("Aritmetika sredina broejva je: " + aritSredina);
