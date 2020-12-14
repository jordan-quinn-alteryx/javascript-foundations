var assert = require('chai').assert;
var data = require('../lib/data');
var { getBreweries, getNeighborhoods, getBuildingCategories, findLocation } = require('../lib/denver');


describe('getBreweries', () => {
  const breweries = getBreweries(data);
  
  it('should return an object where the keys are each brewerys name and the value is the average abv for that brewery', () => {
    assert.equal(breweries["Ratio Beerworks"], 6.2);
  });

  it('should return 0 for a brewery with no beers', () => {
    assert.equal(breweries["Great Divide"], 0);
  });

  it('can round abv to the nearest tenth', () => {
    assert.equal(breweries["Beryl's Beer Co."], 5.7)
  });
});

describe('getNeighborhoods', () => {
  it('should return a list of each neighborhoods names', () => {
    const neighborhoods = getNeighborhoods(data);
    assert.deepEqual(neighborhoods, [
      "LoDo",
      "Five Points",
      "Cap Hill", 
      "RiNo", 
      "Wash Park", 
      "Uptown", 
      "City Park",
      "Highlands", 
      "Golden Triangle",
      "Platt Park"
     ]);
  })
})

describe('getBuildingCategories', ()=> {
  it('should be able to return a list of each building category', () => {
    const buildingCategories = getBuildingCategories(data)
    assert.deepEqual(buildingCategories, ['commercial', 'historical', 'athletic', 'entertainment', 'medical'])
  });


})

describe('findLocation', () => {
  it('be able to find the museum of nature and science', () => {
    const location = findLocation("Denver Museum of Nature and Science", data);
    assert.deepEqual(location, { name: "Denver Museum of Nature and Science", floors: 5, completed: 1900, height: 54 })
  })
})


it.skip('create a list of all breweries serving more than 14 beers', () => {
  assert.equal(true, false)
})

it.skip('return a list of all restaurants where the type is Dinner', () => {
  assert.equal(true, false)
})