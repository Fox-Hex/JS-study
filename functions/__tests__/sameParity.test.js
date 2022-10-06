import sameParity from '../src/sameParity'

test('1st', () => {
    expect(sameParity([-1, 0, 1, -3, 10, -2])).toEqual([-1, 1, -3])
    expect(sameParity([2, 0, 1, -3, 10, -2])).toEqual([2, 0, 10, -2])
    expect(sameParity([])).toEqual([])
})