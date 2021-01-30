const findSomeMultiples = require('../index')
const rightList = require('./mock/rightAnswer')

describe('Muletiples', () => {
    it('Should check the multiples of 3, 5 or both between 1 and 100 and show a list having changed the mentioned multiples', () => {
        expect(findSomeMultiples()).toEqual(expect.arrayContaining(rightList));
    });
});