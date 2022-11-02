// reduceRight() ista kao reduce metoda samo sto ucitavanje niza ide sa desne strane

const niz = [1, 2, 3, 4, 5];
const suma = niz.reduceRight((prev, curr) => prev + curr);

// every() metoda ispituje da li je svaki element niza prosao test. Rezultat je boolean(true ili false)

const godine = [15, 14, 18, 18, 18, 16, 19, 17, 19];
const isEveryAdult = godine.every((element) => element >= 18);
console.log(isEveryAdult);
const adultArr = godine.filter((element) => element >= 18);
console.log(adultArr);
const isEveryAdult2 = adultArr.every((element) => element >= 18);
console.log(isEveryAdult2);
