// Napraviti novi niz sa brojevima vecim od 17. Iteraciju izvrsiti preko for petlje

const niz = [4, 7, 25, 32, 42, 14, 29, 19];
const noviniz = [];
for (let arr of niz) {
	if (arr > 17) {
		noviniz.push(arr);
	}
}
console.log(noviniz);

// filter() metoda kreira novi niz sa onim elementima koji su presli test.
// Preko filter metode dobijamo novi niz cija je max duzina jednaka
// duzini niza na koji se primenjuje metoda, a minimalna duzina je 0
// Odaradiomo prethodni zadatak na drugi nacin.
//                      predstavlja uslob na osnovu kojeg se element dodaje u niz ili ne dodaje
const niz3 = niz.filter((element) => {
	return element > 17;
});

console.log(niz3);
// const niz = [4, 7, 25, 32, 42, 14, 29, 19];
const niz4 = niz.filter((element) => {
	return element % 2 === 0;
});
console.log(niz4);

const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"];
const niz5 = words.filter((element) => {
	return element[1] === "e";
});
console.log(niz5);

const niz6 = words.filter((element) => {
	return element.length <= 6;
});
console.log(niz6);

const newArr = ["Rec", "Dvereci", 26, true, false, [true, false], 49, true];
const niz7 = newArr.filter((element) => {
	return typeof element === "boolean";
});
console.log(niz7);

const nizBr = [-14, -5, 22, 34, 55, 54, 29, 12, 6, 7, 10];
const niz8 = nizBr.filter((element) => {
	return element <= 50 && element % 2 === 0;
});
console.log(niz8);

// DOMACI NA GITHUB
