# cdset
Helper function to minimally clone an object/array then overwrite a potentially deeply nested property value.

It's like [dset](https://github.com/lukeed/dset), but avoids mutating the original object.

## Install

```
$ npm install --save cdset
```

## Usage

```js
const cdset = require("cdset");

// Example 1: illustrates intermediate objects are automatically created as
// required to set deeply-nested property,
const foo = { a: 1, b: 2 };
console.log(cdset(foo, "d.e.f", "hello"));
// => { a: 1, b: 2, d: { e: { f: "hello" } } }

// The original object is unchanged:
console.log(foo);
// => { a: 1, b: 2 }


// Example 2: replace a deeply nested element of an array:
const bar = { foo: 123, bar: [4, 5, 6], baz: {} };
console.log(cdset(bar, "bar.1", 999));
// => { foo: 123, bar: [4, 999, 6], baz: {} }

// The original object is unchanged:
console.log(bar)
// => { foo: 123, bar: [4, 5, 6], baz: {} }


// Example 3: updating multiple properties by nesting calls to cdset:
const qux = {};
console.log(cdset(cdset(qux, "a.0.b.0", 1), "a.0.b.1", 2));
// => { a: [ { b: [1, 2] } ] }

// once again, the original object is unchanged:
console.log(qux);
// => {}
```

## API

### cdset(source, path, value)

Returns: a clone of source with the specified deeply-nestead-property set to value

#### source

Type: `Object` or `Array`

The source object/array to clone & update with a value.

#### path

Type: `String` or `Array`

The key path that should receive the value. May be in `x.y.z` or `['x', 'y', 'z']` formats.

#### value

Type: `Any`

The value that you want to set. Can be of any type!
