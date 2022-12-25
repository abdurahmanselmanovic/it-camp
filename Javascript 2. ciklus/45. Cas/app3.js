// let i const su promenljive koje obezbedjuju block scope
for (let i = 0; i < 10; i++) {
	setTimeout(() => console.log(i), 12);
}
// promenljive definisane preko var keyword su global scope promenlj10ve
for (var i = 0; i < 10; i++) {
	setTimeout(() => console.log(i), 10);
}
