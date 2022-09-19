// Konverter centimetra u inch

const myFunction = () => {
	const centimetri = +prompt("Unesite broj centimetara");
	return centimetri / 2.54;
};

console.log(`${myFunction()}`);

// Konvertovanje kilometara u metare
const myFunction2 = (kilometri) => {
	return kilometri * 1000;
};

console.log(`${myFunction2(10)}`);
