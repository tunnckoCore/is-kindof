/*!
 * is-kindof <https://github.com/tunnckoCore/is-kindof>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var is = require('../index')

var got = require('got')
var gotPromise = require('got-promise')
var gotHybrid = require('then-got')
var PluginError = require('plugin-error')

var generator = (function * () {yield 42})()
var generatorfn = function * () {yield 42}

test.equal(is(new Buffer('str'), 'buffer'), true)
test.equal(is(/regex/, 'regexp'), true)
test.equal(is({a: 'bcd'}, 'object'), true)
test.equal(is([1, 2, 3], 'array'), true)
test.equal(is(undefined, 'undefined'), true)
test.equal(is(function () {}, 'function'), true)
test.equal(is(generatorfn, 'generatorfunction'), true)
test.equal(is(generatorfn, 'generatorFunction'), true)
test.equal(is(generator, 'generator'), true)
test.equal(is(new Date(), 'date'), true)
test.equal(is(true, 'boolean'), true)
test.equal(is(123, 'number'), true)
test.equal(is(null, 'null'), true)
test.equal(is('foo', 'string'), true)
test.equal(is(new Set(), 'set'), true)
test.equal(is(new Map(), 'map'), true)
test.equal(is(new WeakSet(), 'weakset'), true)
test.equal(is(new WeakMap(), 'weakmap'), true)
test.equal(is(Symbol('foo'), 'symbol'), true)
test.equal(is(new Error('foo'), 'error'), true)
test.equal(is(new PluginError('foo', 'msg'), 'error'), true)
test.equal(is(new PluginError('foo', 'msg', {name: 'MyErr'}), 'error'), false)
test.equal(is(new TypeError('foo'), 'error'), true)
test.equal(is(new SyntaxError('foo'), 'error'), true)
test.equal(is(got('https://github.com'), 'stream'), true)
test.equal(is(gotHybrid('https://github.com'), 'hybrid'), true)
test.equal(is(gotPromise('https://github.com'), 'promise'), true)
