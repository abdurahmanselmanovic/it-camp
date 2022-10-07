// Rastojanje izmedju dve tacke u prostoru.
// ako su zadate koordinate krajnjih tacaka

const myFunction = () => {
	let x1 = +prompt("Unesite X koordinatu tacke A");
	let y1 = +prompt("Unesite Y koordinatu tacke B");
	let x2 = +prompt("Unesite X koordinatu tacke A");
	let y2 = +prompt("Unesite Y koordinatu tacke B");
	const rastojanje = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	const rastojanjeKonacno = +rastojanje.toFixed(2);
	return `Rastojanje izmedju tacke A i tacke B je ${rastojanjeKonacno}`;
};

console.log(myFunction());
