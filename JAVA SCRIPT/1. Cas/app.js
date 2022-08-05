document.getElementById("paragraf").innerHTML =
	"Ovo je paragraf dodat od strane javascripta";

// Ispisati u konzoli recenicu:
console.log("Danas je bilo pretoplo. Cekam septembar za nesto svezije vreme.");

// Tipovi podataka u JavaScriptu:

// Za proveru tipa varijable (promenljive) u JavaScriptu se koristi
// typeof operator.

// Postoje
// 1. primitivni(Primitive) tipovi podataka
// 2. Neprimitivni(Non-Primitive) tipovi podataka

// 1.1 String - Niz karaktera koji se upisuje unutar navodnika.
//        On moze biti upisan unutar obicnih ili duplih navodnika.
//        Stringovi mogu biti koji karakteri A-Z, 0-9
//     Zapisivanje stringa:
("Danas je toplo");
"Danas je padala kisa" //
`Danas je padao sneg.`; //Template literals

String("Danas je duvao jak vetar.");

// 1.2 Number - Predstavlja broj u JavaScriptu.
//              On moze biti zapisan sa decimalom ili bez nje.
//              JavaScript ne razlikuje tipove kod brojeva, vec su svi brojevi Number tipa.
//      Zapisivanje brojeva:
10;
0 - 78;
1.14;
0.99999974;
Number(45);

// 1.3 BigInt - Ovaj tip podataka nam zluzi za skladistenje brojeva cija vrednost
//              prelazi granicu Number tipa podatka.
//      Zapisivanje velikih brojeva:

BigInt(943126371263716317633126);

// 1.4. Boolean - Predstavlja logicki entitet i on moze imati dve vrednosti:
//             1. true
//             2. false
//             Najveca primena ovog tipa podataka se nalazi u kondicionalima,
//             tj. u slucajevima ispitivanja da li je odredjeni uslov zadovoljen ili ne.
//      Zapisivanje Boolean-a:
// Boolean("odredjeni uslov"); => kao izlaz dobijamo true ili false

// 1.5 undefined - kada odredjenu promenljivu deklarisemo ali joj ne dodelimo vrednost,
//                 tada undefined predstavlja i vrednost i tip za tu promenljivu.

// vrednost text
// tip string number...

// 1.6 null - Tip podatka null se javlja za nepostojecu ili promenljivu koja nije validna

// 1.7 Symbol - To je novi tip podatka u Javascriptu.
//              Koristi se za anonimne i jedinstvene vrednosti.

Symbol("Kako je bilo vreme?");

//  2. Ne primitivni tipovi podataka (Non-primaive data types).
//	   Primitivni tipovi podataka se koriste za skladistenje promenljivih(Varijabli)
// 	   Koje imaju jednu vrednost
//     Dok za promenljive koje sadrze vise vrednosti(ili kompleksne vrednosti)
//     koristiomo ne primitivne tipove podataka (Non-Primitive data types.)

// Primeri ne primitivnih tipova podataka:

// 2.1 Arrays (Nizove) - Nizovi se koriste za skladistenje vise podataka
// 						 unutar jedne promenljive.
// 						 Nizovi u JavaScriptu imaju mogucnost skladistenja
//                       Elementara razlicitih tipova podataka.
// Zapisivanje nizova:
// Niz stringova
["Talib", "Muhamed", "Amina", "Ahmed", "Mervan"][
	// Niz brojeva
	(15, 17, 18, 19, 18)
];
// 2. Nacin zapisivanja nizova (nacin koji nije preporucljiv za koriscenje)
new Array(["crnac,belac,kinez "])[
	// Niz koju sebi sadrzi razlicite tipove podataka
	("Talib", 15, false, "Ahmed", 19, true)
];
// 2.2 Objects (objekti) - Objekti su GLAVNA STVAR U PROGRAMSKOM JEZIKU JAVASCRIPT.
// 						   Objekti sluze za skladistenje nekih podataka i oni se zapisuju
//                         po principu (name,value) par.
// 						   Objekti takodje mogu sadrzati razlicite tipove podataka.
// // Zapisivanje objekata:{
// 	marka:"bmw"
// 	godinaProizvodnje: 2006,
// 	boja: "crna",
// 	kubikaza: "2000ks"
// }

// 2. Nacin zapisivanje objekata (nacin koji nije preporucljiv)
new Object({
	punoletnost: false,
	ime: "ahmed",
	starost: 19,
});

// 2.3 Set (Setovi) - Setovi su slizni nizovima, sa razlikom kod zapisivanja
//Izmedju ostalih, najbitnija karakteristika kod setova
//da oni ne mogu imati duplikate
//
//
// Zapisuju se
new Set(["jabuka", "sljiva"]);

// 2.4 Maps (Mape) - Predstavljaju ne primitivni tip podataka, koji je vrlo slican objektu.
// 					 Zapisivanje se izvrsava na nesto drugaciji nacin

new Map([["apples, 500"], ["bananas", 300], ["oranges", 200]]);
