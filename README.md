# [is-kindof][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Check type of given javascript value. Support promises, generators, streams, and native types. Built on [kind-of][] lib.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i is-kindof --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
var is = require('is-kindof')

is.array([1, 2]) // => true
is.boolean(true) // => true
is.buffer(new Buffer('foo')) // => true
is.date(new Date()) // => true
is.error(new Error('foo')) // => true
is.function(function noop () {}) // => true
is.generator((function * gen () { yield 42 })()) // => true
is.generatorfunction(function * genFn () {}) // => true
is.map(new Map()) // => true
is.null(null) // => true
is.number(123) // => true
is.object({ a: 'b' }) // => true
is.promise(Promise.resolve(123)) // => true
is.regexp(new RegExp('aa')) // => true
is.set(new Set()) // => true
is.stream(through2()) // => true
is.string('fooo') // => true
is.symbol(Symbol()) // => true
is.undefined(undefined) // => true
is.weakmap(new WeakMap()) // => true
is.weakset(new WeakSet()) // => true
```

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [is-async-function](https://www.npmjs.com/package/is-async-function): Is function really asynchronous function? Trying to guess that based on check if [common-callback-names][] exists as function arguments names or you can pass your custom. | [homepage](https://github.com/tunnckocore/is-async-function#readme "Is function really asynchronous function? Trying to guess that based on check if [common-callback-names][] exists as function arguments names or you can pass your custom.")
- [is-callback-function](https://www.npmjs.com/package/is-callback-function): Returns true if function is a callback. Checks its name is one of [common-callback-names][] - callback, cb, cb_, callback_, next, done, they can be customized… [more](https://github.com/tunnckocore/is-callback-function#readme) | [homepage](https://github.com/tunnckocore/is-callback-function#readme "Returns true if function is a callback. Checks its name is one of [common-callback-names][] - callback, cb, cb_, callback_, next, done, they can be customized, these are default.")
- [kind-of-extra](https://www.npmjs.com/package/kind-of-extra): Additional functionality to [kind-of][] type check utility. Support promises, generators, streams, errors. | [homepage](https://github.com/tunnckocore/kind-of-extra#readme "Additional functionality to [kind-of][] type check utility. Support promises, generators, streams, errors.")
- [kind-of-types](https://www.npmjs.com/package/kind-of-types): List of all javascript types. Used and useful for checking, validation, sanitizing and testing. Like isStream, isPromise, isWeakset and etc. | [homepage](https://github.com/tunnckocore/kind-of-types#readme "List of all javascript types. Used and useful for checking, validation, sanitizing and testing. Like isStream, isPromise, isWeakset and etc.")
- [kind-of](https://www.npmjs.com/package/kind-of): Get the native type of a value. | [homepage](https://github.com/jonschlinkert/kind-of "Get the native type of a value.")
- [minibase](https://www.npmjs.com/package/minibase): MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")
- [mukla](https://www.npmjs.com/package/mukla): Small, parallel and fast test framework with suppport for async/await, promises, callbacks, streams and observables. Targets and works at node.js v0.10 and above. | [homepage](https://github.com/tunnckocore/mukla#readme "Small, parallel and fast test framework with suppport for async/await, promises, callbacks, streams and observables. Targets and works at node.js v0.10 and above.")
- [to-callback](https://www.npmjs.com/package/to-callback): Converts result-first callbacks to classic (node.js-style) error-first callbacks with 3 lines of code. Useful when you want to promisify result-first APIs (like emitter.on). Inspired by… [more](https://github.com/tunnckocore/to-callback#readme) | [homepage](https://github.com/tunnckocore/to-callback#readme "Converts result-first callbacks to classic (node.js-style) error-first callbacks with 3 lines of code. Useful when you want to promisify result-first APIs (like emitter.on). Inspired by [rfpify][] and probably used in it.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-kindof/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[common-callback-names]: https://github.com/tunnckocore/common-callback-names
[kind-of]: https://github.com/jonschlinkert/kind-of
[rfpify]: https://github.com/samverschueren/rfpify

[npmjs-url]: https://www.npmjs.com/package/is-kindof
[npmjs-img]: https://img.shields.io/npm/v/is-kindof.svg?label=is-kindof

[license-url]: https://github.com/tunnckoCore/is-kindof/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/is-kindof.svg

[downloads-url]: https://www.npmjs.com/package/is-kindof
[downloads-img]: https://img.shields.io/npm/dm/is-kindof.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-kindof
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-kindof.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-kindof
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-kindof/master.svg

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

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

