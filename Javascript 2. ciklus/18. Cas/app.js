// Array metode //

// Push() metoda na najlaksi nacin dodaje element nizu na poslednjem mestu.

const voce = ["jagoda", "banana", "mandarina", "ananas"];

voce.push("mango"); // vraca duzinu niza nakon sto se doda odredjeni element

console.log(voce);
// Push metoda moze dodati vise elementa u nizu
voce.push("jabuka", "kruska", "kivi");

console.log(voce);

// novi nacin dodavanja elementa na poslednjem mestu

voce[voce.length] = "kupina";
console.log(voce);

// Jos jedan razlog zasto treba izbegavati new Array() prilikom definisanja nizova
let brNiz = [55];
console.log(brNiz);

let brNiz2 = new Array(44);
console.log(brNiz2);
console.log(brNiz2[23]);
console.log(brNiz2.length);

// Za prevodjenje niza unutar stringa se koristi metoda toString()

let voceString = voce.toString();
console.log(voceString);
console.log(typeof voceString);

// Jos jedna nacin prevodjenja niza u string. Sa dodatnim mogucnostima
let voceString2 = voce.join(); // vraca string preveden kao kod toString()
voceString2 = voce.join(""); // vraca string gde izmedju elementa niza nema space
voceString2 = voce.join("*");

console.log(voceString2);

// rucno pravljenje join("_") metode

const joinManual = (arr) => {
	let arrString = "";
	for (let element of arr) {
		arrString += element + "_";
	}
	let duzina = arrString.length;
	// return arrString.substr(0, duzina - 1); // prvi nacin
	return arrString.slice(0, -1); //drugi nacin
};

console.log(joinManual(voce));

// pop() metoda se koristi za brisanje poslednjem elementa niza.

let kupina = voce.pop(); // vraca izbrisani element
console.log(kupina);

// unshift() metoda dodaje element na prvo mesto u nizu

voce.unshift("tresnja");
console.log(voce);

voce.unshift("tresnja", "bostan", "sljiva"); // moze dodati vise elemenata na pocetku niza
console.log(voce);

// shift() metoda se koristi za brisanje prvog elementa niza
let izbrisaniElement = voce.shift();
console.log(izbrisaniElement);
// DOMACI
// Napraviti funkciju koja iz nekog niza brise sve elemente na parnim pozicjama
// Napraviti funkciju koja iz nekog niza menja sve elemente na parnim pozicijama recju "paran broj"
//
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
