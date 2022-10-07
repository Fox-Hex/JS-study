import fill from "../src/fill";

let array;
beforeEach(() => {
  array = [1, 2, 3, 4];
});

test("1st", () => {
  fill(array, "*", 1, 3);
  expect(array).toEqual([1, "*", "*", 4]);
});
test("2nd", () => {
  fill(array, "*");
  expect(array).toEqual(["*", "*", "*", "*"]);
});
test("3rd", () => {
  fill(array, "*", 4);
  expect(array).toEqual([1, 2, 3, 4]);
});
test("4th", () => {
  fill(array, "*", 0, 10);
  expect(array).toEqual(["*", "*", "*", "*"]);
});
