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

isKindof.object({});
//=> true

isKindof.object([1, 2, 3]);
//=> false

isKindof.number(123);
//=> true

isKindof.isNumber(123);
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