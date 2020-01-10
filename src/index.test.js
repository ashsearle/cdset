const deepset = require('./index.js');

test(() => {
  expect(deepset({}, 'a', 3)).toEqual({ a: 3 });
});
