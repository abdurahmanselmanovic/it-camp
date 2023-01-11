var osamdeset = document.getElementById("osam");
var text = document.getElementById("text");
function changeColor() {
	let color = document.getElementById("colorInputColor").value;
	osamdeset.style.backgroundColor = color;
}

function changeColor1() {
	let color = document.getElementById("colorInputColor1").value;
	text.style.backgroundColor = color;
}

function changeColorText() {
	let color = document.getElementById("colorInputColor2").value;
	text.style.color = color;
}
