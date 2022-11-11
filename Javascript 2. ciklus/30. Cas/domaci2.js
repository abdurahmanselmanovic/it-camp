const student = {
	ime: "Ahmed",
	prezime: "Krkmisevic",
	brojIndeksa: "023212",
	ocene: [7, 10, 9, 6, 5, 8],
	prosekOcena: function () {
		const brojOcena = this.ocene.length;
		const suma = this.ocene.reduce((prev, curr) => {
			return prev + curr;
		});
		const prosek = suma / brojOcena;
		return `Prosek trenutnih ocena ${this.ime}a je ${prosek}`;
	},
};

console.log(student.prosekOcena());
