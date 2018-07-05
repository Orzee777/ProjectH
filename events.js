// Javascript Event File

// if the file has the container "names"
// currently only for 'edit.html'
if (document.getElementById("names")) {
var checklist = document.getElementById("names");
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

// hides the element if visible
// shows the element in BLOCK if hidden
var toggleView = function (elementId, buttonId) {
  element = document.getElementById(elementId);
  toggle = document.getElementById(buttonId);
  
  if (element.style.display === "none") {
    element.style.display = "block";
    toggle.innerHTML = "Hide";
  }
  else {
    element.style.display = "none";
    toggle.innerHTML = "Show";
  }
}
