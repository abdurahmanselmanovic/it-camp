// Napraviti novi niz sa brojevima vecim od 17. Iteraciju izvrsiti preko for petlje

const niz = [4, 7, 25, 32, 42, 14, 29, 19];
const noviniz = [];
for (let arr of niz) {
	if (arr > 17) {
		noviniz.push(arr);
	}
}
console.log(noviniz);
