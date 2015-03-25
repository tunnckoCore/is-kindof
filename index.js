/**
 * is-kindof <https://github.com/tunnckoCore/is-kindof>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var kindOf = require('kind-of');

module.exports = isKindof;

/**
 * Compare type of given `a` with native type `b` using [kind-of]
 *
 * **Example**
 * ```js
 * var is = require('is-kindof');
 *
 * is('str', 'string');
 * //=> true
 * ```
 *
 * @name   isKindof
 * @param  {*}        `a` value
 * @param  {String}   `b` type
 * @param  {Boolean}  `loose` if `true` will use `==` for comaprison
 * @return {Boolean}
 * @api public
 */
function isKindof(a, b, loose) {
  a = kindOf(a);
  return loose ? a == b : a === b;
}

/**
 * Check type of given `value` to be **arguments**
 *
 * **Example**
 * ```js *
 * is.isArguments(arguments);
 * //=> true
 *
 * is.isArguments('str');
 * //=> false
 * ```
 *
 * @name   isArguments
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.isArguments = function isArguments(value) {
  return isKindof(value, 'arguments');
};

/**
 * Check type of given `value` to be **object**
 *
 * **Example**
 * ```js
 * is.regexp(/^[a-h]/);
 * //=> true
 *
 * is.regex(/^[a-h]/);
 * //=> true
 *
 * is.isRegExp(/^[a-h]/);
 * //=> true
 *
 * is.regexp(new RegExp('^[a-h]'));
 * //=> true
 * ```
 *
 * @name   isRegexp
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.regex =
isKindof.regexp =
isKindof.regExp =
isKindof.isRegex =
isKindof.isRegExp =
isKindof.isRegexp = function isRegExp(value) {
  return isKindof(value, 'regexp');
};

/**
 * Check type of given `value` to be **object**
 *
 * **Example**
 * ```js
 * function Test() {};
 *
 * is.object({}, 'object');
 * //=> true
 *
 * is.object(Object.create(null));
 * //=> true
 *
 * is.object(new Test());
 * //=> true
 * ```
 *
 * @name   isObject
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.object =
isKindof.isObject = function isObject(value) {
  return isKindof(value, 'object');
};

/**
 * Check type of given `value` to be **undefined**
 *
 * **Example**
 * ```js
 * is.undefined(undefined);
 * //=> true
 * ```
 *
 * @name   isUndefined
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.undefined =
isKindof.isUndefined = function isUndefined(value) {
  return isKindof(value, 'undefined');
};

/**
 * Check type of given `value` to be **null**
 *
 * **Example**
 * ```js
 * is.null(null);
 * //=> true
 * ```
 *
 * @name   isNull
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.null =
isKindof.isNull = function isNull(value) {
  return isKindof(value, 'null');
};

/**
 * Check type of given `value` to be **boolean**
 *
 * **Example**
 * ```js
 * is.boolean(true);
 * //=> true
 *
 * is.boolean(new Boolean(true));
 * //=> true
 * ```
 *
 * @name   isBoolean
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.boolean =
isKindof.isBoolean = function isBoolean(value) {
  return isKindof(value, 'boolean');
};

/**
 * Check type of given `value` to be **number**
 *
 * **Example**
 * ```js
 * is.number(123);
 * //=> true
 * ```
 *
 * @name   isNumber
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.number =
isKindof.isNumber = function isNumber(value) {
  return isKindof(value, 'number');
};

/**
 * Check type of given `value` to be **string**
 *
 * **Example**
 * ```js
 * is.string('str');
 * //=> true
 * ```
 *
 * @name   isString
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.string =
isKindof.isString = function isString(value) {
  return isKindof(value, 'string');
};

/**
 * Check type of given `value` to be **array**
 *
 * **Example**
 * ```js
 * is.array([]);
 * //=> true
 * ```
 *
 * @name   isArray
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.array =
isKindof.isArray = function isArray(value) {
  return isKindof(value, 'array');
};

/**
 * Check type of given `value` to be **function**
 *
 * **Example**
 * ```js
 * is.function(function() {});
 * //=> true
 *
 * is.function(new Function());
 * //=> true
 * ```
 *
 * @name   isFunction
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.function =
isKindof.isFunction = function isFunction(value) {
  return isKindof(value, 'function');
};

/**
 * Check type of given `value` to be **date**
 *
 * **Example**
 * ```js
 * is.date(new Date());
 * //=> true
 * ```
 *
 * @name   isDate
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.date =
isKindof.isDate = function isDate(value) {
  return isKindof(value, 'date');
};

/**
 * Check type of given `value` to be **set**
 *
 * **Example**
 * ```js
 * is.set(new Set());
 * //=> true
 * ```
 *
 * @name   isSet
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.set =
isKindof.isSet = function isSet(value) {
  return isKindof(value, 'set');
};

/**
 * Check type of given `value` to be **weakset**
 *
 * **Example**
 * ```js
 * is.weakset(new WeakSet());
 * //=> true
 * ```
 *
 * @name   isWeakset
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.weakset =
isKindof.isWeakSet =
isKindof.isWeakset = function isWeakSet(value) {
  return isKindof(value, 'weakset');
};

/**
 * Check type of given `value` to be **map**
 *
 * **Example**
 * ```js
 * is.map(new Map());
 * //=> true
 * ```
 *
 * @name   isMap
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.map =
isKindof.isMap = function isMap(value) {
  return isKindof(value, 'map');
};

/**
 * Check type of given `value` to be **weakmap**
 *
 * **Example**
 * ```js
 * is.weakmap(new WeakMap());
 * //=> true
 * ```
 *
 * @name   isWeakmap
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.weakmap =
isKindof.isWeakMap =
isKindof.isWeakmap = function isWeakMap(value) {
  return isKindof(value, 'weakmap');
};

/**
 * Check type of given `value` to be **error**
 *
 * **Example**
 * ```js
 * is.error(new Error());
 * //=> true
 * ```
 *
 * @name   isError
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.error =
isKindof.isError = function isError(value) {
  return isKindof(value, 'error');
};

/**
 * Check type of given `value` to be **symbol**
 *
 * **Example**
 * ```js
 * is.symbol(Symbol('foo'));
 * //=> true
 * ```
 *
 * @name   isSymbol
 * @param  {*} `a` value
 * @return {Boolean}
 * @api public
 */
isKindof.symbol =
isKindof.isSymbol = function isSymbol(value) {
  return isKindof(value, 'symbol');
};
