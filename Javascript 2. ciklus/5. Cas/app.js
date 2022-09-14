const domaci = () => {
	let nekaRecenica = prompt("Unesite neku recenicu: ");
	let duzina = nekaRecenica.length;
	let polaDuzine = duzina / 2;
	let prviDeo = nekaRecenica.substr(0, polaDuzine).toUpperCase();
	let drugiDeo = nekaRecenica.substr(polaDuzine, duzina).toLowerCase();
	let prva = nekaRecenica.toUpperCase();
	let druga = nekaRecenica.toLowerCase();
	let treci = prviDeo.concat(drugiDeo);
	let cetvrta = nekaRecenica.replace(/skola/g, "fakultet");
	let peta = nekaRecenica.slice(0, 10);
	let sesta = nekaRecenica.slice(-10, duzina);
	return prva.concat(
		"\n",
		druga,
		"\n",
		treci,
		"\n",
		cetvrta,
		"\n",
		peta,
		"\n",
		sesta
	);
};

console.log(domaci());
