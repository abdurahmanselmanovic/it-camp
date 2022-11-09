// OBJEKTI SU GLAVNA STVAR U JAVASCRIPTU.
// Objekti su promenljive koje mogu sadrzati vise vrednosti
// oni se zapisuju u name:value paru. Jedan takav par se zove svojstvo.

const car = {
	marka: "BMW",
	godiste: 2004,
	boja: "crna",
};

console.log(car); // ispisivanje objekta

// Svojstvima objekta mozemo da pristupimo na 2 nacina:
// 1.
console.log(car.boja);
// 2.
console.log(car["marka"]);
// 3.
console.log(car?.boja);
