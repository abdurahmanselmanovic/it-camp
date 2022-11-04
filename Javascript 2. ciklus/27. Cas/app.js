// indexOf() metoda pretrazuje niz i vraca nam index elementa koji predstavlja argument date metode.
// Ako se element koji pretrazujemo ne nalazi unutar niza, rezultat ce biti -1

// Napraviti funkciju koja za argument uzima neki niz, i vraca nam poziciju na kojoj se nalazi Imran, dok ako nije prisutan neka nam ispise poruku
// "Sad ce imran doci."
const niz = [
	"Vahid",
	"Talib",
	"Ahmed",
	"Abdurahman",
	"Amina B",
	"Amina M",
	"Imran",
];
const myfunction = (arr) => {
	if (arr.includes("Imran")) {
		return arr.indexOf("Imran");
	} else {
		return "Sad ce imran doci";
	}
};

console.log(myfunction(niz));

// lastIndexOf() -  metoda pretrazuje niz i vraca nam index poslednjeg pojavljivanja elementa koji predstavlja argument date metode.()
// Ako se element koji pretrazujemo ne nalazi unutar niza,

// includes() metoda funkcionise isto kao kod stringova. Zapravo vraca na boolean u zavisnosti od toga da li se argument nalazi na unutar niza na koji primenjujemo datu metodu.

console.log(niz.includes("Mejra"));
console.log(niz.includes("Talib"));

// Javascript keys() i entries() metode nam vracaju indekse datog niza, odnosno kombinaciju indeksa i vrednosti

const indeksi = niz.keys(); // Array iteration Object

for (let indeks of indeksi) {
	console.log(indeks);
}

const entriesi = niz.entries();

for (let entitet of entriesi) {
	console.log(entitet);
}

// flat() metoda iz niza nizova pravi jedan niz koji je sacinjen

const svastara = [
	["jabuke", "kruske", "mandarine", "mango"],
	["somun", "ruze", "bageto", "francuski"],
	["krompir", "bostan", "luk"],
];

const svastaraSredjena = svastara.flat();
console.log(svastaraSredjena);

const odAdoZ = svastaraSredjena.sort();
console.log(odAdoZ);
