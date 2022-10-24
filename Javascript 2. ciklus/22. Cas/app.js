// Prvi deo napraviti pomocni niz koji se sadrzati elemente od oba niza.
// Drugi deo napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve
// treci deo u drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20
// funkcija na kraju treba da vrato dva napravljena pomocna niza.

// Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza
const numbers = [2, 5, 10, 3, 4, 5, 8];
const niz = numbers.map((element) => {
	return element ** 2;
});

console.log(niz);

// Napraviti novi niz koji sarzi kvadratne korene elemenata postojeceg niza

const niz2 = numbers.map((element) => {
	return +Math.sqrt(element).toFixed(2);
});

console.log(niz2);

console.log(typeof niz2[2]);

// 4. Zadatak
// Kvadrirati one brojeve koje imaju index 0 , 3 ,5
const niz3 = numbers.map((element, index) => {
	if (index === 0 || index === 3 || index === 5) {
		return element ** 2;
	} else {
		return element;
	}
});

console.log(niz3);

const niz4 = numbers.map((element, index) => {
	return index === 0 || index === 3 || index === 5 ? element ** 2 : element;
});

console.log(niz4);
