import findIndexOfNearest from '../src/findIndexOfNearest'

test('1st', () => {
    expect(findIndexOfNearest([])).toBe(null)
    expect(findIndexOfNearest([15, 10, 3, 4], 0)).toBe(2)
    expect(findIndexOfNearest([7, 5, 3, 2], 4)).toBe(1)
    expect(findIndexOfNearest([7, 5, 4, 4, 3], 4)).toBe(2)
})