// startsWith() metoda nam vraca boolean u zavisnosti da li dati string pocinje recju koja je smestena
// arugment metode:

var recenica = "Provera stringova.";
console.log(recenica.startsWith("provera"));

// endsWith() metoda nam vraca booleam i zavisnosti da li dati string zavrsava recju
// koja je smestena kao argument metode:

console.log(recenica.endsWith("ingova."));

// JS TEMPLATE LITERALS
// Back-Ticks ``
// Prva prednost u odnosu na navodnike je sto pisanje navodnika unutar stringa nam nece vratiti gresku.
var recenica = `Danas je bilo pravo "jesenje" vreme.`;
// Omoguceno je pisanje stringa u vise redova
var recenica3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus augue ligula, molestie et nisi in, vulputate tempus neque.\
Nam commodo lacinia quam, at rutrum eros fringilla quis.
Duis molestie nunc dolor, et sodales quam accumsan ut.
Cras eu lacus augue. Nulla a pulvinar quam. Phasellus et posuere lorem, quis dictum nunc.
Aenean quam lorem, dapibus at dictum at, fermentum et nisl. Vestibulum non dictum ante.
Praesent rhoncus dui vitae convallis venenatis.`;

// Interpolacija, mozemo zapisivati string u kombinaciji sa varijablama:
let a = 10;
let b = 14;
let c = `prva vrednost je: ${a}, druga vrednost je: ${b}.`;
console.log(c);
