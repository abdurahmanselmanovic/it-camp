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
// 