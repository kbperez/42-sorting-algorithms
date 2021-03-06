'use strict';

const quicksort = require('../src/quicksort');
require('jest');

describe('Quick Sort with copy', () => {
  let testArray = [7, 2, 9, 12, 26, 1];
  let sortedArray = [1, 2, 7, 9, 12, 26];


  describe('Valid output', () => {
    quicksort(testArray);
    it('should return an array', () => {
      expect(testArray).toBeInstanceOf(Array);
    });
    it('should return a sorted array', () => {
      expect(testArray).toEqual(sortedArray);
    });
    it('should return have a different order than the original array', () => {
      expect(testArray).not.toEqual([7, 2, 9, 12, 26, 1]);
    });

  });

  describe('Invalid input', () => {
    it('should return null if no input', () => {
      expect(quicksort()).toBeNull();
    });
    it('should return message if non-array input', () => {
      expect(quicksort(2)).toEqual('Input must be an array');
    });
    it('should return message if empty input', () => {
      expect(quicksort([])).toEqual('Array cannot be empty');
    });
  });

});
