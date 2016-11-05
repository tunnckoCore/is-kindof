/*!
 * is-kindof <https://github.com/tunnckoCore/is-kindof>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var is = require('./index')
var through2 = require('through2')

var keys = Object.keys(is)

var actual = {
  'array': [1, 2],
  'boolean': true,
  'buffer': new Buffer('foo'),
  'date': new Date(),
  'error': new Error('foo'),
  'function': function noop () {},
  'generator': (function * () { yield 42 })(),
  'generatorfunction': function * () {},
  'map': new Map(),
  'null': null,
  'number': 123,
  'object': { a: 'b' },
  'promise': Promise.resolve(123),
  'regexp': new RegExp('aa'),
  'set': new Set(),
  'stream': through2(),
  'string': 'fooo',
  'symbol': Symbol(),
  'undefined': undefined,
  'weakmap': new WeakMap(),
  'weakset': new WeakSet()
}

test('should export >=22 methods', function (done) {
  test.ok(keys.length > 21)
  done()
})

Object.keys(actual).forEach(function (name) {
  test('is.' + name + '(val) work', function (done) {
    test.ok(is[name](actual[name]), name + ' should work')
    done()
  }, true)
})
