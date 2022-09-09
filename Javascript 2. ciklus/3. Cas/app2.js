// Stringovi

// Stringovi predstavljaju immutable promenljive (promenljive koje ne mozemo da menjemamo)
// Ali obicno pri potrebi da izmenimo string cemo definisati novu promenljivu i dodeliti joj
// karakatrere prema postojecoj(obicno koriscenjem for petlje).
// Za pronalazenje duzine stringa se koristi metoda length
let recenica = "Danas je promenljivo vreme.";
const duzina = recenica.length;
console.log(duzina);

// prilikom pisanja stringa mozemo naici na problem ako zelimo da se unutar stringa najdu navodnici
// 1 NACIN :
let recenica2 =
	'Medicinska skola u Novom Pazaru se"Dva heroja" naziv je dobila po herojima koji su izubili svoje zivote prilikom spasavanja bebe. ';
// 2. NACIN
// let recenica3 =
// 	"Medicinska skola u Novom Pazaru se\"Dva heroja\" naziv je dobila po herojima koji su izubili svoje zivote prilikom spasavanja bebe. ";
// // 3. NACIN
let recenica4 =
	'Medicinska skola u Novom Pazaru se"Dva heroja" naziv je dobila po herojima koji su izubili svoje zivote prilikom spasavanja bebe. ';

console.log(recenica2);
// Jos jedna primena \ kada zelimo da podelimo string u nekoliko redova.
// Ova metoda ne funckcionise kada se radi o obicnom kodu, vec samo kada su stringovi u pitanju.
let novaRecenica =
	"Neka nova recenica koja treba sadrzati backslash kao deo stridjasdjaskdjaklsdjaskljdkasjda\
    jsdhasgdhjasgdgasdkasdlasdjkasjkdjjksajkdjkasjkdjkasjkdjkjk\
    asjkdjkasjkdjkasjkdjkasjkdjkasjkdjkaksjdjkajksjkdjkaskdjkasjkdjkasjkdkaskdkasjkasdnga";
