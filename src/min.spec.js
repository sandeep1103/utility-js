const maxi = require('./min');

describe('min', () => {

    it('Min of [7] is 7', () => {
        expect(maxi([7])).toEqual(7);
    });

    it('Min of [7, 8, 4, 6] is 4', () => {
        expect(maxi([7, 8, 4, 6])).toEqual(4);
    });

})
