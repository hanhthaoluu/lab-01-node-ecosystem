'use strict';

module.exports = function greet(name) {

  if (typeof name === 'string') {
    return ('hello ' + name);
  } else {
    return null;
  }

};
