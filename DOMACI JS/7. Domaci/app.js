let niz3 = ["mirza", "hatic", "nesto cudno", "brzo", "trci"];
// 1. Nacin
const myFunction = (niz) => {
	let noviNiz = [];
	for (indeks in niz) {
		if (indeks % 2 === 0) {
			noviNiz += niz[indeks];
		}
	}
	return noviNiz;
};

console.log(myFunction(niz3));
// 2. Nacin

const funkcija = (niz) => {
	let noviNiz = [];
	for (let i = 0; i <= niz.length; i++) {
		if (i % 2 === 1) {
			continue;
		} else {
			noviNiz += niz[i] + " ";
		}
	}
	return noviNiz.slice(0, -1);
};

console.log(funkcija(niz3));
