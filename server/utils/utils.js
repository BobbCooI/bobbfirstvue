const CryptoJS = require('crypto-js');
module.exports = {
	encode64(string) {
	  const a = CryptoJS.enc.Utf8.parse(string);
		const encoded = CryptoJS.enc.Base64.stringify(a);
		return encoded;
	},
	decode64(string) {
		const encodedWord = CryptoJS.enc.Base64.parse(string);
		const decoded = CryptoJS.enc.Utf8.stringify(encodedWord);
		return decoded;
	},
	makeID(length) {
		var result = '';
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
};
