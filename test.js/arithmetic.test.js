'use strict';

const arithmetic = require("../lib/arithmetic.js");
const expect = require("expect");

describe('arithmetic', function() {

  describe('add', function() {
    it('should return null if a or b is not a number', function() {
      let result = arithmetic.add('hello',1);
      expect(result).toBe(null);
    });
  });

  describe('add', function() {
    it('should return a+b if a and b are both numbers', function() {
      let result = arithmetic.add(1,2);
      expect(result).toBe(3);
    });
  });

  describe('subtract', function() {
    it('should return null if a or b is not a number', function() {
      let result = arithmetic.subtract('true', 0);
      expect(result).toBe(null);
    });
  });

  describe('subtract', function() {
    it('should return a-b if both a and b are numbers', function() {
      let result = arithmetic.subtract(0, 100);
      expect(result).toBe(-100);
    });
  });

});
