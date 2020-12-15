const getBreweries = (data) => {
  return data.breweries.reduce((acc, { name, beers }) => {
    if (beers.length === 0) {
      acc[name] = 0; 
      return acc;
    }
    
    const rawAbv = beers.reduce((acc, { abv }) => {
      acc += abv;
      return acc;
    }, 0) / beers.length
    
    acc[name] = Math.round(rawAbv * 10) / 10; // round to tenths precision

    return acc;
  }, {});
};

const getNeighborhoods = ({neighborhoods}) => neighborhoods.map( ({name}) => name);

const getBuildingCategories = ({buildings}) => {
  return Object.keys(buildings); 
}

const findLocation = (locationName, data) => {
  const { buildings } = data;
  let location;

  Object.keys(buildings).some(category => {
    if (typeof location === 'undefined') {
      location = buildings[category].find(item => item.name === locationName);
    }
    return typeof location !== 'undefined';
  });

  return location;
}

const getBreweriesByBeerNumber = (count, { breweries }) => {
 return breweries.reduce((acc, brewery) => {
    if (brewery.number_of_beers > count) {
      acc.push(brewery.name)
    }
    return acc 
 }, [])
}
module.exports = { getBreweries, getNeighborhoods, getBuildingCategories, findLocation, getBreweriesByBeerNumber };