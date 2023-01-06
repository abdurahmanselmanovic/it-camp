//  cd change directory je komanda u command promptu koja sluzi za navigiranje kroz foldere unutar sistema

// ls - je komanda koja sluzi za izlistavanje fajlova i foldera unutar foldera

// mkdir - make directory je komanda koja sluzi za kreiranje novog direktorija ili foldera

// D Document
// O Object
// M Manipulation
// I sluzi za maniplaciju elementima html-a kroz JS kod

// var nekiElement = document.getElementById("nekiElement");

// nekiElement.style.color = " #02551";

var noviElement = document.getElementById("ime"); // funkcija u jsu koja omogucava pristup elementu putem njegovog id-a

ime.innerText = "abdurahman";
noviElement.style.color = "	#89CFF0"; // style je nacin pristupa i izmene css-a elementa
noviElement.style.fontSize = "40px";

var prazan1 = document.getElementById("prezime");

prazan1.innerText = "selmanovic"; // innerText je nacin izmene ili popunjavanja texta unutar elementa, innerHtml je za unos html elemenata

prazan1.style.color = "	#000    ";
prazan1.style.fontSize = "40px"; // promena velicina fonta kroz css

var natureImg = document.getElementById("nature");

natureImg.style.borderRadius = "50%";
natureImg.style.width = "300px";
natureImg.style.height = "300px";

natureImg.addEventListener("click", () => {
	natureImg.style.display = "none";
	setTimeout(() => {
		natureImg.style.display = "block";
	}, 1000);
});
// addEventListener je funkcija koja se dodaje html elementu koji smo naznacili
// pradi dogadjanja oko ili unutar naznacenog elementa i izvrsava funkciju koja mu je zadata
// prvi argument funkcije je event (sta treba da korisnik da uradi) drugi argument je funkcija koju treba
// program da obavi
console.log(natureImg.getAttribute("src"));

// getAttribute je funkcija koja uzima unete podatke atributa koji se nalaze unutar elemenata koji smo naznacili
