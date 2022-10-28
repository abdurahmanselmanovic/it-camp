// Domaci zadaci:
// 1. Zadatak
// Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti
//  novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

const niz = [-9, -78, 4, 17, -22, -5, 7, 6, 10, 18];
const myfunction = () => {
	const noviniz = niz.map((element) => {
		if (element > 2 && element < 8) {
			return (element * 4) / 2;
		} else if (element > 2) {
			return element * 7;
		} else {
		}
	});
	const filtriraniniz = noviniz.filter((element) => {
		return element < 10;
	});
	return filtriraniniz;
};

console.log(myfunction());
// 2. Zadatak NAPRAVITI FUNKCIJU
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog
// niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

const myfunction2 = () => {
	const data1idata2 = DATA1.concat(DATA2);
	const parnibrojevi = DATA1.filter((element) => {
		return element % 2 === 0;
	});
	parnibrojevi.unshift(10, 20);
	return data1idata2, parnibrojevi;
};
console.log(myfunction2());
// 2. nacin
const firstTask = (arr) => {
	const filtered = arr.filter((element) => element > 2);
	const mapped = filtered.map((element) => {
		// uslov ? stvar za izvrsavanje : stvar koja se inace izvrsava
		return element < 8 ? (element * 4) / 2 : element * 7;
	});
	const lessThan10 = mapped.filter((element) => {
		return element <= 10;
	});
	return lessThan10;
};
console.log(firstTask(niz));

// Firsttask 3 nacin
// Dozvoljeno je odjednom primeniti vise metoda

const firstTasks = (arr) => {
	const lessThan10 = arr
		.filter((element) => element > 2)
		.map((element) => {
			return element < 8 ? (element * 4) / 2 : element * 7;
		})
		.filter((element) => {
			return element <= 10;
		});
	return lessThan10;
};

console.log(firstTasks(niz));

const secondTask = () => {};
