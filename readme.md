## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Thin wrapper around `kind-of` and in bonus functional api.

## Install
```
npm i --save is-kindof
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isKindof = require('is-kindof');

isKindof([1, 2, 3], 'array');
//=> true

isKindof('foo', 'array');
//=> false

isKindof(/^[a-f]$/, 'regexp');
//=> true

isKindof({}, 'object');
//=> true
```

## API
### [isKindof](./index.js#L32)
> Compare type of given `a` with native type `b` using [kind-of]

- `a` **{*}** value
- `b` **{String}** type
- `loose` **{Boolean}** if `true` will use `==` for comaprison
- `returns` **{Boolean}**

**Example**
```js
var is = require('is-kindof');

is('str', 'string');
//=> true
```

### [.isArguments](./index.js#L54)
> Check type of given `value` to be **arguments**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.isArguments(arguments);
//=> true

is.isArguments('str');
//=> false
```

### [.isRegexp / .regexp](./index.js#L81)
> Check type of given `value` to be **regexp**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.regexp(/^[a-h]/);
//=> true

is.regex(/^[a-h]/);
//=> true

is.isRegExp(/^[a-h]/);
//=> true

is.regexp(new RegExp('^[a-h]'));
//=> true
```

### [.isObject / .object](./index.js#L112)
> Check type of given `value` to be **object**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
function Test() {};

is.object({});
//=> true

is.object(Object.create(null));
//=> true

is.object(new Test());
//=> true
```

### [.isUndefined / .undefined](./index.js#L131)
> Check type of given `value` to be **undefined**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.undefined(undefined);
//=> true
```

### [.isNull / .null](./index.js#L150)
> Check type of given `value` to be **null**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.null(null);
//=> true
```

### [.isBoolean / .boolean](./index.js#L172)
> Check type of given `value` to be **boolean**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.boolean(true);
//=> true

is.boolean(new Boolean(true));
//=> true
```

### [.isNumber / .number](./index.js#L191)
> Check type of given `value` to be **number**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.number(123);
//=> true
```

### [.isString / .string](./index.js#L210)
> Check type of given `value` to be **string**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.string('str');
//=> true
```

### [.isArray / .array](./index.js#L230)
> Check type of given `value` to be **array**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.array([]);
//=> true
```

### [.isFunction / .function](./index.js#L251)
> Check type of given `value` to be **function**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.function(function() {});
//=> true

is.function(new Function());
//=> true
```

### [.isDate / .date](./index.js#L270)
> Check type of given `value` to be **date**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.date(new Date());
//=> true
```

### [.isSet / .set](./index.js#L289)
> Check type of given `value` to be **set**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.set(new Set());
//=> true
```

### [.isWeakset / .weakset](./index.js#L308)
> Check type of given `value` to be **weakset**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.weakset(new WeakSet());
//=> true
```

### [.isMap / .map](./index.js#L328)
> Check type of given `value` to be **map**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.map(new Map());
//=> true
```

### [.isWeakmap / .weakmap](./index.js#L347)
> Check type of given `value` to be **weakmap**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.weakmap(new WeakMap());
//=> true
```

### [.isError / .error](./index.js#L367)
> Check type of given `value` to be **error**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.error(new Error());
//=> true
```

### [.isSymbol / .symbol](./index.js#L386)
> Check type of given `value` to be **symbol**

- `a` **{*}** value
- `returns` **{Boolean}**

**Example**
```js
is.symbol(Symbol('foo'));
//=> true
```



## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/is-kindof
[npmjs-img]: https://img.shields.io/npm/v/is-kindof.svg?style=flat&label=is-kindof

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-kindof?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-kindof.svg?style=flat

[license-url]: https://github.com/tunnckoCore/is-kindof/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/is-kindof
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-kindof.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/is-kindof
[daviddm-img]: https://img.shields.io/david/tunnckoCore/is-kindof.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/is-kindof/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 25, 2015_


[kind-of]: https://github.com/jonschlinkert/kind-of
