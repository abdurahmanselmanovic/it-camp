// Prebrojati i brojeve deljive sa 5 u intervalu od 1 do n

let x = 1;
let n = Number(prompt("Unesite broj"));

let suma = 0;

let brojDeljivih = 0;
if (isNaN(n) || n < 1) {
	console.log("niste uneli prirodan broj");
} else {
	for (x; x <= n; x++) {
		if (x % 5 === 0) {
			suma += x;
			brojDeljivih += 1;
		}
	}
	console.log(
		"Broj deljivih brojeva od 1 do " + n + " sa 5 je: " + brojDeljivih + "."
	);
	console.log("Suma deljivih brojeva sa 5 je: " + suma);
}
