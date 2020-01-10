const cdset = require("./index.js");

test("sets top-level property", () => {
  expect(cdset({}, "a", 3)).toEqual({ a: 3 });
  expect(cdset([], "0", 3)).toEqual([3]);
  expect(cdset({}, "0", 3)).toEqual({ 0: 3 });
});

test("sets deeply-nested property", () => {
  expect(cdset({ p: {} }, "p.a", 3)).toEqual({ p: { a: 3 } });
  expect(cdset({ p: [] }, "p.0", 3)).toEqual({ p: [3] });
  expect(cdset({ p: {} }, "p.0", 3)).toEqual({ p: { 0: 3 } });
});

test("create object/array required to set deeply-nested property", () => {
  expect(cdset({}, "p.a", 3)).toEqual({ p: { a: 3 } });
  expect(cdset({}, "p.0", 3)).toEqual({ p: [3] });
});

test("preserves extra properties on cloned array", () => {
  const arr = [1, 2, 3];
  arr.extraProperty = "chips";

  const expected = ["a", 2, 3];
  expected.extraProperty = "chips";

  expect(cdset(arr, [0], "a")).toEqual(expected);
});
