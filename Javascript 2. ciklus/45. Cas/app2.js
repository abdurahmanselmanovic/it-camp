//                                   callback
const punoletnost = new Promise((resolve, reject) => {
	const osoba = {
		ime: "Dzenan",
		prezime: "Kosuta",
		godine: 15,
	};
	if (osoba.godine > 17) {
		resolve("Vi ste punoletni");
	} else {
		reject(osoba.godine);
	}
});

punoletnost
	.then((a) => console.log(a))
	.catch((b) => console.log(`Imate ${b} godina`))
	.finally(() => console.log(""));
