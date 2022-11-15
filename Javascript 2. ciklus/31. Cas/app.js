// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezeika
// 5. setNickName - metoda sastavljen od prva dva slova imena i prva dva slova prezimena

const myObject = {};

myObject.firstName = "Abdurahman";
myObject.lastName = "Selmanovic";
myObject.language = "English";
myObject.setLaunguage = function (jezik) {
	if (this.language !== jezik) {
		this.language = jezik;
	}
};
myObject.nickName = " ";
myObject.setNickName = function () {
	this.nickName =
		this.firstName[0].toUpperCase() +
		this.firstName[1].toLowerCase() +
		this.lastName[0].toLowerCase() +
		this.lastName[1].toLowerCase();
};
console.log(myObject.setLaunguage("srpski"));
console.log(myObject.setNickName());
console.log(myObject);
console.log(myObject.language);
console.log(myObject.nickName);
