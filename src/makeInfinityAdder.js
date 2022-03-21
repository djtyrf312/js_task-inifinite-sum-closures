'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(arg) {
    if (arg === undefined) {
      const number = sum;

      sum = 0;

      return number;
    }
    sum += arg;

    return adder;
  };
}

module.exports = makeInfinityAdder;
