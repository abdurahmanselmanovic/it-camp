// // stringovi

// let recenica3 =
// 	"Za nedelju dana je test, gde zavrsavamo prvi ciklus od 3 ovog kursa.";
// let rec = "danas";

// // Pristupanje karaktera ide preko indeksa.
// // indeksiranje krece od 0
// // kad se radi o stringovima krecemo od nule pa sve do (ukupna duzina -1).

// //Pristupanje trecem slovu nase reci

// let treciKarakter = rec[2];
// console.log(treciKarakter);

// // Prevesti rec u sva velika slova
// // Za ovaj zadatak se koristi metoda toUpperCase()

// let novaRec = rec.toUpperCase();
// console.log(novaRec);

// za izracunavanje duzine stringa se koristi metoda length

// let duzinaRecenice = recenica.length;
// console.log(duzinaRecenice);
// // Ispisati duzinu reci:
// console.log(rec.length);
// // ispisati recenicu tako da svaki karakter ide jedan ispod drugog.
// let recenica2 = "Danas je bilo promenljivo vreme";
// for (let i = [0]; i < recenica2.length; i++) {
// 	console.log(recenica2[i]);
// }

// Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom

let recenica =
	"za nedelju dana je test, gde zavrsavamo prvi ciklus od 3 ovog kursa.";

let recenica4 = "";

for (let i = [0]; i < recenica.length; i++) {
	if (i === 0) {
		recenica4 += recenica[i].toUpperCase();
	} else if (recenica[i - 1] === " ") {
		recenica4 += recenica[i].toUpperCase();
	} else {
		recenica4 += recenica[i];
	}
}

console.log(recenica4);

// domaci

// Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom
// "za nedelju dana je test, gde zavrsavamo prvi ciklus od 3 ovog kursa."

//ne domaci

// Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.
recenica =
	"za nedelju dana je test, gde zavrsavamo prvi ciklus od 3 ovog kursa.";
let recenica5 = "";

for (let i = [0]; i < recenica.length; i++) {
	if (recenica[i] === " ") {
		continue;
	} else {
		recenica5 += recenica[i];
	}
}

console.log(recenica5);
