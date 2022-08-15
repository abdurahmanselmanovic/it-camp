// DOMACI
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravogaonika ako su uneti brojevi razliciti.

// Korisnik unosi dva realna broja x i y napisati program koji izracunava i stampa kolicnik x/y ako je broj y != 0,
// a inace ispisuje poruku deljenje nemoguce.

// const a = Number(prompt("Unesite prvi broj"));
// const b = Number(prompt("Unesite drugi broj"));

// if (a === b) {
// 	console.log("Povrsina kvadrata je", a * a);
// } else if (a !== b) {
// 	console.log("Povrsina pravougaonika je", a * b);
// }

// const x = Number(prompt("Unesite x"));
// const y = Number(prompt("Unesite y"));

// if (y !== 0) {
// 	console.log(x / y);
// } else if (y === 0) {
// 	console.log("Deljenje nije moguce");
// }

const broj1 = Number(prompt("Unesite prvi broj: "));
const broj2 = Number(prompt("Unesite drugi broj: "));
if (isNaN(broj1) || isNaN(broj2)) {
	console.log("Niste uneli korektne vrednosti za brojeve.");
} else if (broj1 === broj2) {
	console.log("Povrsina kvadrata na osnovu unetih brojeva je:" + broj1 * broj2);
} else {
	console.log(
		"Povrsina pravougaonika na osnovu unetih brojeva je: " + broj1 * broj2
	);
}
