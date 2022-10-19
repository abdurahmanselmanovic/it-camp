const firstTask = (arr) => {
	const parni = [];
	for (let broj of arr) {
		if (broj % 2 === 0) {
			parni.push(broj);
		}
	}
	return parni;
};

console.log(firstTask([1, 2, 3, 4, 5, 6, 7, 8, -32, -12, -23]));

const secondTask = (arr) => {
	const neparni = [];
	for (let broj of arr) {
		if (broj % 2 !== 0 && !isNaN(broj)) {
			neparni.push(broj);
		}
	}
	return neparni;
};

console.log(secondTask([1, 2, 3, 4, 5, 6, 7, 8, -32, -12, -23]));
