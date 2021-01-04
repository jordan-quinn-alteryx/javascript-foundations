//re write and fully test the JavaScript map method
// doesn't need to be on the Array prototype, can just be a function

const jsMap = (array, callback) => {
  const newArray = [...array];
  for (item of newArray) {
    if (callback) callback(item);
  }
  return newArray;
};

module.exports = jsMap;
