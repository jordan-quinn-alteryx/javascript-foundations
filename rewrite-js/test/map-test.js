const chai = require("chai");
const sinon = require('sinon');
const jsMap = require("../lib/map");

chai.should();

const { expect, assert} = chai;

describe('jsMap', () => {
  it('should exist', () => {
    expect(jsMap).to.exist;
  })

  it('should be a function', () => {
    assert.isFunction(jsMap);
  });

  it('returns an empty array when given an empty array', () => {
    const emptyArray = [];
    const returnVal = jsMap(emptyArray);
    expect(returnVal.length).to.equal(emptyArray.length);
  });

  it('returns an array that is the same length as what it is given', () => {
    const singleArray = [1];
    const returnVal = jsMap(singleArray);
    expect(returnVal.length).to.equal(singleArray.length);
  });

  it('should not return the reference array', () => {
    const emptyArray = [];
    const returnVal = jsMap(emptyArray);
    expect(emptyArray).to.not.equal(returnVal);
  });

  it('if given an empty array and a callback function, the callback should not be invoked', () => {
    const callback = sinon.spy();
    jsMap([], callback);
    expect(callback.called).to.be.false;
  });

  it('if given and array and a callback, should call the callback once per array value', () => {
    const callback = sinon.spy();
    jsMap([1,2,3], callback);
    expect(callback.calledThrice).to.be.true;
  });

  // TODO: This test seems redundant after adding the next test.
  it('should call the callback with the current array value', () => {
    const callback = sinon.spy();
    jsMap([1], callback);
    expect(callback.calledOnceWith(1)).to.be.true;
  })

  it('should call the callback with every array value', () => {
    const callback = sinon.spy();
    jsMap([1,2,3], callback);
    expect(callback.calledWith(1)).to.be.true;
    expect(callback.calledWith(2)).to.be.true;
    expect(callback.calledWith(3)).to.be.true;
  })
});