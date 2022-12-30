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

class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
	fullName() {
		return console.log(this.name + " " + this.surname);
	}
}

const newUser = new User("abdurahman", "selmanovic");

console.log(newUser);

newUser.fullName();

// Create a new ckass user with data like name, lName, yearsOfBirth

class User1 {
	constructor(name, lname, yearOfBirth) {
		this.name = name;
		this.lname = lname;
		this.yearOfBirth = yearOfBirth;
		this.age = this.godine(yearOfBirth);
	}
	godine() {
		return 2022 - this.yearOfBirth;
	}
}

const newUser1 = new User1("abdurahman", "selmanovic", 2008);

console.log(newUser1);
newUser1.godine();
