import indexOf from '/home/omni/JS/hexlet-js/hexlet-hello-world/node_modules/lodash/indexOf.js'
import assert from 'power-assert'


assert(indexOf([1, 2, 1, 2], 2) === 1)
assert(indexOf([1, 2, 1, 2], 2, 2) === 3)
assert(indexOf([2, 'one', 'cat', false], 8) === -1)

console.log('All tests done');