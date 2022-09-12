// NASTAVAK METODA KOD STRINGOVA

// Menjanje sadrzaja se moze izvrsiti koriscenjem replace() metode

let recenica = "Nekad zelimo izmeniti sadrzaj nekim drugim.";
console.log(recenica.replace("sadrzaj", "tekst"));

// recenica2 ce zameniti samo prvu "sadrzaj" recju tekst
let recenica2 =
	"Nekad da se na odredjenom mestu nadje sadrzaj koji nije isti sadrzaj koji je bio pre.";
// console.log(recenica2.replace("sadrzaj", "tekst"));

// Koriscenjem Regular Expression mozemo dodatno definisati sta zelimo.
// novaRecenica3 ce zameniti svaku rec "sadrzaj", recju "tekst"
// koristi se regyak expression (g)

let novaRecenica3 = recenica2.repeat(/sadrzaj/g, "tekst");
console.log(novaRecenica3);

let recenica3 =
	"Nekad da se na odredjenom mestu nadje sadrzaj koji nije isti SADRZAJ koji je bio pre.";

// JavaScript je case-sensetive osetljiv na velika i mala slova.

let novaRecenica4 = recenica3.replace(/sadrzaj/g, "tekst");

// novaRecenica5 ce zameniti svaku rec "sadrzaj" (bilo da je napisana malm ili velikim slovima)
// recju "tekst"
// Koristi se regular expression (i - insensetive)
// Menja se samo prva rec koja se poklapa
let recenica4 =
	"Nekad da se na odredjenom mestu nadje SadRzaJ koji nije isti SADRZAJ koji je bio pre.";

let novaRecenica5 = recenica4.replace(/sadrzaj/i, "tekst");
console.log(novaRecenica5);
// Ako hocemo u istom momentu da zamenimo sve reci bez obzira na velika i mala slova mozemo
// iskoristiti vise regular expressions odjednom.

let novaRecenica6 = recenica4.replace(/sadrzaj/gi, "tekst");
console.log(novaRecenica6);
// Konvertovanje stringa u velika slova:
// toUpperCase()

let recenica5 = "Sta ako zelimo da cela recenica bude ispisana velikim slovima";
console.log(recenica5.toUpperCase());
// Konvertovanje stringa u mala slova:
// toUpperCase()

let recenica6 = "Sta AKO ZELIMO DA RECENICA bude ispisana malim slovima";
console.log(recenica6.toLowerCase());
