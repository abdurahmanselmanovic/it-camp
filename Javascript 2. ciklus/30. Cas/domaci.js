const objekat = {
	ime: "Abdurahman",
	prezime: "Selmanovic",
	brojindeksa: "032939128",
	ocene: [7.9, 10, 6, 5, 8],
	prosekOcena: function () {
		let brojac = 0;
		let zbirBrojeva = 0;
		for (const iterator of objekat.ocene) {
			brojac++;
			zbirBrojeva += iterator;
		}
		return (zbirBrojeva / brojac).toFixed(2);
	},
};

console.log(objekat.prosekOcena());
