// Napraviti funkciju koja iz nekog niza menja sve elemente na parnim pozicijama recju "paran broj"
//

const secondTask = (arr) => {
	let duzina = arr.length;
	for (let i = 0; i <= duzina; i++) {
		if (i % 2 === 1) {
			arr[i] = "paran broj";
		}
	}
	return arr;
};

let myarray = [("prvi", "drugi", "treci", "cetvrti", "peti")];
// 0		1		 2 			3		 4
console.log(secondTask([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));

const secondtask = (arr) => {
	let duzina = arr.length;
	for (let i; i <= duzina; i++) {
		if (i % 2 === 1) {
		}
	}
};
