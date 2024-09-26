const assert = require("assert");

const Rooster = require("../index");
describe("Rooster", () => {
  // Test cases will go here
});
describe(".announceDawn", () => {
  it("returns a rooster call", () => {
    // Setup
    const expected = "moo!";

    // Exercise
    const result = Rooster.announceDawn();

    // Verify
    assert.strictEqual(result, expected);
  });
});
describe(".timeAtDawn", () => {
  it("returns its argument as a string", () => {
    // Setup
    const hour = 5;

    // Exercise
    const result = Rooster.timeAtDawn(hour);

    // Verify
    assert.strictEqual(typeof result, "string");
  });
});


//OUTPUT :
/* 
    $ npm test
    .announceDawn
    ✓ returns a rooster call

    .timeAtDawn
    ✓ returns its argument as a string


    2 passing (5ms)
*/
