let myArr = ["Hello", "Howdy", "Bonjour", "S'up?"]
let phraseDiv = document.getElementById("greeting");

myArr.forEach( function(greeting) {
	let phraseString = `<div id="phrase-${index + 1}"><h3>${greeting, index}, world!</h3></div>`
	let phraseDiv = document.createElement("div");
	phraseDiv.setAttribute("id", `phrase-${index + 1}--wrapper`);
	phraseDiv.innerHTML = phraseString;
	phraseDOM.appendChild(phraseDiv);
	document.getElementById(`phrase-${index + 1}`).addEventListener("click", function() {
		event.target.classList.add("blue");
	});
});

