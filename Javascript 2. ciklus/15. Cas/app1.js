// JS Date objects //

// Datumi se prave uz sintaksu:
new Date();

// Postoje 4 nacina da dobijemo neki datum:

// 1. new Date() - trenutno vreme

let datum = new Date();
console.log(datum);

// 2. new Date(godina, "mesec",dan , sat,minut,sekudna, milisekunda )
// JS mesece racuna od 0 do 11
// ovaj nacin je validan ako imamo bar 2 argumenta a maksimum 7
let datum2 = new Date(2008, 8, 29, 23, 23, 37, 12, 44);
console.log(datum2);

let datum3 = new Date(2008, 8);
console.log(datum3);

// 3. new Date(milisekunde)
// Pocetni datum: 1970-01-01

let datum4 = new Date(53e12); // dodaje 53e12 da pocetni datum
console.log(datum4);

// 4. new Date(date string)

let datum5 = new Date("2015-03-25");
console.log(datum5);

// Ako u prvom argumentu (godina) stavimo samo dve cifre, JS posmatra to kao prosli
// vek te automatski tim dvema ciframa prethodi 19..

let datum6 = new Date(20, 7);
console.log(datum6);

// JS Skladisti datume kao broj milisekudni.

// Prikazivanje datuma:

// Postoji nekoliko metoda za prikazivanje datuma. Sintaksa je: datum.method()

// 1. datum.toString()
console.log(datum6.toString());
