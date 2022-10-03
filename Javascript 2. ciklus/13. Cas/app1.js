const myFunction = (broj) => {
	brojString = broj.toString();
	let obrnutiBroj = "";
	let duzina = brojString.length;
	for (let i = duzina - 1; i >= 0; i--) {
		obrnutiBroj += brojString[i];
	}
	if (obrnutiBroj === brojString) {
		return true;
	} else {
		return false;
	}
};

console.log(myFunction(353));
