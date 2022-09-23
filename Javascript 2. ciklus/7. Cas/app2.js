// // Konverter centimetra u inch

// const myFunction = () => {
// 	const centimetri = +prompt("Unesite broj centimetara");
// 	return centimetri / 2.54;
// };

// console.log(`${myFunction()}`);

// // Konvertovanje kilometara u metare
// const myFunction2 = (kilometri) => {
// 	return kilometri * 1000;
// };

// console.log(`${myFunction2(10)}`);

const myFunction = () => {
	const duzina = +prompt("Unesite duzinu");
	const sirina = +prompt("Unesite sirinu");
	if (isNaN(duzina) || isNaN(sirina)) {
		return "Uneli ste neodgovarajuce vrednosti";
	} else if (duzina < 0 || duzina >= 100) {
		return "Opseg duzine moze biti izmedju 0 i 100";
	} else if (sirina < 0 || sirina >= 100) {
		return "Opseg sirine moze biti izmedju 0 i 100";
	} else {
		return 2 * duzina + 2 * sirina;
	}	
};

console.log(myFunction());
// 