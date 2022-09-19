const myFunction = () => {
	const brojCokoladicaUJednomPaketu = +prompt(
		"Unesite broj cokoladica u jednom paketu"
	);
	const ukupnaKolicinaCokoladica = +prompt(
		"Unesite ukupnu kolicinu cokoladica"
	);
	if (brojCokoladicaUJednomPaketu > 20) {
		return "Maksimalan broj cokoladica u jednom paketu je 20";
	} else {
		return Math.floor(ukupnaKolicinaCokoladica / brojCokoladicaUJednomPaketu);
	}
};
console.log("Broj paketa koji je potreban: " + myFunction());
