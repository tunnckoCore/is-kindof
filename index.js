/*!
 * is-kindof <https://github.com/tunnckoCore/is-kindof>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var kindOf = require('kind-of-extra')

function Is (val, types) {
  if (arguments.length === 2) {
    types = arrayify(types)

    var ret = false
    var len = types.length
    var i = 0

    while (i < len) {
      var type = types[i++]
      if (kindCheck(val, type)) {
        ret = true
        break
      }
    }
    return ret
  }
  if (arguments.length <= 1) {
    if (!(this instanceof Is)) {
      return new Is(val)
    }
    this.marker = arguments
    this.value = val
  }
  return false
}

function arrayify (val) {
  return Array.isArray(val) ? val : [val]
}

function kindCheck (val, type) {
  if (type === 'generatorFunction' || type === 'generatorfunction') {
    return kindOf(val) === 'generatorfunction'
  }

  return kindOf(val) === type
}

[
  'null',
  'set',
  'map',
  'date',
  'array',
  'string',
  'object',
  'number',
  'regexp',
  'boolean',
  'function',
  'undefined',
  'generator',
  'generatorfunction',
  'weakmap',
  'weakset',
  'symbol',
  'promise',
  'hybrid',
  'stream',
  'error'
].forEach(function (type) {
  var typeName = 'is' + type[0].toUpperCase() + type.slice(1)

  function isType (val) {
    if (arguments.length === 1) {
      return kindCheck(val, type)
    }
    if (this.marker === undefined) {
      return false
    }
    return kindCheck(this.value, type)
  }

  Is[type] = isType
  Is[typeName] = isType
  Is.prototype[type] = isType
  Is.prototype[typeName] = isType
})

Is.generatorFunction = Is.generatorfunction
Is.prototype.generatorFunction = Is.prototype.generatorfunction

module.exports = Is
