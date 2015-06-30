/*!
 * is-kindof <https://github.com/tunnckoCore/is-kindof>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var kindOf = require('kind-of-extra')

function IsKindof (val, types) {
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
    if (!(this instanceof IsKindof)) {
      return new IsKindof(val)
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
  if (isGeneratorFnType(type)) {
    return kindOf(val) === 'generatorfunction'
  }

  return kindOf(val) === type
}

function isGeneratorFnType (type) {
  return type === 'generatorFunction' ||
    type === 'generatorfunction' ||
    type === 'generator function' ||
    type === 'generator fn' ||
    type === 'generatorFn' ||
    type === 'generatorfn' ||
    type === 'gen function' ||
    type === 'gen fn' ||
    type === 'genfn'
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
  'generatorFunction',
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

  IsKindof[type] = isType
  IsKindof[typeName] = isType
  IsKindof.prototype[type] = isType
  IsKindof.prototype[typeName] = isType
})
IsKindof.generatorFn = IsKindof.generatorFunction
IsKindof.generator.fn = IsKindof.generatorFunction
IsKindof.prototype.generatorFn = IsKindof.prototype.generatorFunction
IsKindof.prototype.generator.fn = IsKindof.prototype.generatorFunction

module.exports = IsKindof
