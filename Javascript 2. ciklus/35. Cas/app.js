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
