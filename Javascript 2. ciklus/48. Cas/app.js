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
		return phoneNumber.replace(phoneNumber[0], this.findState.cId + " ");
	}
	ispis() {
		return {
			name: newUser1.name,
			lname: newUser1.lname,
			yearOfBirth: newUser1.yearOfBirth,
			street: this.street,
			city: this.city,
			state: this.city,
			num: this.number,
		};
	}
}

const Additional = new AdditionalInfo(
	"rifata b",
	"novi pazar",
	"USA",
	"038192381293812"
);

console.log(Additional.ispis());
// // // // // // // // \\ \\ \\ \\ \\ \\ \\ \\
// // // // // // // //   \\ \\ \\ \\ \\ \\ \\ \\
// // // // // // // //     \\ \\ \\ \\ \\ \\ \\ \\
