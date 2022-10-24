// 1. Pomocu map metode napraviti novi niz stringova ciji ce elementi da budu ispisani velikim slovima
// 2. Pomocu for petlje napraviti novi niz koji ce sadrzati  samo  godine vece od 17

stringovi = ["sds", "dsa", "kruska", "jabuka"];
let niz = stringovi.map((element) => element.toUpperCase());
console.log(niz);

niz2 = stringovi.map((element) => {
	return `${element[0].toUpperCase()}${element.slice(1, element.length)}`;
});

console.log(niz2);

const godine = [15, 14, 18, 18, 18, 17, 19, 19];
var punoletni = [];
for (let godina of godine) {
	if (godina > 17) {
		punoletni.push(godina);
	}
}
console.log(punoletni);
