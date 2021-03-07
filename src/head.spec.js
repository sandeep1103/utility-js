const head = require('./head');

describe('head', () => {

    it('head of [7, 8, 9] is 0', () => {
        expect(head([7, 8, 9])).toEqual(7);
    });

    it('head of [] is null', () => {
        expect(head([])).toEqual(null);
    });

})
