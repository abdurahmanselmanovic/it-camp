// Truthy and falsy values

let isSunny = false;
isSunny = 1;

// if (isSunny) {
// 	console.log("Ponesite naocare");
// } else if (isSunny === false) {
// 	console.log("Napolju je oblacno vreme.");
// }

if (isSunny) {
	console.log("Napolju je suncano vreme.");
} else if (!isSunny) {
	console.log("Napolju je oblacno vreme");
}

// Sve FALSY vrednosti su:
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// nan

// Ispitati da li je vrednost koju unosi korisnik truthy ili falsy

let prom = +prompt("Unesite vrednost");

if (prom) {
	console.log("Vrednost je truthy");
} else if (!prom) {
	console.log("Vrednost je falsy");
}
