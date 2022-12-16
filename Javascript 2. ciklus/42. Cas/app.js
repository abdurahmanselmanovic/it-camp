// console.log(myFunc(1, 3));

// // Ne vazi hoisting za promenljive koje su funkcije. (definisane na bilo koji nacin)
// function myFunc(a, b) {
// 	return a + b;
// }

// function myFunc2() {
// 	let broj = 4;
// 	let predmet = "stolice";
// 	return `u prostor imamo ${broj} ${predmet}`;
// }

// console.log(myFunc2());
// Poznata je cinjenica da kada se izvrsi funkcija sve njene lokalne promenljive pokupi 'garbage' kolektor i one prestaju da postoje u memoriji. To nije slucaj ako postoji funkcija koja zahteva koriscenje promenljivih iz domena druge funkcije. To se najcesce postize ugradjivanjem funckije unutar druge funkcije

function myfunc() {
	let broj = 4;
	let predmet = "stolice";
	function myfunc2(arg) {
		console.log(arg + broj);
	}
	myfunc2(20);
	return `To je bio primer Closure u js-u`;
}

console.log(myfunc());

// Closure je funkcija koja zahteva koriscenje promenljivih iz domena druge funkcije

s;
