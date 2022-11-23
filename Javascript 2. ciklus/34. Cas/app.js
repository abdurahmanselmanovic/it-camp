person = {
	ime: "Amina",
	prezime: "Besirovic",
	starost: 18,
	bojaOciju: "plava",
	bojaKose: undefined,
	polozenC: false,
};

// // freeze() metoda cini objekat immutabile
// person.prezime = "Marovac";
// console.log(person);
// Object.freeze(person);
// person.prezime = "besirovic"; // ne menja se jer je objekat zamrznut
// console.log(person);
// person.godinaRodjenja = 2003;
// console.log(person);

// seal() cini objekat promenjljivim ali nije dozvoljeno dodavanje niti brisanje elemenata
// Object.seal(person);
// person.prezime = "Besirovic";
// person.godinaRodjenja = 2003;
// console.log(person);
// delete person.bojaKose;
// console.log(person);

// values() metoda vraza niz vrednosti datog objekta.
const vrednosti = Object.values(person);
console.log(vrednosti);

// keys() metoda vraca niz kljuceva (names) datog objekta.

const kljucevi = Object.keys(person);
console.log(kljucevi);

// entries() metoda vraca niz nizova (svaki podniz je name:value par)
const parovi = Object.entries(person);
console.log(parovi);
const parovi2 = parovi.flat();
console.log(parovi2);

// is() metoda ispituje identicku jednakost.
const person1 = person;
console.log(Object.is(person, person1));
