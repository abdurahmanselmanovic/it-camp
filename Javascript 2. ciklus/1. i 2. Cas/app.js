// FUNKCIJE

// funkcije predstavljaju blok koda koji se izvrsava samo prilikom pozivanja.

// Nacini zapisivanja funckija:
// koriscenjem keyword function

var prom = 25;

function nazivFunkcije() {
	return 5;
}

console.log(nazivFunkcije());

function zbirTriIPet() {
	return 3 + 5;
}

console.log(zbirTriIPet());

// Treci primer
// prilikom definisanja funkcije u zagradu stavljamo (prema potrebi) parametre koje
// funkcija korisiti unutar sebe.
//                           parametri
function zbirDvaBroja(prviBroj, drugiBroj) {
	return prviBroj + drugiBroj;
}
// Prilikom pozivanja funckije u zagradi stavljamo argumente na osnovu kojih se funkcija izvrsava
//                      argumenti
console.log(zbirDvaBroja(5, 14));

function povrsina(broj1, broj2) {
	if (broj1 === broj2) {
		return "Povrsina kvadrata je " + broj1 * broj1;
	} else {
		return "Povrsina pravougaonika je " + broj1 * broj2;
	}
}

console.log(povrsina(12, 13));

// DRY (Dont repaeat yourself)

// 2. Nacin

const myFunction = function () {
	// blok koda
};
// prva varijanta
const mySecondFunction = function (prva, druga) {
	if (druga === undefined) {
		return prva ** 2 + 1;
	} else {
		return prva ** 2 + druga ** 2;
	}
};

console.log(mySecondFunction(5, 4));

// druga varijanta
const mySecondFunction2 = function (prva, druga = 1) {
	return prva ** 2 + druga ** 2;
};

console.log(mySecondFunction2(2, 10));
// Ako neka funkcija ima defaultnu vrednost, ta vrednostse stavlja na poslednjem mestu
// ako ih je vise, na posljenjim pozicijama.
// Ne sme se desiti slucaj da prva vrednost bude defaultna a nakon nje ona koja nema
// defaultnu vrednost.

// arrow function:
const arrowFunction = () => {
	// sintaksa
};

// Napraviti funkciju koja na osnovu unetog argumenta vraca jedno od cetiri stanja:
// Ako je unet pozitivan broj ispisuje poruku "ARGUMENT JE POZITIVAN BROJ"
// Ako je unet negativan broj ispisuje poruku "ARGUMENT JE NEGATIVAN BROJ"
// Ako je uneta nula, ispisuje poruku "ARGUMENT JE NULA"
// Ako nije uney broj, ispisuje poruku "ARGUMENT NIJE BROJ"

const arrowFunction1 = (argument) => {
	if (isNaN(argument)) {
		return "ARGUMENT NIJE BROJ";
	} else if (argument < 0) {
		return "ARGUMENT JE NEGATIVAN BROJ";
	} else if (argument > 0) {
		return "ARGUMENT JE POZITIVAN BROJ";
	} else if (argument === 0) {
		return "ARGUMENT JE NULA";
	}
};

console.log(arrowFunction1(14));

let recenica1 = "";
const myArrowFunc = (recenica) => {
	for (i = 0; i <= recenica.length; i++) {
		if (
			recenica[i] === "a" ||
			recenica[i] === "e" ||
			recenica[i] === "i" ||
			recenica[i] === "o" ||
			recenica[i] === "u"
		) {
			recenica1 += recenica[i].toUpperCase();
		} else if (i === recenica.length) {
			recenica1 += ".";
		} else {
			recenica1 += recenica[i];
		}
	}
};

myArrowFunc(
	"Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa"
);
console.log(recenica1);
