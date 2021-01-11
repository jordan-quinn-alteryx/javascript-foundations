const { expect } = require('chai');
const { arrayGreet, greet } = require('../lib/greet');

describe('greet', () => {
  it('exists', () => {
    expect(greet).to.not.be.undefined;
  })

  it('is a function', () => {
    expect(typeof greet).to.equal('function');
  })

  it('returns a string containing the name param value', () => {
    //refactor!
    expect(greet('bob')).to.equal('Hello, bob.');
  })

  it('should default to "my friend" if name is null or undefined', () => {
    expect(greet()).to.equal('Hello, my friend.');
    expect(greet(null)).to.equal('Hello, my friend.');
  })

  it('should shout hello if given a name in all caps', () => {
    expect(greet('BOB')).to.equal('HELLO BOB!');
  })

  it('should be able to handle two names', () => {
    expect(greet(['Jill', 'Jayne'])).to.equal('Hello, Jill and Jayne.');
  })

  describe('arrayGreet', () => {
    it('should be able to handle two names', () => {
      expect(arrayGreet(['Jill', 'Jayne'])).to.equal('Hello, Jill and Jayne.');
    });

    it('should be able to handle three names', () => {
      expect(arrayGreet(['Jill', 'Jayne', 'Gob'])).to.equal('Hello, Jill, Jayne, and Gob.');
    });
   

    it('should be able to handle ten names', () => {
      expect(arrayGreet(['Jill', 'Jayne', 'Gob', 'John', 'Paul', 'George', 'Ringo', 'Jimmy', 'Marylin', 'Temujin']))
        .to.equal('Hello, Jill, Jayne, Gob, John, Paul, George, Ringo, Jimmy, Marylin, and Temujin.');
    });
  })
})


