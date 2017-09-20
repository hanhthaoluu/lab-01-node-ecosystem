'use strict';

const greet = require("../lib/greet.js");
const expect = require("expect");

describe ('greet', function() {

  it('should return "hello thao" if name is a string', function() {
    let result = greet('thao');
    expect(result).toBe('hello thao');
  });

  it('should return null if name is not a string', function() {
    let result = greet(999);
    expect(result).toBe(null);
  });

});
