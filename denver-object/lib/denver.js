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

  Object.keys(buildings).forEach(category => {
    console.log({category})
    location = buildings[category].find(item => item.name === locationName);
  })
  return location;
}

module.exports = { getBreweries, getNeighborhoods, getBuildingCategories, findLocation };