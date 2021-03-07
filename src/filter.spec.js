const filter = require('./filter');

const filterUpperCase = (alphabet) => {
    return alphabet == alphabet.toUpperCase();
}

describe('filter', () => {

    it('filter of [] and x => true is []', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('filter of [1,2,3] and x => true is [1,2,3]', () => {
        expect(filter([1,2,3], x => true)).toEqual([1, 2, 3]);
    });

    it('filter of [1,2,3] and x => false is [1,2,3]', () => {
        expect(filter([1,2,3], x => false)).toEqual([]);
    });

    it('filter of [1,2,3] and x > 1', () => {
        expect(filter([1, 2, 3], x => x > 1)).toEqual([2, 3]);
    });

    it('filter of ["a","B","c","D"] and  filterUpperCase is ', () => {
        expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B', 'D']);
    });
})