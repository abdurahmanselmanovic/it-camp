// Node je runtime koji vrsi egzekuiju i kompajlovanje javascript koda
// Node ima mnostvo svojih modula, najpoznatiji su fs(fileSystem) i http modul

// const fs = require("fs");

// fs.writeFile("text.txt", "sadasd");

class car {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	fullName() {
		return console.log(this.name + " " + this.type);
	}
}

const newCar = new car("audi", "limuzina");

console.log(newCar);

newCar.fullName();

class user {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	fullName() {
		return console.log(this.name + " " + this.surname);
	}
}

const newUser = new user("abdurahman", "selmanovic");

console.log(newUser);

newUser.fullName();
