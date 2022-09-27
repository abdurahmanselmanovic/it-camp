// const myFunction = () => {
// 	const recenica = prompt("Unesite neku recenicu");
// 	let novaRecenica = "";
// 	let duzina = recenica.length;
// 	for (let i = 0; i < recenica.length; i++) {
// 		if (duzina % 2 === 1 && i === duzina - 1) {
// 			novaRecenica += recenica[i];
// 		} else if (i % 2 === 0) {
// 			novaRecenica += recenica[i + 1];
// 		} else if (i % 2 === 1) {
// 			novaRecenica += recenica[i - 1];
// 		}
// 	}
// 	return novaRecenica;
// };

// console.log(myFunction());

const myFunction = () => {
	let a = prompt("Unesite prvi string");
	let b = prompt("Unesite drugi string");
	let c = "";
	// let duzina = 0;
	// if (a.length > b.length) {
	// 	duzina = a.length;
	// } else {
	// 	duzina = b.length;
	// }
	// Sintaxa za ternary operator:
	// uslov ? vrednost u slucaju ispunenja uslova: vrrednost u slucaju neispunjenja uslova
	let duzina = a.length > b.length ? a.length : b.length;
	for (let i = 0; i < duzina; i++) {
		if (i >= a.length) {
		} else {
			c += a[i] + b[i];
		}
	}
	return c;
};

console.log(myFunction());
