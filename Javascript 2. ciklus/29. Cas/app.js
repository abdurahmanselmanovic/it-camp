// Napraviti glavnu funkciju koja ispisuje poruku da se radi o glavnoj funkciji, ali ispod toga neka se izvrsi pozivanje callback funkcije koja ima zadatak da izracuna aritmeticku sredinnu 3 broja koji predstavljaju argumente te callback funkcije.

function main2(func) {
	console.log("ovo je kod koji se izvrsava unutar galvne funkcije.");
	func(1, 3, 3);
}

function avereageValue(arg1, arg2, arg3) {
	let average = +((arg1 + arg2 + arg3) / 3).toFixed(2);
	console.log(`Aritmeticka sredina datih brojeva je ${average}`);
}

console.log(main2(avereageValue));
