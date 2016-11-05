/*!
 * is-kindof <https://github.com/tunnckoCore/is-kindof>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

function check (type) {
  return function is (val) {
    return utils.typeOf(val) === type
  }
}

utils.types.forEach(function each (type) {
  exports[type] = check(type)
  module.exports[type] = check(type)
})
