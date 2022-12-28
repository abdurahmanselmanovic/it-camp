// fetch() asihrona funkcija za prikupljanje nekih podataka.

fetch("https://jsonplaceholder.typicode.com/posts/")
	.then((response) => response.json())
	.then((posts) => console.log(posts))
	.catch((err) => console.log(err));
