// Encryption JS File

// currently the encryption/decryption formula is:
//
// encrypt: alphabet + 15
// decrypt: alphabet - 15

// function 'finds'
//   finds var 'y' in array 'x' and returns the location of x[i]
var find = function (x, y) {
	var location = false;
	for (var i = 0; i < x.length; i++) {
		if (x[i] == y) {
			location = i;
		}
	}
	if (location === false) {
		alert("Could not find " + y + " in the array " + x);
	}
	return location;
};

// function 'encrypt'
//   encrypts str 'unencrypted' using the array 'alphabet'
var encrypt = function (unencrypted) {

	var encrypted = "";
	
	for (unencryptedLetter = 0; unencryptedLetter < unencrypted.length; unencryptedLetter++) {

		i = find(alphabet, unencrypted[unencryptedLetter]) + 15;

		if (i >= alphabet.length) {
			i -= alphabet.length;
		}

		encrypted += alphabet[i];

	}

	return encrypted;
};


// function 'decrypt'
//   decrypts str 'unencrypted' using the array 'alphabet'
var decrypt = function (encrypted) {

	var decrypted = "";

	for (encryptedLetter = 0; encryptedLetter < encrypted.length; encryptedLetter++) {

		j = find(alphabet, encrypted[encryptedLetter]) - 15;

		if (j < 0) {
			j += alphabet.length;
		}

		decrypted += alphabet[j];

	}

	return decrypted;
};

var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","0","1","2","3","4","5","6","7","8","9",".",",","!","@","#","$","%","^","&","*","(",")","-","_","+","=","\'","?","<",">","[","]","{","}","/",":",";","|","\`","~"];
// needs to be renamed
// encrypts a message in element TBD
// saves element at "saved", which is a temporary placeholder
var encryptAndSend = function () {
  message = document.getElementById("message").value;
  newMessage = encrypt(message);
  document.getElementById("log").innerHTML = newMessage;
  localStorage.setItem("saved", newMessage);
}

// needs to be renamed
// decrypts message in "saved" from encryptAndSend
// and displays it in the log
var decryptAndSend = function () {
  message = localStorage.getItem("saved");
  if (message != null) {
  //message = document.getElementById("log").innerHTML;
  newMessage = decrypt(message);
  document.getElementById("log").innerHTML = newMessage;
  }
  else {
    console.log("ERROR. SAVED COULD NOT BE FOUND");
  }
}


// prototype 'encrypt'
//   prototype version of function 'encrypt'
String.prototype.encrypt = function () {

	var encrypted = "";
	
	for (unencryptedLetter = 0; unencryptedLetter < this.length; unencryptedLetter++) {

		i = find(alphabet, this[unencryptedLetter]) + 15;

		if (i >= alphabet.length) {
			i -= alphabet.length;
		}

		encrypted += alphabet[i];

	}

	return encrypted;
};

// prototype 'decrypt'
//   prototype version of function 'decrypt'
String.prototype.decrypt = function () {

	var decrypted = "";

	for (encryptedLetter = 0; encryptedLetter < this.length; encryptedLetter++) {

		j = find(alphabet, this[encryptedLetter]) - 15;

		if (j < 0) {
			j += alphabet.length;
		}

		decrypted += alphabet[j];

	}

	return decrypted;
};
