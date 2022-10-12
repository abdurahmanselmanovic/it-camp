// Arrays(Nizovi)

// Niz (array) je specijalna promenljiva koja moze skladistiti vise od jedne vrednosti
// Sintaksa

const niz1 = ["item1", "item2", "item3"];

// Setimo se pravila da ponovna dodela vrednosti za promenljivu
// niz1 nije moguca. dakle 10 linija koda je nekorektna
// niz1 = ["item1", "item2"];
console.log(niz1);

// Ali treba pomeniti da mozemo izmeniti (dodati, izbrisati) neke elemente niza, kroz primenu brojnih metoda koje cemo raditi
// ubuduce, bez obzira na to sto je niz definisan sa const keyword.

// sto se tice razmaka, novih redova, oni nece uticati na definisanje niza.
//

const cars0 = "Mercedes, bmw, audi, volvo";
console.log(cars0[0]);
const cars = ["Mercedes", "bmw.", "audi", "wolkswagen", "volvo"];

// Pristupanje elementima niza. Slicno kao kod stringova.
// Indeksiranje ide od 0 pa sve do length - 1
console.log(cars[2]);

// duzinu niza dobijamo pomocu metode length
let duzina = cars.length;
console.log(duzina);

for (let i; i <= duzina - 1; i++) {
	console.log(cars[i]);
}

// DRUGI NACIN zapisivanja for petlje je namenjen za svaki iterirajuci objekat.

for (let car of cars) {
	console.log(car);
}

let rec = "iterirajuci";
for (let slovo of rec) {
	console.log(slovo);
}

// Zapravo mozemo na pocetku definisati prazan niz. pa tek onda mu dodeljivati vrednosti.
//

const cars2 = [];
console.log(cars2);
cars2[0] = "BMW";
console.log(cars2);
cars2[1] = "AUDI";
console.log(cars2);
// Prave se rupe u nizu. Nije dobra praksa popunjavanja niza.
cars2[4] = "MERCEDES";
console.log(cars2);

console.log(cars2[2]);

// Mozemo vrlo lako zameniti neki element drugim.

const cars3 = ["Mercedes", "bmw.", "audi", "wolkswagen", "volvo"];
cars3[2] = "Mercedes";
console.log(cars3);

// Videli smo takodje da jedan niz moze sadrzati duplikate
