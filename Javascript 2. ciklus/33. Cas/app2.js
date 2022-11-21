const abdurahman = "Abdurahman";
const selmanovic = "Selmanovic";
const godine = 14;
const skola = "Bratstvo";

const person = {
	abdurahman: abdurahman,
	selmanovic: selmanovic,
	godine: godine,
	skola: skola,
};

const person2 = {
	abdurahman,
	selmanovic,
	godine,
	skola,
};
console.log(person2);
// Destructuring:
const automobil = {
	marka: "Audi",
	model: "Q7",
	boja: "Bela",
};
console.log(automobil.model);

const boja = automobil.boja;
const { marka, model } = automobil; // destructuring
console.log(marka, model);
