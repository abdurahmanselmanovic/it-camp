// Number tip podatka

// JavaScript poznaje samo number tip podatka.
// I brojevi mogu biti zapisani sa ili bez decimalnog zapisa.

// U JavaScriptu aritmeticke operaciju nisu uvek 100% tacne. IMATI NA UMU!!!
let a = 0.2;
let b = 0.1;
let c = a + b;
console.log(c);

// Sto se tice extra velikih ili malih slova, oni mogu biti zapisani koriscenjem (exponent) oznake

let x = 123000000;
console.log(x);
let x2 = 123e6; //Ovo je isto sto i 123 * 1 000 000
console.log(x2);

let y = 123e-6; // Ovo je isto sto i 123 / 1 000 000
console.log(y);

// Dodavanje brojeva stringovima i obratno:
console.log(18 + "45");
console.log("63" + 44);
console.log("sd" + 32);
console.log("401s" - 46);
console.log(85 / "78a");
console.log(47 / "27");
console.log("sd" + 32);
console.log("401s" - 46);

// NaN Not A Number

// NaN je js rezervisana rec koja ukazuje da broj zapravo nije legalni broj
