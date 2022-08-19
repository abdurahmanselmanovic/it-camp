// while petlja nam omogucava iteraciju nekoliko puta(ne moramo znati tacan broj) i
// uz odredjeni uslov izvrasavanje bloka koda koji smo definisali unutar petlje.

// // Sintax
// while (uslov) {
// 	// blok koda za izvrsavanje
// }

// Ispisati brojeve od 1 do 5
// let broj = 1;
// while (broj <= 5) {
// 	console.log(broj);
// 	broj++; // ne zaboraviti povecanje / smanjenje brojaca
// }

// Ispisati sve brojeve do 1 do 10 koji su parni

// let x = 0;
// while (x <= 10) {
// 	x++;
// 	if (x % 2 === 0) {
// 		console.log(x);
// 	}
// }

// x = 2;
// while (x <= 10) {
// 	console.log(x);
// 	x += 2;
// }

// Traziti od korisnika da unese neki broj. Na osnovu te vrednosti  izvrsiti ispis
// kvadrata brojeva od 1 do tog unetog broja

// let x = Number(prompt("Unesite broj"));
// let y = 1;
// if (isNaN(x)) {
// 	console.log("Niste uneli korektnu vrednost za broj");
// } else {
// 	while (y <= x) {
// 		console.log(y ** 2);
// 		y++;
// 	}
// }

// Korisnik unosi dva broja:
// na osnovu toga koji je broj manji, iteracije se vrsi od njega do veceg broja.
// ispisuju se broejvi od manjeg ka vecem

// let x = Number(prompt("Unesite prvi broj"));
// let y = Number(prompt("Unesite drugi broj"));

// if (isNaN(x) || isNaN(y)) {
// 	console.log("Niste uneli broj");
// } else if (x === y) {
// 	console.log("Uneli ste iste brojeve");
// } else if (x < y) {
// 	while (x <= y) {
// 		console.log(x);
// 		x++;
// 	}
// } else if (x > y) {
// 	while (x >= y) {
// 		console.log(y);
// 		y++;
// 	}
// }

// // do while zapravo predstavljja obrnuti postupak while petlje.
// do {
//     // blok koda koji se izvrsava
// }while(uslov){}

// ispisati brojeve od 1 do 6

// let i = 1;
// do {
// 	console.log(i);
// 	i++;
// } while (i <= 5);

// nedostatak do while ptelje kroz primer

let x = 20;
do {
	console.log(x ** 2);
	x++;
} while (x < 10);
