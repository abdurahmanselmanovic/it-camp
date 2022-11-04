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
