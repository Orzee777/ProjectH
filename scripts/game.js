// JS File game.js

if (document.getElementById("log")) {
var checklist = document.getElementById("log");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}
}

function editItem() {
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

// add event listener to the last field for submission
function itemKeypress(event) {
  if (event.which === 13) {
    getMainMenu.call(this);
  }
}

function getMainMenu() {
	var mfm = document.getElementById("mainMenuInput").value;
	
	replaceText("gameText", "<br><br>" + mfm);
	addText("log", "<br>" + mfm);
	
}

function getText(id) {
	console.log("getText ran");
	console.log(document.getElementById(id).innerHTML);
	return document.getElementById(id).innerHTML;
}

function replaceText(id, value) {
	console.log("replaceText ran");
	document.getElementById(id).innerHTML = value;
}

function addText(id, value) {
	console.log("addText ran");
	var old = document.getElementById(id).innerHTML;
	document.getElementById(id).innerHTML = old + "\n" + value;
	document.getElementById(id).scrollTop = document.getElementById(id).scrollHeight;
}

///
/// working code
///

// the last input form 'mainMenuInput' gets an event listener on 'enter'
document.getElementById("mainMenuInput").addEventListener("keypress", itemKeypress);