// Broj palindrom se cita isto sa obe strane. Najveci palindrom napravljen od proizvoda dva
//  dvocifrena broja je 9009 = 91 x 99.
//  Pronaci najveci palindrom napravljen od proizvoda dva trocifrena broja.
//najveci palindrom
// 913 * 993
najveciPalindrom = 0;
for (let i = 999; i >= 100; i--) {
	for (let x = 999; x >= 100; x--) {
		const proizvod = i * x;
		let okrenutiProizvod = proizvod.toString().split("").reverse().join("");
		if (proizvod == okrenutiProizvod) {
			najveciPalindrom = Math.max(najveciPalindrom, proizvod);
		}
	}
}

console.log(najveciPalindrom);
