//  operatori u JavaScript-u
// operatori u JS se dele na sledece:
// 1. Aritmeticki operatori;
// 2. Operatore dodele vrednosti;
// 3. JS String operatore;
// 4. Operatori poredjenja;
// 5. Logicki operatori;
// 6. Tipovni operatori;

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
