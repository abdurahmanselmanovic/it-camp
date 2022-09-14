// trim() metoda brise sve bespotrebne razmake na pocetku i kraju stringa

let recenica = "           Neka dugacka recenica                       ";
console.log(recenica);
console.log(recenica.length);
let skracenaRecenica = recenica.trim();
console.log(skracenaRecenica);
console.log(skracenaRecenica.length);

// Postoje 3 metoda za ekstraktovanje stringova:
// 1. charAt(position,)
// 2. chatCodeAt(position)
// 3. pritupanje preko[]
console.log(skracenaRecenica.charAt(13));
console.log(skracenaRecenica.charCodeAt(13));
console.log(skracenaRecenica[13]);
// Pristupanje nepostojecem indeksu se odrzava razlicito u zavisnosti od toga da li koristimo
// metodu charAt() ili pristupamo preko []
console.log(skracenaRecenica.charAt(126));
console.log(skracenaRecenica[126]);
