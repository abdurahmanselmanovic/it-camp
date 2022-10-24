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
