// 3. napraviti funkciju za pretvaranje radijana u stepene.

const myFunction = () => {
	const radians = +prompt("Unesite radian");
	if (isNaN(radians)) {
		return "Uneti broj nije ispravan";
	} else {
		return radians * (180 / Math.PI);
	}
};

console.log(myFunction());
