// Node je runtime koji vrsi egzekuiju i kompajlovanje javascript koda
// Node ima mnostvo svojih modula, najpoznatiji su fs(fileSystem) i http modul

// const fs = require("fs");

// fs.writeFile("text.txt", "sadasd");

// class car {
// 	constructor(name, type) {
// 		this.name = name;
// 		this.type = type;
// 	}
// 	fullName() {
// 		return console.log(this.name + " " + this.type);
// 	}
// }

// const newCar = new car("audi", "limuzina");

// console.log(newCar);

// newCar.fullName();

// class User {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}
// 	fullName() {
// 		return console.log(this.name + " " + this.surname);
// 	}
// }

// const newUser = new User("abdurahman", "selmanovic");

// console.log(newUser);

// newUser.fullName();

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

class AdditionalInfo extends User1 {
	statesArr = [
		{
			state: "USA",
			cId: "+1",
		},
		{
			state: "UK",
			cId: "+44",
		},
		{
			state: "Mexico",
			cId: "+52",
		},
		{
			state: "India",
			cId: "+91",
		},
		{
			state: "China",
			cId: "+86",
		},
		{
			state: "Serbia",
			cId: "+381",
		},
	];
	constructor(street, city, state, phoneNumber) {
		super(newUser1.name, newUser1.lname, newUser1.age, newUser1.yearOfBirth);
		this.street = street;
		this.city = city;
		this.state = state;
		this.phoneNumber = phoneNumber;
		this.number = this.numberHandler(this.state, this.phoneNumber);
	}
	numberHandler(state, phoneNumber) {
		this.findState = this.statesArr.find((s) => s.state === state);
		return phoneNumber.replace(phoneNumber[0], this.findState.cId);
	}
}

const Additional = new AdditionalInfo(
	"rifata b",
	"novi pazar",
	"Serbia",
	"074213123"
);

console.log(Additional);
