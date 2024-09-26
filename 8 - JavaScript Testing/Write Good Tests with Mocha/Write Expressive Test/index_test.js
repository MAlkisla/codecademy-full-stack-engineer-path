const assert = require('assert');

describe('Numbers', () => {
  it('1 does not equal 2', () => {
    // Verify
    assert.notStrictEqual(1, 2);
  });

  it('2 plus 2 equals 4', () => {
    // Verify
    assert.strictEqual(2 + 2, 4);
  });
});

describe('Equality Checks', () => {
  it('Loose equality check (==)', () => {
    // Verify
    assert.equal('1', 1); // true because == does type conversion
  });

  it('Strict equality check (===)', () => {
    // Verify
    assert.strictEqual(1, 1);
  });

  it('Deep equality check for objects', () => {
    // Verify
    assert.deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 });
  });

  it('Deep equality check for arrays', () => {
    // Verify
    assert.deepEqual([1, 2, 3], [1, 2, 3]);
  });
});


//OUTPUT:
/*
$ npm test

  Numbers
    ✓ 1 does not equal 2
    ✓ 2 plus 2 equals 4

  Equality Checks
    ✓ Loose equality check (==)
    ✓ Strict equality check (===)
    ✓ Deep equality check for objects
    ✓ Deep equality check for arrays


  6 passing (6ms)

*/