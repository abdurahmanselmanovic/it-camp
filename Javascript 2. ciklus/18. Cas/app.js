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
	return arrString;
};

console.log(joinManual(voce));
