function magic(...arg) {
  const sum = arg.reduce((accum, elem) => accum + elem, 0)
  const inner = (...arg2) => magic(sum, ...arg2)
  inner.valueOf = () => sum
  return inner
}


console.log(+magic(5,6));
console.log(magic() == 0); // true
console.log(magic(5, 2, -8) == -1); // true
console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) == 38); // true
console.log(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13); // true
