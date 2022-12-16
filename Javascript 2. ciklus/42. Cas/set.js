// Js set

// Setovi predstavljaju kolekciju unikatnih vrednosti
// Svaka vrednost se pojavljuje samo jednom.

// Kreiranje seta:

const letters = new Set(["a", "b", "c", "d", "e", "i", "f", "a"]); // nema drugog a
console.log(letters);

// Metode:
// add() dodaje novi element u setu
letters.add("m");
console.log(letters);

// delete() brise specifican element u setu.

letters.delete("m");
console.log(letters);

// has() - vraca boolean (da li se neka vrednost nalazi u setu)
console.log(letters.has("m"));

// forEach() poziva callback funkciju za svaki element

letters.forEach((element) => {
	return console.log(element);
});

// values() vraca iterator sa vrednostima datog seta
console.log(letters.values());

// Napraviti funkciju koja iz datog niza vraca novi niz brisuci duplikate originalnom.

let array = [1, 1, 2, 3, 4, 5, 5, 6, 7, 8];
function brisiduplikate(arr) {
	const set = new Set(arr);
	return [...set];
}
console.log(brisiduplikate(array));
//
