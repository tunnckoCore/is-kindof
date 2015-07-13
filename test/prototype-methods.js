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

test.equal(typeof is().buffer, 'function')
test.equal(typeof is().regexp, 'function')
test.equal(typeof is().object, 'function')
test.equal(typeof is().array, 'function')
test.equal(typeof is().undefined, 'function')
test.equal(typeof is().generator, 'function')
test.equal(typeof is().generatorfunction, 'function')
test.equal(typeof is().generatorFunction, 'function')
test.equal(typeof is().date, 'function')
test.equal(typeof is().boolean, 'function')
test.equal(typeof is().number, 'function')
test.equal(typeof is().null, 'function')
test.equal(typeof is().string, 'function')
test.equal(typeof is().set, 'function')
test.equal(typeof is().map, 'function')
test.equal(typeof is().weakset, 'function')
test.equal(typeof is().weakmap, 'function')
test.equal(typeof is().symbol, 'function')
test.equal(typeof is().error, 'function')
test.equal(typeof is().stream, 'function')
test.equal(typeof is().hybrid, 'function')
test.equal(typeof is().promise, 'function')
