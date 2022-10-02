import without from '../node_modules/lodash/without.js'

test('without', () => {
    expect(without([])).toEqual([])
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3])
    expect(without([2, 1, 2, 3], 1)).toEqual([2, 2, 3])
    expect(without([2, 1, 2, 3], 4)).toEqual([2, 1, 2, 3])
    expect(without([2, 1, 2, 3])).toEqual([2, 1, 2, 3])
})