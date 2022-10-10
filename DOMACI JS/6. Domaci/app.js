// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// 1999-05-24 i 2004-09-15

const prviDatum = "24 May 1999";
const drugiDatum = "15 Sept 2004";

console.log(new Date(prviDatum));
console.log(new Date(drugiDatum));

const funkcija = () => {
	const prviDatum1 = new Date(prviDatum);
	const drugiDatum1 = new Date(drugiDatum);

	const totalSec = (drugiDatum1 - prviDatum1) / 1000;

	const days = Math.floor(totalSec / 3600 / 24);

	return `Razlika izmedju ${prviDatum1} i ${drugiDatum1} je ${days} dana`;
};

console.log(funkcija());
