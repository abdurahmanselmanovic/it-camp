//      Kondicionali
// u JS se if narebda pise na sledeci nacin:

// if (uslov1) {
// 	// ako je ispunjen uslov1 izvrsiti odredjeni kod
// } else if (uslov2) {
// 	// ako je ispunjen uslov2 izvrsiti odredjeni kod
// } else {
// 	// u slucaju da nije zadovoljen ni prvi ni drugi uslov, izvrsiti odredjeni kod
// }

// Na osnovu unetih godina ispisati u konzoli sledece:
// ako je broj godina manji od 12: Vi ste decjeg doba
// ako je broj godina izmedju 12(ukljucuje) i 18(neukljucuje): vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(neukljcuje): Vi ste punoletni
// ako je broj godina veci ili jednak od 40: Vi ste zrela osoba
// ako korisnik nije uneo broj: niste uneli broj godina.
// const brojGodina = Number(prompt("Unesite svoju starost: "));
// // if (brojGodina < 12) {
// // 	console.log("Vi ste decjeg doba");
// // }
// // if (brojGodina >= 12) {
// // 	if (brojGodina < 18) {
// // 		console.log("Vi ste maloletni");
// // 	}
// // }
// // if (brojGodina >= 18) {
// // 	if (brojGodina < 40) {
// // 		console.log("Vi ste punoletni");
// // 	}
// // 	if (brojGodina > 40) {
// // 		console.log("Vi ste zrela osoba");
// // 	}
// // }

// if (brojGodina < 12) {
// 	console.log("Vi ste decjeg doba");
// } else if (brojGodina > 12 && brojGodina < 18) {
// 	console.log("Vi ste maloletni");
// } else if (brojGodina >= 18 && brojGodina < 40) {
// 	console.log("Vi ste punoletni");
// } else if (brojGodina >= 40) {
// 	console.log("Vi ste zrela osoba");
// } else {
// 	console.log("niste uneli broj");
// }

// Uslov za parnost broja je :

// Napisati program koji provera da li je uneti broj od strane korisnika paran ili neparan, i ispisuje odgovaajucu poruku
// const broj = Number(prompt("Unesite broj"));

// if (broj % 2 === 0) {
// 	console.log("Broj je paran");
// } else if (broj % 2 == 1) {
// 	console.log("broj je neparan");
// } else {
// 	console.log("niste uneli broj");
// }

// Napisati program koji, ako je uneti broj veci od 0 stampa poruku broj je pozitivan, u suprotnom broj je negativan

// const number1 = Number(prompt("Unesite broj"));
// if (number1 > 0) {
// 	console.log("Broj je pozitivan");
// } else if (number1 < 0) {
// 	console.log("Broj je negativan");
// } else if (number1 === 0) {
// 	console.log("Broj je 0");
// } else {
// 	console.log("Niste uneli broj");
// }

// // Switch naredba:
// switch (izraz) {
// 	case x:
// 		//blok koda
// 		break;
// 	case y:
// 		// blok koda
// 		break;
// 	case z:
// 		// blok koda
// 		break;
// 	default:
// 	// blok koda
// }
// Ako je zadovoljen slucaj x, izvrsice se 77 linija koda, ako nije, prelazimo na sledeci slucaj...
// Kad se dodje do break rezervisane reci Switch naredba prestaje izvrsava.

// Ako se izostavi break, to znaci da ce se izvrsiti linija koda od sledeceg slucaja
// (koji zapravo nije zadovoljen) i to nije nesto sto zelimo da se desi

// default rezervisana rec odreduje kod koji ce se izvrisiti ako nijeadn od prethodnih slucajeva nije zadovoljen

// Korisnik unosi broj koji mora biti izmedju 12 i 15(ukljucuju se oba) koristeci switch naredbu izvrisiti ispis u konzoli
// broj koji je korisnik uneo pod zadovoljenim uslovom.
const broj = Number(prompt("Unesite broj izmedju 12 i 15"));

switch (broj) {
	case 12: {
		console.log("Uneli ste broj", broj);
		break;
	}
	case 13: {
		console.log("Uneli ste broj", broj);
		break;
	}
	case 14: {
		console.log("Uneli ste broj", broj);
		break;
	}
	case 15: {
		console.log("Uneli ste broj", broj);
		break;
	}
	default:
		console.log("Niste uneli broj iz trazenog opsega");
}
