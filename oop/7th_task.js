function magic(...arguments) {
  let sum = 0;
  arguments.forEach((elem) => sum = sum + elem)
  return (...arguments2) => magic(sum,...arguments2)
}

magic.valueOf = (...arguments) => {
  let sum = 0;
  arguments.forEach((elem) => sum = sum + elem)
  return sum
}

console.log(magic());
console.log(magic() == 0); // true
console.log(magic(5, 2, -8) == -1); // true
console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) == 38); // true
console.log(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13); // true

