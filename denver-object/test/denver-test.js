var assert = require('chai').assert;
var data = require('../lib/data');
var { getBreweries } = require('../lib/denver');

it('should return an object where the keys are each brewerys name and the value is the average abv for that brewery', () => {
  const breweries = getBreweries(data);
  assert.equal(breweries["Ratio Beerworks"], 6.2);
  assert.equal(breweries["Great Divide"], 0);
});

it.skip('should return a list of each neighborhoods names', () => {
  assert.equal(true, false)
})

it.skip('should be able to return a list of each building category', () => {
  assert.equal(true, false)
});

it.skip('return a list with all restaurant names', () => {
  assert.equal(true, false)
});

it.skip('be able to find the museum of nature and science', () => {
  assert.equal(true, false)
})

it.skip('create a list of all breweries serving more than 14 beers', () => {
  assert.equal(true, false)
})

it.skip('return a list of all restaurants where the type is Dinner', () => {
  assert.equal(true, false)
})