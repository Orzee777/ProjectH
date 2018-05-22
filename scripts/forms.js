// Javascript Forms File

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

function validation() {
	// Create a new object inputElement
	function inputElement(name, newValue) {
	this.name = name;
	this.newValue = newValue;
}
	
	var name = new inputElement("name", document.getElementById("name").value);
	var email = new inputElement("email", document.getElementById("email").value);
	var password = new inputElement("password", document.getElementById("password").value);
	
	var formlist = [name, email, password];
	
	for (i = 0; i < formlist.length; i++) {
		if (!formlist[i].newValue) {
			alert("Please enter your " + formlist[i].name);
			return false;
		}
	}
	return true;
}

function getForm() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	alert("Name: " + name + "\nEmail: " + email + "\nPassword: " + password + "\nForm Class: " + document.getElementById("form_id").getAttribute("class") + "\nForm Submitted Successfully!");

	document.getElementById("NameInput").innerHTML = name;
	document.getElementById("EmailInput").innerHTML = email;
	document.getElementById("Password").innerHTML = password;
}

function getText(id) {
	console.log(document.getElementById(id).innerHTML);
	return document.getElementById(id).innerHTML;
}

function replaceText(id, value) {
	document.getElementById(id).innerHTML = value;
}

function addText(id, value) {
	var old = document.getElementById(id).innerHTML;
	document.getElementById(id).innerHTML = old + "\n" + value;
}

///
/// working code
///

// the last input form 'password' gets an event listener on 'enter'
document.getElementById("password").addEventListener("keypress", itemKeypress);