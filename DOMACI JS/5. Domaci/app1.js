// Domaci
// 1. napraviti funkciju koja izracunava obim kruga, gde se poluprecnik unosi od strane
// korisnika

const myFunction = () => {
	const poluprenik = +prompt("Unesite poluprenik kruga");
	if (isNaN(poluprenik)) {
		return "Uneti poluprenik nije broj";
	} else {
		return 2 * poluprenik * Math.PI;
	}
};
console.log(myFunction());
