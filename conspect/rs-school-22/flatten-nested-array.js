// https://medium.com/swlh/how-to-flatten-an-array-in-javascript-6b3fef075655



/*

Using Array.flat()
This function is the reason I even decided to make an article on this. JavaScript thankfully knew that this was a thing and decided to make a function out of it. By default, it only flattens an array one level deep, but you can pass in a number to define as many levels deep as you want to go. If you don’t care how deep you drill, just pass in the Infinity keyword.

const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]
const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]
const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Flatten Array Holes
// const arr5 = [1, 2, , 4, 5];
// arr5.flat();
// [1, 2, 4, 5]



=========================================
*/


/**
 * Array.flat() polyfill
 * Adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#reduce_concat_isArray_recursivity
 */
 if (!Array.prototype.flat) {
	Array.prototype.flat = function(depth) {

		'use strict';

		// If no depth is specified, default to 1
		if (depth === undefined) {
			depth = 1;
		}

		// Recursively reduce sub-arrays to the specified depth
		var flatten = function (arr, depth) {

			// If depth is 0, return the array as-is
			if (depth < 1) {
				return arr.slice();
			}

			// Otherwise, concatenate into the parent array
			return arr.reduce(function (acc, val) {
				return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
			}, []);

		};

		return flatten(this, depth);

	};
}

