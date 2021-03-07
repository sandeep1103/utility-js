const tail = require('./tail');

describe('tail', () => {

    it('Tail of [7, 8, 9] is 0', () => {
        expect(tail([7, 8, 9])).toEqual([8, 9]);
    });

    it('Tail of [] is []', () => {
        expect(tail([])).toEqual([]);
    });

})
