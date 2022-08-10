// Za interakciju sa korisnikom se koristi poseban metod imena prompt()
const ime = prompt("Unesite vase ime");
console.log(ime);
let brojGodina = prompt("Unesite vase godine:  ");
console.log(typeof brojGodina);
// Neki string mozemo prevesti u number na sledeca dva nacina.
// 1. Nacin
brojGodina = +brojGodina;
console.log(typeof brojGodina, brojGodina);
// 2. Nacin
brojGodina = Number(brojGodina);
console.log(brojGodina);
brojGodina = Number(prompt("Unesite broj godina"));
console.log(brojGodina);
