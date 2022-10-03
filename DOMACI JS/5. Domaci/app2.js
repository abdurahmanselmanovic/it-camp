// 2. napraviti funkciju koja izracunava povrsinu kruga, gde poluprenik predstavlja argument
// funkcije

const myFunction = (poluprecnik) => {
	if (isNaN(poluprecnik)) {
		return "Uneti broj je neispravan";
	} else {
		return poluprecnik ** 2 * Math.PI;
	}
};

console.log(myFunction(4));
