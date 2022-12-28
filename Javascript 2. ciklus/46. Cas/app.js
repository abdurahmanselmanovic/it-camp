// const je skraceno od constant i njoj se vrednost ne menja
// var je varijabla odnosno promenjiva
// let je promenljiva unutar jednog bloka koda

const randomObj = {
	name: "Abdurahman",
	lname: "Selmanovic",
	city: "Novi Pazar",
	age: 26,
};

// destrukturizacija objekata - object destruction
// razlaganje delova objekata na zasebne promenljive

// const { name, lname, city, age } = randomObj;

// console.log(name);

const newObj = {
	...randomObj,
	age: 27,
};

if (newObj.age === 27) {
	console.log(newObj);
} else {
	console.log("Error");
}

newObj.age === 22 ? console.log(newObj) : console.log("error");

// = -inicijalizacija(dodela) vrednosti promenljivoj
// == -provera tacnosti
// === -provera tacnosti i tipa podatka

// Class based components su komponente bazirane na klasama i metodama

// += povecava i dodaje vrednost
// ++ increment (dodaje za 1)
//
