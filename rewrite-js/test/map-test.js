const { expect, assert } = require("chai")
const jsMap = require("../lib/map");

describe('jsMap', () => {
  it('should exist', () => {
    expect(jsMap).to.exist;
  })

  it('should be a function', () => {
    assert.isFunction(jsMap);
  });

  it('returns an array that is the same length as what it is given', () => {
    const emptyArray = [];
    const returnVal = jsMap(emptyArray);
    expect(returnVal.length).to.equal(emptyArray.length);
  });

  it('should not return the reference array', () => {
    const emptyArray = [];
    const returnVal = jsMap(emptyArray);
    expect(emptyArray).to.not.equal(returnVal);
  });
});