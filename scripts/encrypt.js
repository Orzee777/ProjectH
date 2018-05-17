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

// alphabet currently doesn't support symbols, just alphanumerical characters
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
	"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
	" ","0","1","2","3","4","5","6","7","8","9"];