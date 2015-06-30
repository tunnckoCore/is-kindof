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

test.equal(is('foobar', ['string', 'array']), true)
test.equal(is([1, 2, 3], ['string', 'array']), true)
test.equal(is(12345, ['string', 'array']), false)
test.equal(is(null, ['string', 'array']), false)
test.equal(is(null, ['string', 'null']), true)
test.equal(is(null, ['string', 'undefined']), false)
test.equal(is(false, ['null', 'undefined']), false)
test.equal(is(undefined, ['string', 'array']), false)
test.equal(is(undefined, ['string', 'undefined']), true)
