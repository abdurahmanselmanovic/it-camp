document.getElementById("paragraf").innerHTML =
	"Ovo je paragraf dodat od strane javascripta";

// Ispisati u konzoli recenicu:
console.log("Danas je bilo pretoplo. Cekam septembar za nesto svezije vreme.");

// Tipovi podataka u JavaScriptu:
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
