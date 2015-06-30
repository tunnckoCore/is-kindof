/*!
 * is-kindof <https://github.com/tunnckoCore/is-kindof>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var is = require('./index')

test('is-kindof:', function () {
  test('should return true when work as `kind-of` sugar - `is(val, type)`', function (done) {
    require('./test/kind-of-sugar')
    done()
  })
  test('should return false when `is(val, type)`', function (done) {
    test.equal(is(/regex/, 'string'), false)
    test.equal(is({a: 'bcd'}, 'stream'), false)
    test.equal(is([1, 2, 3], 'number'), false)
    done()
  })
  test('should be able `types` to be array - `is(val, [type, type, type])`', function (done) {
    require('./test/array-types-support')
    done()
  })
  test('should have static methods for all types - `is.method`', function (done) {
    require('./test/static-methods')
    done()
  })
  test('should have prototype methods for all types - `is().method`', function (done) {
    require('./test/prototype-methods')
    done()
  })
  test('should return true for `is(val).method()', function (done) {
    require('./test/ctor-value-method')
    done()
  })
  test('should return true for `is().method(val)', function (done) {
    require('./test/ctor-method-value')
    done()
  })
  test('should return true for `is.method(val)', function (done) {
    require('./test/static-method-value')
    done()
  })
})
