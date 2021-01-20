// https://github.com/testdouble/contributing-tests/wiki/Greeting-Kata
const noName = (name) => name === null || name === undefined;
const isShouting = (name) => !noName(name) && name === name.toUpperCase();

const greetTwo = (acc, regularNames, name, index) => {
  if (index === regularNames.length - 1) {
    return `${acc}${name}.`;
  }
  return `${acc}${name} and `;
}

const greetMany = (acc, regularNames, name, index) => {
  if(index === regularNames.length - 1) {
    return `${acc}and ${name}.`;
  }
  return `${acc}${name}, `;
}

const arrayGreet = names => {
  const regularNames = names.filter(name => !isShouting(name));
  const shoutingNames = names.filter(name => isShouting(name));

  const splitOnComma = regularNames.reduce((acc, name) => {
    // testing if its a csv valu
    if (name.includes('"')) {
      const cleanName = name.replace(/"/g, '');
      return [...acc, cleanName]
    }
    const splits = name.split(', ');
    return [...acc, ...splits];
  }, []);

  const regularGreeting = splitOnComma.reduce((acc, name, index) => {
    if (splitOnComma.length === 2) return greetTwo(acc, splitOnComma, name, index);

    if (splitOnComma.length > 2) return greetMany(acc, splitOnComma, name, index);
  }, 'Hello, ');

  const shoutingGreeting = shoutingNames.length > 0 ? ` AND HELLO ${shoutingNames[0]}!` : '';

  return regularGreeting + shoutingGreeting;
}


const greet = (name) => {
  if (Array.isArray(name)) {
    return arrayGreet(name);
  }

  let defaultName;

  if (noName(name)) {
    defaultName = 'my friend';
  }

  if (isShouting(name)) {
    return `HELLO ${name}!`;
  }

  return `Hello, ${defaultName || name}.`;
}

module.exports = {
  arrayGreet,
  greet
};
