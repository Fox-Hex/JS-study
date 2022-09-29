import functionForTest from "../capitalize.js"
import {strict as assert} from 'assert'

const test = (inc, out) => {
    if (functionForTest(inc) !== out) {
        throw new Error('Function works wrong!')
    }
}

test('hello', 'Hello')
test('', '')
test('greeTing', 'Greeting')

assert(functionForTest('') === '')
assert(functionForTest('hello') === 'Hello')

assert.equal(functionForTest(''),'')
assert.equal(functionForTest('hello'),'Hello')

console.log('All tests done');