const arrayGreet = names => {
  return names.reduce((acc, name, index) => {
    // if there are 2 names
    if (names.length === 2) {
      if (index === names.length - 1) {
        return `${acc}${name}.`;
      }
      return `${acc}${name} and `;
    }

    // if there are greater than 2 names
    if (names.length > 2) {
      if(index === names.length - 1) {
        return `${acc}and ${name}.`;
      }
      return `${acc}${name}, `;
    }
  }, 'Hello, ')
}

const greet = (name) => {
  if (Array.isArray(name)) {
    return arrayGreet(name);
  }

  let defaultName;
  const noName = name === null || name === undefined;
  const isShouting = !noName && name === name.toUpperCase();

  if (noName) {
    defaultName = 'my friend';
  }

  if (isShouting) {
    return `HELLO ${name}!`;
  }

  return `Hello, ${defaultName || name}.`;
}

module.exports = {
  arrayGreet,
  greet
};
