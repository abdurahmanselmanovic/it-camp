// JS Number metode:

// toString() - metoda vraca broj kao string.
let x = 55;

console.log(x);
console.log(typeof x);

let y = x.toString();
console.log(y);
console.log(typeof y);
// toString() metoda se moze primeniti na svaki tip podataka.
// Ne samo na number tip podatka

// toExpential() - metoda nam vraca broj zapisan u obliku
// (123e5), ciji tip je zapravo string
let z = 1.4;
let w = z.toExponential();
console.log(w);
console.log(typeof w);

// toFixed() metoda ce zaokruziti neki broj na onoliko decimala
// u zavisnosti od toga koji broj se nadje kao arugment date metode.

let prom = 22.4569;
let prom2 = prom.toFixed(2);
console.log(prom2);
console.log(typeof prom2);

// toPrecision() metoda ce zapravo pretvoriti nas broj
// u broj koji ukupno ima onoliko cifara u zavisnosti od toga koji
// broj se nadje kao argument date metode

prom = 22.4569;
let prom3 = prom.toPrecision(5);
console.log(prom3);

// valueOf() metoda nam vraca vrednost datog argumenta.

let prom4 = 25;
console.log(prom.valueOf());

// valueOf() metoda se moze primeniti na svaki tip podataka.
// Ne samo na number tip podatka

// Globalne JS metode

// Globalne js metode mogu biti koriscene na sve tipove podataka.

// Najpoznatije globalne metode su:

// 1. Number() vraca nam broj, konvertovan iz argumenta

console.log(Number("55464"));
console.log(Number(false));
console.log(Number(false + true + true));
console.log(Number("41        "));
console.log(Number("41 56")); // razmaci nisu dozvoljeni
console.log(Number("41s"));

// 2. parseFloat() analizira argument i vraca broj zapisan u decimalnom zapisu

console.log(parseFloat("55464"));
console.log(parseFloat(false));
console.log(parseFloat(false + true + true));
console.log(parseFloat("41        "));
console.log(parseFloat("41 56")); // razmaci nisu dozvoljeni
console.log(parseFloat("41s"));
console.log(parseFloat("s41s"));

// parseFloat() zapravo analizira prve karakter, sve dok ne dodje do razmaka ili nekog znaka koji nije broj. I onda pretvori te pocetne brojeve u jedan number.

// Dok u slucaju d aje prvi karakter neki znak ili slovo, rezultat ce biti NaN

// 3. parseInt() metoda analizira argument i vraca ceo broj u decimalnom zapisu.

console.log(parseInt("55464"));
console.log(parseInt(false));
console.log(parseInt(false + true + true));
console.log(parseInt("41        "));
console.log(parseInt("41 56")); // razmaci nisu dozvoljeni
console.log(parseInt("55s"));
console.log(parseInt("14.3"));

// Kod metoad parseInt() i parseFloat() su dozvoljeni razmaci i analizira se samo prva "rec"
// Kod number metode razmaci nisu dozvoljeni
