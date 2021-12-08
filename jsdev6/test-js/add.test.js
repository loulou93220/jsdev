const { test, expect } = require('@jest/globals');
const addNum = require('./add');

test("ADDitionne deux nombres", () => {
  expect(addNum(1, 2)).toBe(3);
});
