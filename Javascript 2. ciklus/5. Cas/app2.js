// HOISTING

a = 5;
console.log(a);

// let a; Deklarisanje nakon inicijalizacije nije dozvoljeno putem let keyword
// const a; Deklarisanje nakon inicijalizacije nije dozvoljeno putem const keyword
var a; // Deklarisanje nakon inicijalizacije jeste dozvoljeno putem var keyword
console.log(a);

console.log(myFunction());

// Hoisting se nece izvrsiti
const myFunction = function () {
	let a = 10;
	return 10;
};
// Hoisting ce se izvrsiti
function myFunction() {
	let a = 10;
	return a;
}
// Hoisting se nece izvrsiti
const myArrowFunc = () => {
	let a = 15;
	return a;
};

// Dobra praksa je uvek prvo deklarisati promenljivu, pa je tek nakon toga koristiti
// Sve kako bismo izbegli eventualne greske u kodu.
