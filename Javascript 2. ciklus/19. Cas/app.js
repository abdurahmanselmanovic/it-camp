// JS Array depete
// preko delete keyword (rezervisanje reci) mozemo izbrisati neki element niza.

let voce = ["jagoda", "banana", "mandarina", "ananas"];
// Ovaj nacin brisanja elementa u nizu nam ostavlja prazna mesta.
delete voce[2];

console.log(voce);
// Preporucuje se koriscenje pop() ili push() metode

// Spajanje nizova:
// Za spajanje nizova se koristi concat() metoda
// concat() metoa pravi novi niz koji je sadrzan od elementa
// onih nizova koji se spajaju.

voce = ["jagoda", "banana", "mandarina", "ananas"];
let povrce = ["krastavica", "krompir", "luk"];

let voceIPovrce = voce.concat(povrce);
console.log(voceIPovrce);

// concat() metoda moze sadrzati vise elemenata...
let salate = ["cezar", "ruska", "pileca"];

let triNiza = salate.concat(voce, povrce);
console.log(triNiza);

// Ako se kao argument concat() metode nadje neki string,
// taj string zapravo predstavlja novi element koji ce biti dodat postojecem nizu

let pojacanoVoce = voce.concat("tresnja", "visnja");
console.log(pojacanoVoce);

// splice() metode - se koristi za dodavanje njovh elemenata u nizu

voce = ["jagoda", "banana", "mandarina", "ananas"];

// splice metode uzima najmanje 2 argumenta, gde:
// 1. argument predstavlja indeks na kojem ce da se vrse neke promene
// (indeks elementa od kog ce biti izbrisano nekoliko elemeta i od kog ce se eventualno dodati nekoliko novi
// elementa)
// 2. argument predstavlja broj koliko se zapravo brise elementa na poziciji definisanoj
// na prvom argumentu.
// 3.,4.,... argumenti predstavljaju elemente koji ce se dodati na poziciji
// koju smo definisali na prvom argumentu
voce.splice(1, 1, "kivi", "bostan");

console.log(voce);

let niz = [
	"Imran",
	"Muhamed",
	"Abdurahman",
	"Amina",
	"Amina",
	"Mejra",
	"Talib",
];

// Primenom splice metode:
// 1. izbrisati iz niza sve devojke
// 2. izbrisati iz niza sve muskarce
// 3. izbrisati iz niza sve "Amina" i na mestu prve "Amina"
// dodati "Harun" i "Musa"

// 1.
// console.log(niz.splice(3, 3));

// 2;
// niz.splice(0, 3);
// niz.splice(3, 1);
// console.log(niz);
// 3.
// niz.splice(3, 2, "Harun", "Musa");
// console.log(niz);

// Splice metoda vraca niz sa izbrisanim elementima

// slice() metoda nam daje deo niza kao novi niz
niz = ["Imran", "Muhamed", "Abdurahman", "Amina", "Amina", "Mejra", "Talib"];
// pravimo novi niz primenjivanjem slice metode na nas "niz"
let Skraceni = niz.slice(2, 6);
console.log(Skraceni);
// U slucaju da drugi argument bude izostavljen, daje se ostatak niza
let Skraceni2 = niz.slice(2);
console.log(Skraceni2);

// Domaci:
// Iz nekog niza izdvojiti sve parne brojeve(napraviti novi niz)
// Iz nekog niza izdvojiti sve neparne brojeve(napraviti novi niz)
// Iz nekog niza izdvojiti sve pozitivne brojeve(napraviti novi niz)
