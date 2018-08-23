const chai = require('chai');
const expect = chai.expect;
const letterFunctions = require('../letter_functions');
const isVowel = letterFunctions.isVowel;

describe('isVowel()', () => {
  it('Deveria retornar true para letra a', () => {
    expect(isVowel('a')).to.equal(true);
  });
  it('Deveria retornar true para letra e', () => {
    expect(isVowel('e')).to.equal(true);
  });
  it('Deveria retornar false para letra b', () => {
    expect(isVowel('b')).to.equal(false);
  });
});

