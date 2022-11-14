// api json objects jsx
// JSON - Javascript Object Notation

// Najcesce se koristi prilikom slanja podataka sa servera do Web stranice
// Sintaksa vrlo slicna objektu u JSu:

// Objekat u javascriptu
const objekat = {
	ime: "Abdurahman",
	prezime: "Selmanovic",
	brojindeksa: "032939128",
	ocene: [7.9, 10, 6, 5, 8],
};
// JSON Format
// const objekat2 = {
// 	"ime": "Abdurahman",
// 	"prezime": "Selmanovic",
// 	"brojindeksa": "032939128",
// 	"ocene": [7.9, 10, 6, 5, 8],
// }
// Objekti su promenljivi! (Mutable)

const person = {
	JMBG: "14040037839333",
	firstName: "Ahmed",
	lastName: "Krmisevic",
};

// Bilo koja promena na x objekat ce takodje promeniti person objekat.
// Ovo vazi za neprimitivne(nereferente) tipove podataka, tj. novoj promenljivoj x dodeljujemo referencu na objekat person ( a ne na vrednost)
// Identicko izjednacavanje
const x = person;
console.log(x);
console.log(x.firstName);

x["firstName"] = "Muhamed";

console.log(x.firstName);

console.log(person.firstName);

// Brisanje svojstva iz objekta se vrsi preko delete keyword:

// delete person["JMBG"];
delete person.JMBG;
console.log(person);
// delete brise i name i value

// Vrednost u objektu moze biti:
// neki drugi objekat,
// niz,
// metoda (funkcija)

// JSON.stringfy() metoda nam sluzi za prevodjenje objekta u JSON, nakon toga JSON formata u string.

const stringObjekta = JSON.stringify(person);
console.log(stringObjekta);
console.log(typeof stringObjekta);

// JSON parse nam vraca ako moze objekat iz poslatog argumenta
console.log(JSON.parse(stringObjekta));
console.log(typeof JSON.parse(stringObjekta));

// Domaci zadatak
// Unutar postojeceg objekta dodati nova svojstva
// 1. trenutnaBrzina: 0
// 2. maksimalnaBrzina: 260
// 3. povecanjeBrzine: (metoda koja uzima jedan argument)
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument)
const myCar = {
	id: 1,
	marka: "Audi",
	model: "a4",
	boja: "crvena",
	pogon: "prednji",
	menjac: "automatski",
	kontakt: [06222, 02200332],
	servis: {
		datum: "04, maj",
		km: 23000,
		serviser: "Pasovic",
	},
	udaran: true,
};

console.log(myCar["menjac"]);
console.log(myCar.servis["datum"]);
console.log(myCar.servis.datum);
console.log(myCar["servis"]["datum"]);

myCar.trenutnaBrzina = 0;

myCar.maksimalnaBrzina = 260;

myCar.povecanjeBrzine = function (brzina) {
	if (this.trenutnaBrzina + brzina > this.maksimalnaBrzina) {
		console.log(`Nije moguce voziti vise od maksimalne brzine.`);
	} else if (brzina < 0 || isNaN(brzina)) {
		console.log(`Niste uneli adekvatno povecanje brzine.`);
	} else {
		this.trenutnaBrzina += brzina;
	}
};

myCar.smanjenjeBrzine = function (brzina) {
	if (this.trenutnaBrzina - brzina < 0) {
		console.log(`Nije moguce voziti sporije od 0Kmh.`);
	} else if (brzina < 0 || isNaN(brzina)) {
		console.log(`Niste uneli adekvatno smanjenje brzine.`);
	} else {
		this.trenutnaBrzina -= brzina;
	}
};

myCar.ukoci = function () {
	this.trenutnaBrzina = 0;
};

myCar.povecanjeBrzine(120);
// myCar.ukoci();
myCar.smanjenjeBrzine(20);
myCar.smanjenjeBrzine(60);
console.log(myCar.trenutnaBrzina);
