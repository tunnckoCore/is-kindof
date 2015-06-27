/*!
 * is-kindof <https://github.com/tunnckoCore/is-kindof>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isGens = require('is-es6-generators')
var isPromise = require('is-promise')
var isHybrid = require('is-hybrid')
var isStream = require('is-stream')
var kindOf = require('kind-of')

module.exports = IsKindof

function IsKindof (val, types) {
  if (arguments.length === 2) {
    types = kindOf(types) === 'array' ? types : [types]

    var ret = false
    var len = types.length
    var i = 0

    while (i < len) {
      var type = types[i++]
      if (check(val, type)) {
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

function check (val, type) {
  if (type === 'promise') {
    return isPromise(val)
  }
  if (type === 'hybrid') {
    return isHybrid(val)
  }
  if (type === 'stream') {
    return isStream(val)
  }
  if (type === 'error') {
    return isError(val)
  }
  if (type === 'generator') {
    return isGens.isGenerator(val)
  }
  if (isGeneratorFnType(type)) {
    return isGens.isGeneratorFunction(val)
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
      return check(val, type)
    }
    if (this.marker === undefined) {
      return false
    }
    return check(this.value, type)
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

function isError (val) {
  return isObjectLike(val) &&
    typeof val.message === 'string' &&
    String(val).indexOf('Error') !== -1
}

function isObjectLike (val) {
  return !!val && typeof val === 'object'
}

function isGeneratorFnType (type) {
  return type === 'generatorFunction' ||
    type === 'generatorfunction' ||
    type === 'generator function' ||
    type === 'generator fn' ||
    type === 'generatorfn' ||
    type === 'gen function' ||
    type === 'gen fn' ||
    type === 'genfn'
}

