// reduce() metoda vrsi takodje iteraciju kroz svaki element, s tim sto
// ona kao rezultat daje jedan broj
// Najcesca primena reduce() metode je kada zelimo sumu elemenata niza

const korpa = [1600, 900, 1400, 220, 1490];
// U slucaju da kupujemo direktno u radnji.
const zbir = korpa.reduce(
	(previousValue, currentValue) => previousValue + currentValue
);

console.log(zbir);

// U slucaju da kupujemo online i placa se postarina od 500rsd
// reduce metoda dozvoljava inital value, i ona se upisuje nakon funkcije.
// Zapravo kao drugi opcioni argument reduce() metode
// niz.reduce(function(){}, inital value)

const onlineZbir = korpa.reduce((previousValue, currentValue) => {
	return previousValue + currentValue;
}, 500);

console.log(onlineZbir);

const godine = [15, 14, 19, 18, 17, 18, 20, 13];
// napraviti funkciju koja vraca zbir godina koje su vece od 17.
const myfunction = (arr) => {
	const punoletni = arr.filter((element) => {
		return element > 17;
	});
	const zbir = punoletni.reduce((previousValue, currentValue) => {
		return previousValue + currentValue;
	});
	return zbir;
};

console.log(myfunction(godine));

function sumAdult2nd(arr) {
	const zbir = arr.reduce((prev, curr) => {
		if (curr >= 18) {
			return prev + curr;
		} else {
			return prev;
		}
	}, 0);
	return zbir;
}
console.log(sumAdult2nd(godine));
