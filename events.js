// Javascript Event File

var checklist = document.getElementById("names");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
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

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
}

function submit(id) {
	if (id === "cancel") {
		alert("Cancelled");
	}
	else if (id === "submit") {
		alert("Data Submitted");
	}
	else if (id === "maybe") {
		alert("Call me?");
	}
	else if (id === "close") {
		alert("Sorry, no longer open!");
		close();
	}
	else {
		alert("Link broken :(");
	}
}
/*
// Name and Email validation Function.
function validation(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
//var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

if(name ==='' || email ===''){
	alert("Please fill all fields...!!!!!!");
	return false;}
/*else if(!(email).match(emailReg)){
	alert("Invalid Email...!!!!!!");
	return false;} 
else{
	return true;
	}
}
*/
function validation() {
	// Create a new object inputElement
	function inputElement(name, newValue) {
	this.name = name;
	this.newValue = newValue;
}
	
	var name = new inputElement("name", document.getElementById("name").value);
	var email = new inputElement("email", document.getElementById("email").value);
	
	var formlist = [name, email];
	
	for (i = 0; i < formlist.length; i++) {
		if (!formlist[i].newValue) {
			alert("Please enter your " + formlist[i].name);
			return false;
		}
	}
	return true;
}

function getForm() {
	if (validation()) {
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var x = document.getElementsByName("form_name");
		x[0].submit();
		alert("Name: " + name + "\nEmail: " + email + "\nForm Class: " + document.getElementById("form_id").getAttribute("class") + "\n\nForm Submitted Successfully......");
		replaceText("NameInput", name);
		addText("EmailInput", getText("EmailInput"), email);
	}
}

function getText(id) {
	return document.getElementById(id).innerHTML;
}

function replaceText(id, value) {
	document.getElementById(id).innerHTML = value;
}

function addText(id, old, value) {
	document.getElementById(id).innerHTML = old + "<br>" + value;
}