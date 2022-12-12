// Unose se dva stringa a i b. kreirati novi string kao kombinaciju stringova a i b, tako sto je kombinuju prvi sa prvim drugi sa drugim treci sa trecim znako itd. ako je jedan string duzi od drugog, na kraju samo dodati znakove viska.

const myFunction = (a, b) => {
	const duzina = a.lenght > b.lenght ? a.lenght : b.lenght;
	const nova = "";
	for (let i = 0; i < duzina; i++) {
		if (a[i] !== undefined && b[i] !== undefined) {
			nova += a[i] + b[i];
		} else if (a[i] === undefined) {
			nova += b[i];
		} else if (b[i] === undefined) {
			nova += a[i];
		}
	}
	return nova;
};

console.log(myFunction("pera", "sladoled"));
