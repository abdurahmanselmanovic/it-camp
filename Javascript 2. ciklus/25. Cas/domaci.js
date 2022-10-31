const nizBrojeva = [2, 26, 38, 75, 11, 29];
function firstTask(arr) {
	const duzina = arr.length;
	const suma = arr.reduce((prev, curr) => {
		return prev + curr;
	});
	return +(suma / duzina).toFixed(2);
}

console.log(firstTask(nizBrojeva));

const secondTask = (arr) => {
	const kilometers = arr
		.map(function (element) {
			return +(element * 1.609).toFixed(1);
		})
		.reduce((prev, curr) => {
			return prev + curr;
		});
	return kilometers;
};

console.log(secondTask(nizBrojeva));
