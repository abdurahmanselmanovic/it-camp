// Prebrojati brojeve deljive sa 5 u intervalu od 1 do n

x = 1;
n = Number(prompt("Unesite broj"));

suma = 0;

for (x; x <= n; x++) {
	if (x % 5 === 0) {
		suma += n;
	}
}
console.log(suma);
