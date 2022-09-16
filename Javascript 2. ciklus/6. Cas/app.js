// split() metoda ce se izvrsiti  konverziju stringa u niz(Array).

var recenica = "Zelimo izvrsiti konverziju ove recenice u niz.";
var recenica2 =
	"Ako bi se desilo da na pocetku casa dodju svi na vreme, to bi bilo cudo\
,koje do tog trenutka nismo videli, mada je zadovaljavajuce da svakom casu prisustvuje\
vecina polaznika kursa.";

// Izostavljajuci argument metode split ce se izvrsiti konverzija
//  datog stringa u niz koji ima 1 element
var niz = recenica.split();
console.log(niz);

// Ako je argument u string "," onda cemo dati string pretvoriti u niz koji je podeljen na elemente koje razdvajaju zarezi.
var niz2 = recenica2.split(",");
console.log(niz2);

// Sledeci prime ce od svakog karaktera niza praviti jedan element novonastalog niza:
var niz3 = recenica.split("");
console.log(niz3);

// JS search metode:
// 1. indexOf()
// indexOf metoda nam vraca index pocetne reci koju trazimo.

var recenica =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac malesuada libero. Phasellus vel enim id justo scelerisque gravida nec sit amet nulla. Aliquam erat volutpat. Duis dictum lorem magna, id molestie magna condimentum ac. Phasellus tristique sollicitudin nisl, vitae pretium nibh. Nulla facilisi. Morbi pharetra felis vitae rhoncus ultricies.";

let index1 = recenica.indexOf("amet", 22); //22 se ukljucuje
console.log(index1);
// Ako trazimo index nepostojeceg stringa rezultat ce biti -1
let index2 = recenica.indexOf("Pizza");
console.log(index2);

// lastIndexOf()
// lastIndexOf() metoda nam vraca index poslednje ponavljajuce reci u stringu

let index3 = recenica.lastIndexOf("a");
console.log(index3);
// Ako trazimo zadnji index nepostojeceg stringa rezultat ce biti -1

let index5 = recenica.lastIndexOf("Pizza");
console.log(index5);

// 3. Search()
// search() metoda nam vraca index trazenog stringa:

let index6 = recenica.search("b");
console.log(index6);

// 4. match() metoda nam vraca niz.
var matchingB = recenica.match("b");
console.log(matchingB);

var matchingB2 = recenica.match(/b/gi);
console.log(matchingB2);
