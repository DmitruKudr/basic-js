const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let skip = [];
	return matrix.reduce((value, item) => {
		value += item.reduce((value2, item2, j) => {
			item2 != 0 ? (skip.includes(j) ? value2 += 0 : value2 += item2) : skip.push(j);
			return value2;
		}, 0);
		
		return value
	}, 0)
}

module.exports = {
  getMatrixElementsSum
};
