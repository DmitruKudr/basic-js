const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
	const usedNames = {};
  	const result = [];

  	for(let i in names) {
    	if(usedNames[names[i]] === undefined) {
      	result.push(names[i]);
      	usedNames[names[i]] = 1;

    } else {
      	const newName = names[i] + `(${usedNames[names[i]]})`;
      	result.push(newName);
      	usedNames[newName] = 1;

      	usedNames[names[i]]++;
    	}
  	}

  	return result
}

module.exports = {
  renameFiles
};
