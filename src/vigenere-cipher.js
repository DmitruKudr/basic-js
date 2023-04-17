const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect;
	}

	encrypt(message, key) {
		if (!message || !key) {
		  throw new Error('Incorrect arguments!');
		}
	
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let result = '';
		let keyIndex = 0;
	
		message = message.toUpperCase();
		key = key.toUpperCase();
	
		for (let i = 0; i < message.length; i++) {
		  const letter = message[i];
		  const letterIndex = letters.indexOf(letter);
	
		  if (letterIndex === -1) {
			result += letter;
			continue;
		  }
	
		  const keyLetter = key[keyIndex % key.length];
		  const keyLetterIndex = letters.indexOf(keyLetter);
	
		  const shiftedIndex = (letterIndex + keyLetterIndex) % letters.length;
		  const encryptedLetter = letters[shiftedIndex];
	
		  result += encryptedLetter;
	
		  keyIndex++;
		}
	
		if (!this.isDirect) {
		  result = result.split('').reverse().join('');
		}
	
		return result;
	  }
	
	  decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) {
		  throw new Error('Incorrect arguments!');
		}
	
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let result = '';
		let keyIndex = 0;
	
		encryptedMessage = encryptedMessage.toUpperCase();
		key = key.toUpperCase();
	
		for (let i = 0; i < encryptedMessage.length; i++) {
		  const letter = encryptedMessage[i];
		  const letterIndex = letters.indexOf(letter);
	
		  if (letterIndex === -1) {
			result += letter;
			continue;
		  }
	
		  const keyLetter = key[keyIndex % key.length];
		  const keyLetterIndex = letters.indexOf(keyLetter);
	
		  const shiftedIndex = (letterIndex - keyLetterIndex + letters.length) % letters.length;
		  const decryptedLetter = letters[shiftedIndex];
	
		  result += decryptedLetter;
	
		  keyIndex++;
		}
	
		if (!this.isDirect) {
		  result = result.split('').reverse().join('');
		}
	
		return result;
	  }
}

module.exports = {
  VigenereCipheringMachine
};
