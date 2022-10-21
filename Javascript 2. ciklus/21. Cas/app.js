// Javascript Array iteration //

// Array iteration metode prolaze kroz svaki element niza

// forEach() metoda - poziva funkciju za svaki element niza

niz = ["Imran", "Talib", "Ahmed", "Abdurahman", "Muhamed"];

niz.forEach((element) => console.log(element)); // menja for petlju za dati niz

for (let element of niz) {
	console.log(element);
}
for (let i = 0; i < niz.length; i++) {
	console.log(niz[i]);
}

niz.forEach((element, index, array) =>
	console.log(`${index}:${element} i treci agument je apravo ceo niz: ${array}`)
);

const brojevi = [32, 12, 42, 6, -6, 12, 31, -27, 6, 202, 34.5];

// map() metoda - kreira novi niz, tako sto se iterira niz na koji se primenjuje metoda
// Vazno je napomenuti da map() metoda ne menja originalni niz.

const myfunction2 = (arr) => {
	noviniz = [];
	for (number of arr) {
		noviniz.push(number + 2);
	}
	return noviniz;
};

// console.log(myfunction2(brojevi));

const noviniz = brojevi.map((element) => element + 2);
console.log(noviniz);

// Koriscnjeme map metode napraviti novi niz ciji ce svaki element element postojeceg i _Prezime
const noviniz1 = niz.map((element) => element + "_Prezime");
console.log(noviniz1);

const noviniz2 = niz.map(function (element) {
	return element + "_Prezime";
});

console.log(noviniz2);

// Pomocu map() metode napraviti novi niz koji vraca sve pozitivne brojeve
// kvadrirane, a negativne onakve kakvi jesu.
