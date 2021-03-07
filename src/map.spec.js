const map = require('./map');

const identity = (value) => {
    return value;
}

const cube = (value) => {
    return value * value * value;
}

describe('Map', () => {

    it('Map of [] and cube is []', () => {
        expect(map([], cube)).toEqual([]);
    });

    it('Map of [1,2,3] and identity is [1,2,3]', () => {
        expect(map([1,2,3], identity)).toEqual([1, 2, 3]);
    });

    it('Map of [1,2,3] and cube is [1,8,27]', () => {
        expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
    });

    it('Map of [a{x : 10}],someObject => someObject.x + 1) is [11]', () => {
        expect(map([{x : 10}], someObject => someObject.x + 1)).toEqual([11]);
    });
})