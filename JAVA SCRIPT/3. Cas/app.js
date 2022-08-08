//var
// Redeklarisanje (ponovo delkarisanje neke promenljive) je dozvoljeno izvrsiti bilo gde u programu

var x = 14;
console.log(x);
var x = 16;
console.log("string");
console.log(x);

// let
// redeklaracija (ponovno deklarisanje neke promenjlive) nije dozvojeno ,ako govorimo o istom prostoru
//  o istom prostoru na kom je izvrsena prva deklaracija.

let y = 10;
console.log(y);
// let y = 20; nece biti dozvoljeno

// Block scope(prostor) nam obezbedjuju let i const keywords

{
	// console.log(y) Nece izvrsiti prikazivanje y jer u block scope nije poznata deklaracija promenljive
	let y = 19;
	console.log(y);
}

console.log(y);

// let nam ne dozvoljava redeklaraciju (ako smo u istom scope-u(prostoru)) ,
// ali je moguce izvrsiti reinicijalizaciju (dodeljivanje druge vrednosti )

let z = 10;
z = 12;

// const
// Promenljive koje su definisane pomocu const keyword
// NE MOGU BITI NI REDEKLARISANE NI REINICIJALIZOVANE.

const w = 16;
// const w = 14; ne moze se redeklarisati
console.log(w);
// w = 20;

// Karakteristike koje vaze za let kod block scope_a vaze u za promenljive definisane putem const.

// let dozvoljava sledece;
let prom;
prom = 40;

// const je striktna i kod nje mora odjednom izvrisiti deklaracija i inicijalizacija.
const prom2 = 12;
