/**
 * is-kindof <https://github.com/tunnckoCore/is-kindof>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var kindOf = require('kind-of');

module.exports = isKindof;

function isKindof(a, b, loose) {
  a = kindOf(a);
  return loose ? a == b : a === b;
};

isKindof.isArguments = function isArguments(val) {
  return isKindof(val, 'arguments');
};

isKindof.regex =
isKindof.regexp =
isKindof.regExp =
isKindof.isRegExp =
isKindof.isRegex =
isKindof.isRegexp = function isRegExp(val) {
  return isKindof(val, 'regexp');
};

isKindof.object =
isKindof.isObject = function isObject(val) {
  return isKindof(val, 'object');
};

isKindof.undefined =
isKindof.isUndefined = function isUndefined(val) {
  return isKindof(val, 'undefined');
};

isKindof.null =
isKindof.isNull = function isNull(val) {
  return isKindof(val, 'null');
};

isKindof.boolean =
isKindof.isBoolean = function isBoolean(val) {
  return isKindof(val, 'boolean');
};

isKindof.number =
isKindof.isNumber = function isNumber(val) {
  return isKindof(val, 'number');
};

isKindof.string =
isKindof.isString = function isString(val) {
  return isKindof(val, 'string');
};

isKindof.array =
isKindof.isArray = function isArray(val) {
  return isKindof(val, 'array');
};

isKindof.function =
isKindof.isFunction = function isFunction(val) {
  return isKindof(val, 'function');
};

isKindof.date =
isKindof.isDate = function isDate(val) {
  return isKindof(val, 'date');
};

isKindof.set =
isKindof.isSet = function isSet(val) {
  return isKindof(val, 'set');
};

isKindof.weakset =
isKindof.isWeakSet =
isKindof.isWeakset = function isWeakSet(val) {
  return isKindof(val, 'weakset');
};

isKindof.map =
isKindof.isMap = function isMap(val) {
  return isKindof(val, 'map');
};

isKindof.weakmap =
isKindof.isWeakMap =
isKindof.isWeakmap = function isWeakMap(val) {
  return isKindof(val, 'weakmap');
};

isKindof.symbol =
isKindof.isSymbol = function isSymbol(val) {
  return isKindof(val, 'symbol');
};
