// RADNO VREME 9 DO 17
const myFunction = () => {
	const hours = +prompt("Unesite sat");
	const minutes = +prompt("Unesite minute");
	if (isNaN(hours) || isNaN(minutes)) {
		return "Uneli ste pogresnu satnicu";
	} else if (hours >= 9 && hours < 17) {
		return "Stigli ste";
	} else {
		return "Zakasnili ste";
	}
};

console.log(myFunction());
