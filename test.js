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

var gen = (function * () {yield 42})()
var genfn = function * () {yield 42}

test.equal(is.generator(gen), true)                   // true
test.equal(is.generator(genfn), false)                // false
test.equal(is.generatorFunction(gen), false)          // false
test.equal(is.generatorFunction(genfn), true)         // true
test.equal(is.generator.fn(gen), false)               // false
test.equal(is.generator.fn(genfn), true)              // true
test.equal(is.number(123), true)                      // true
test.equal(is.undefined(123), false)                  // false
test.equal(is.undefined(undefined), true)             // true
test.equal(is.undefined(null), false)                 // false
test.equal(is.undefined(), false)                     // false
test.equal(is.undefined(null), false)                 // false
test.equal(is.isUndefined(undefined), true)           // true
test.equal(is.null(null), true)                       // true
test.equal(is.null(), false)                          // false
test.equal(is().undefined(), true)                    // true
test.equal(is(undefined).undefined(), true)           // true
test.equal(is(undefined).undefined(undefined), true)  // true
test.equal(is().undefined(123), false)                // false
test.equal(is().undefined(undefined), true)           // true
test.equal(is(null).undefined(), false)               // false
test.equal(is().undefined(null), false)               // false
