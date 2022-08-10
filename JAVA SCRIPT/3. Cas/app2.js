//  operatori u JavaScript-u
// operatori u JS se dele na sledece:
// 1. Aritmeticki operatori;
// 2. Operatore dodele vrednosti;
// 3. JS String operatore;
// 4. Operatori poredjenja;
// 5. Logicki operatori;
// 6. Tipovni operatori;
//
//                                  1. Aritmeticki operatori
//  +sabiranje
console.log(5 + 2);
//  - oduzimanje
console.log(5 - 2);
//  * mnozenje
console.log(5 * 2);
// ** stepenovanje
console.log(5 ** 2);
// / Deljenje
console.log(10 / 2);
// % Moduo
console.log(5 % 2);
console.log(12 % 2);
console.log(13 % 5);
// ++ Povecanje za 1:
let x = 5;
x++;
console.log(x);
// -- Smanjenje za 1:
let y = 5;
y--;
console.log(y);
//                                  2. Operatori dodele vrednosti
// = jednako
let a, b;
a = 10;
b = a;
console.log(a);
console.log(b);
// +=
let c = 15;
c += 5; // c = c + 5
console.log(c);
// -=
var d = 15;
d -= 5;
console.log(d);
// *=
var d = 15;
d *= 5;
console.log(d);
// /=
var d = 15;
d /= 5;
console.log(d);
// %=
var d = 15;
d %= 5;
console.log(d);
// **=
var d = 15;
d **= 5; // d = d = 15 ** 5
console.log(d);
//                                 3. JavaScript string operatori;
// Za spajanje stringova mozemo iskoristiti + operator
// Ako izvrsimo dodavanje stringa nekom broju (broja nekom stringu) preko + operatora dobicemo string
var m, n;
m = "Danas je bilo";
n = "lepo vreme";
console.log(m + " " + n);

console.log(55 + m);

// Neke karakteristike vezane za +,-,*,/
console.log(5 + "5");
console.log(5 - "4");
console.log(5 - "4ds"); // uvek u slucaju nemogucnosti konvertovanja nekog stringa u broj, JS nam vraca NaN (NotANumber)
console.log(5 * "4");
console.log(5 / "4");

console.log((c += 2));

//  4. Operatori poredjenja

// ==  - Proverava jednakost vrednosti
var r, t;
r = 56;
t = -56;
console.log(r == t); // false

// ===  -  Proverava jednakost vrednosti i tipa
let prom1, prom2;
prom1 = 14;
prom2 = "14";
// console.log(prom1 == prom2); bolje je koristiti operator ===
console.log(prom1 === prom2);

// != Proverava nejednakost vrednosti
let prom3, prom4;
prom3 = 25;
prom4 = "25";
console.log(prom3 != prom4);

// !== Proverava nejednakost vrednosti ili nejednakost tipa
let prom5, prom6;
prom5 = 25;
prom6 = 25;
console.log(prom5 !== prom6);

let prom7, prom8;
prom7 = 26;
prom8 = "25";
console.log(prom7 !== prom8);

// > - Proverava da li je prva promenljiva veca od druge

let prom9, prom10;
prom9 = 52;
prom10 = 25;
console.log(prom9 > prom10);

// > - Proverava da li je prva promenljiva manja od druge

let prom11, prom12;
prom11 = 52;
prom12 = 25;
console.log(prom11 > prom12);

// >= - Proverava da li je prva promenljiva veca ili jednaka od druge

let prom13, prom14;
prom13 = 50;
prom14 = 50;
console.log(prom13 >= prom14);
// <= - Proverava da li je prva promenljiva manja ili jednaka od druge

let prom15, prom16;
prom15 = 46;
prom16 = -46;
console.log(prom15 <= prom16);

// ? - ternarni operator
// sintaxa za njega je:
// condition ? exprIfTrue : exprIfFalse

// 5. JS Logicki operatori;
//&&  - Logicko i (and)
let var1, var2;
var1 = 40;
var2 = 17;
console.log(var1 > 20 && var2 < 20); // moraju oba zahteva da budu tacna (true)
console.log(var1 > 20 && var2 > 20); // jedan uslov nije ispunjen (false)

// || - Logicko ili
var1 = 40;
var2 = 17;
console.log(var1 > 20 || var2 > 20); //mora samo jedan uslov da bude ispunjen
