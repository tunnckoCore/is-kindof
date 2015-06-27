# is-kindof [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Check type of given javascript value. Support promises, generators, streams, and native types. Thin wrapper around `kind-of` module.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-kindof --save
npm test
```


## Supported methods/types
- `null`
- `set`
- `map`
- `date`
- `array`
- `string`
- `object`
- `number`
- `regexp`
- `boolean`
- `function`
- `undefined`
- `generator`
- `generatorFunction`
- `weakmap`
- `weakset`
- `symbol`
- `promise`
- `hybrid`
- `stream`
- `error`

> All of them also exist prefixed with `is`, like `isNumber`, `isFunction` and etc.  
Also `generator function` check exists in the `.generator` and `.isGenerator`,  
like `.generator.fn()` and `.isGenerator.fn()`


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isKindof = require('is-kindof')

var gen = (function * () {yield 42})()
var genfn = function * () {yield 42}

is.isGenerator(gen)                // true
is.generator(gen)                  // true
is.generator(genfn)                // false
is.isGeneratorFunction(gen)        // false
is.generatorFunction(gen)          // false
is.generatorFunction(genfn)        // true
is.isGenerator.fn(gen)             // false
is.generator.fn(gen)               // false
is.generator.fn(genfn)             // true
is.number(123)                     // true
is.isRegexp(123)                   // false
is.isNumber(123)                   // true
is.undefined(123)                  // false
is.undefined(undefined)            // true
is.undefined(null)                 // false
is.undefined()                     // false
is.isUndefined(undefined)          // true
is.isNull(null)                    // true
is.null(null)                      // true
is.null()                          // false
is('foo').string()                 // true
is('foo').number()                 // false
is(123).string()                   // false
is(123).isString()                 // false
is(123).number()                   // true
is(123).isNumber()                 // true
is([1, 2, 3]).array()              // true
is([1, 2, 3]).isArray()            // true
is().undefined()                   // true
is().isUndefined()                 // true
is(undefined).undefined()          // true
is(undefined).undefined(undefined) // true
is().undefined(123)                // false
is().undefined(undefined)          // true
is(null).undefined()               // false
is().undefined(null)               // false
```


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-kindof/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-kindof
[npmjs-img]: https://img.shields.io/npm/v/is-kindof.svg?label=is-kindof

[license-url]: https://github.com/tunnckoCore/is-kindof/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-kindof
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-kindof.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-kindof
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-kindof.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-kindof
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-kindof.svg

[david-url]: https://david-dm.org/tunnckoCore/is-kindof
[david-img]: https://img.shields.io/david/tunnckoCore/is-kindof.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
