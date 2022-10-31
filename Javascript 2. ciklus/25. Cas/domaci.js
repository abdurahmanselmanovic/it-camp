const nizBrojeva = [2, 26, 38, 75, 11, 29];
function firstTask(arr) {
	const duzina = arr.length;
	const suma = arr.reduce((prev, curr) => {
		return prev + curr;
	});
	return +(suma / duzina).toFixed(2);
}

console.log(firstTask(nizBrojeva));
