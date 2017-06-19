let myArr = ["Hello", "Howdy", "Bonjour", "S'up?"]
let phraseDiv = document.getElementById("greeting");

myArr.forEach( function(greeting) {
	let phraseString = `<div id="phrase-${index}"><h3>${greeting, index}, world!</h3></div>`
	phraseDiv.innerHTML += phraseString
	document.getElementById(`phrase-${index + 1}`).addEventListener("click", function() {
		event.target.classList.add("blue");
	});
});

