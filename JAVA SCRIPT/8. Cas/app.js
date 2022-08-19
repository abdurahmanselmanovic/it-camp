// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n

let x = 1;
let n = Number(prompt("Unesite broj"));

let suma = 0;

let brojDeljivih = 0;

for (x; x <= n; x++) {
	if (x % 5 === 0) {
		suma += n;
		brojDeljivih += 1;
	}
}
console.log(suma);
console.log(brojDeljivih);
