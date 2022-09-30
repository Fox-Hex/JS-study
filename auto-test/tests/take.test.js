import take from '/home/omni/JS/hexlet-js/hexlet-hello-world/node_modules/lodash/take.js'
import {strict as assert} from 'assert'

assert.deepEqual(take([], 2), []);
assert.deepEqual(take([1, 2, 3]), [1]);
assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepEqual(take([4, 3], 9), [4,3]);
assert.deepEqual(take([4, 3], -1), []);

console.log('All tests done');