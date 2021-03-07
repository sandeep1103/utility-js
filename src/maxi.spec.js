const maxi = require('./maxi');

describe('maxi', () => {

    it('Max of [7] is 7', () => {
        expect(maxi([7])).toEqual(7);
    });

    it('Max of [7, 8, 4, 6] is 8', () => {
        expect(maxi([7, 8, 4, 6])).toEqual(8);
    });

})
