// Napraviti funkciju koja nam vraca novi niz koji nema duplikata"

const niz = [12, 1, 3, 2, 3, 4, 6, 4];

function eraseDuplicate(arr) {
	const newarr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!newarr.includes(arr[i])) {
			newarr.push(arr[i]);
		}
	}
	return newarr;
}

console.log(eraseDuplicate(niz));

// const eraseDuplicate2 = (arr) => {
// 	let newarr = arr.filter((element) => {
// 		return !newarr.includes(element);
// 	});
// 	return newarr;
// };

// console.log(eraseDuplicate2(niz));

// ... spread operator nam sluzi za pravljenje kopije niza ili objekta, kao i spajanje vise nizova(objekata).

const niz1 = ["sto", "stolica", "tabla", "marker"];
const niz2 = [...niz1, "kuca"];
console.log(niz2);
// spajanje nizova
const niz3 = [...niz, ...niz1];
console.log(niz3);
const niz4 = [15, ...niz2, 150];
console.log(niz4);

const obj = {
	ime: "Muhamed",
	prezime: "Krkmisevic",
	starost: 17,
};

const newobj = {
	...obj,
	bojakose: "crna",
	kovrdzav: false,
};
console.log(newobj);

// Napraviti funkciju koja vraca novi niz, gde je svaki element objekat sa vrednostima title i budget.

const movies = [
	{
		title: "Iception",
		rating: 8,
		budget: "230M",
	},
	{
		title: "Interstelar",
		rating: 5,
		budget: "200M",
	},
	{
		title: "GodFather",
		rating: 9,
		budget: "280M",
	},
	{
		title: "Home Alone",
		rating: 4,
		budget: "300M",
	},
	{
		title: "Bad Boys",
		rating: 8,
		budget: "180M",
	},
];

function just2(arr) {
	const newarr = arr.map(function (element) {
		return {
			title: element.title,
			budget: element.budget,
		};
	});
	return newarr;
}

console.log(just2(movies));
