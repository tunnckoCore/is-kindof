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

test.equal(is().regexp(/regex/), true)
test.equal(is().object({a: 'bcd'}), true)
test.equal(is().array([1, 2, 3]), true)
test.equal(is().undefined(), true)
test.equal(is().undefined(undefined), true)
test.equal(is().undefined(null), false)
test.equal(is().generator(generator), true)
test.equal(is().generatorFn(generatorfn), true)
test.equal(is().generatorFunction(generatorfn), true)
test.equal(is().date(new Date()), true)
test.equal(is().boolean(true), true)
test.equal(is().number(1234), true)
test.equal(is().null(null), true)
test.equal(is().string('foo'), true)
test.equal(is().set(new Set()), true)
test.equal(is().map(new Map()), true)
test.equal(is().weakset(new WeakSet()), true)
test.equal(is().weakmap(new WeakMap()), true)
test.equal(is().symbol(Symbol('foo')), true)
test.equal(is().error(new Error('foo')), true)
test.equal(is().error(new PluginError('foo', 'msg')), true)
test.equal(is().error(new PluginError('foo', 'msg', {name: 'MyErr'})), false)
test.equal(is().stream(got('https://github.com')), true)
test.equal(is().hybrid(gotHybrid('https://github.com')), true)
test.equal(is().promise(gotPromise('https://github.com')), true)
