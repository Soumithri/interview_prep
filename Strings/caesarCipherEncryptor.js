function caesarCipherEncryptor(string, key) {
	let code;
  let cipher = '';
	for(const char of string) {
		code = char.charCodeAt() + (key%26);
		cipher += (code <= 122) ? String.fromCharCode(code) : String.fromCharCode(code-26);
	}
	return cipher;
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;