person = {
	firstName: "muhamed",
	lastName: "krkmisevic",
};

person.fullname = function () {
	return this.firstName.concat(this.lastName);
};

console.log(person);

function User(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

const muhamed = new User("Muhamed", "Krkmisevic");

User.prototype.fullname = function () {
	return this.firstName.concat("  ", this.lastName);
};

console.log(muhamed);

console.log(muhamed.fullname());

// Opcija je preko funkcije na sledeci nacin

// unutar objekta userfuntions stavljamo sve metode koje zelimo dodati u
// objekte napravljene na sledeci nacin
const userFunctions = {
	fullname: function () {
		return this.firstName.concat(this.lastName);
	},
};

function createUser(firstName, lastName) {
	const newUser = Object.create(userFunctions);
	newUser.firstName = firstName;
	newUser.lastName = lastName;
	return newUser;
}
console.log(createUser());

const ahmed = createUser("ahmed", "krkmisevic");
console.log(ahmed);
console.log(ahmed.fullname());

document.getElementById("demo").innerHTML = "ssss";
