// Domaci zadatak.
// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.

const isPunoletan = new Promise((resolve, reject) => {
	objekat = {
		ime: "abdurahman",
		prezime: "selmanovic",
		godine: 14,
	};
	if (objekat.godine > 17) {
		resolve();
	} else {
		reject();
	}
});

isPunoletan
	.then(() => console.log("Vi ste punoletni"))
	.catch(() => console.log(objekat.godine));
