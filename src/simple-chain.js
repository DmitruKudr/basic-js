const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
	throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length
  },
  addLink(value = '( )') {
	throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	this.chain.push(value === '( )' ? value : `( ${String(value)} )`);
	return this
  },
  removeLink(position) {
	throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	if(position && position < this.chain.length - 1) {
		this.chain.splice(position, 1);
		return this
	}
	throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
	throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	this.chain.reverse();
	return this
  },
  finishChain() {
	throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	return this.chain.join('~~')
  },
  chain: []
};

module.exports = {
  chainMaker
};
