var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("tests if the output of 5! is equal to 120", () => {
      // Setup
      const num = 5;
      const expected = 120;

      // Exercise
      const result = Calculate.factorial(num);

      // Verify
      assert.equal(result, expected);
    });
    it("tests if the output of 3! is equal to 6", () => {
      // Setup
      const num = 3;
      const expected = 6;

      // Exercise
      const result = Calculate.factorial(num);

      // Verify
      assert.equal(result, expected);
    });
  });
});
// OUTPUT:
/*
$ npm test

> blank-workspace@1.0.0 test /home/ccuser/workspace/tdd-mocha-project
> mocha



  Calculate
    .factorial
      ✓ tests if the output of 5! is equal to 120
      ✓ tests if the output of 3! is equal to 6


  2 passing (6ms)
*/