const fudbalskiTeren = () => {
	let duzinaTerena = +prompt("Unesite duzinu terena");
	let sirinaTerena = +prompt("Unesite sirinu terena");
	let rastojanjeOgradeOdTerena = +prompt("Unesite rastojanje ograde od terena");
	let obimOgrade = 0;
	if (
		isNaN(duzinaTerena) ||
		isNaN(sirinaTerena) ||
		isNaN(rastojanjeOgradeOdTerena)
	) {
		return "Uneti brojevi su neodgovarajuci";
	} else if (duzinaTerena < 90 || duzinaTerena > 120) {
		return "Uneti brojevi duzine terena nisu u opsegu od 90 do 120";
	} else if (sirinaTerena < 45 || sirinaTerena > 90) {
		return "Uneti brojevi sirine terena nisu u opsegu od 45 do 90";
	} else if (rastojanjeOgradeOdTerena < 2 || rastojanjeOgradeOdTerena > 10) {
		return "Uneti brojevi rastojanja ograde od terena nisu u opsegu od 2 do 10";
	} else {
		obimOgrade =
			2 * (duzinaTerena + sirinaTerena + 4 * rastojanjeOgradeOdTerena);
	}
	return obimOgrade;
};

console.log(fudbalskiTeren());
