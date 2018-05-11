// Javascript Event File

var checklist = document.getElementById("names");

//var items = checklist.querySelectorAll("li");
//var inputs = checklist.querySelectorAll("input");

var items = [];

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