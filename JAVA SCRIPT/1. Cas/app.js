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

//
