const getBreweries = (data) => {
  return data.breweries.reduce((acc, { name, beers }) => {
    acc[name] = beers.reduce((acc, { abv }) => {
      acc += abv;
      return acc;
    }, 0) / beers.length;
    return acc;
  }, {});
};

module.exports = { getBreweries };