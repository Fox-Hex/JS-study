import gt from 'lodash/gt'

test('greater than', () => {
    expect(gt(3, 1)).toBeTruthy()
    expect(gt(3, 3)).not.toBeTruthy()
    expect(gt(1, 3)).not.toBeTruthy()
})