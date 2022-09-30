const myFunction = () => {
	let n = +prompt("unesite prvi broj opsega");
	let m = +prompt("unesite drugi broj opsega");
	let suma = 0;
	let duzina = n.length > m.length ? n.length : m.length;
	if (isNaN(n) || isNaN(m)) {
		return "Uneli ste pogresan niz karaktera";
	} else if (n >= m) {
		return "Drugi broj mora biti veci od prvog";
	} else {
		for (let i = n; i <= m; i++) {
			if (i % 2 === 0) {
				suma += i ** 2;
			}
		}
	}
	return suma;
};

console.log(myFunction());
